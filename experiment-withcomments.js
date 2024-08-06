var selected_color = "#FF7909"
var unselected_color = "#000000"

// Initialize jsPsych
const jsPsych = initJsPsych();

// Define the timeline
const timeline = [];

// Define the images
let img1 = "<img src='assets/C1.jpg' height='150'>";
let img2 = "<img src='assets/C2.jpg' height='150'>";
let img3 = "<img src='assets/C3.jpg' height='150'>";
let img4 = "<img src='assets/C4.jpg' height='150'>";
let img5 = "<img src='assets/C5.jpg' height='150'>";
let img6 = "<img src='assets/C6.jpg' height='150'>";

let displayOrder = [img1, img2, img3, img4, img5, img6];
const trueOrderArray = [[img1, 0], [img2, 1], [img3, 2], [img4, 3], [img5, 4], [img6, 5]]; //should be random and should be dictionary
const trueOrder = new Map(trueOrderArray);

let times_clicked = -1;
let times_switched = 0;
let switch_attempted = false;

function switchOrNot(imga, imgb) {
  if (trueOrder.get(imga) > trueOrder.get(imgb)) {//get the value for dictionary
    var bigger = imga;
    var smaller = imgb;
  } else {
    var bigger = imgb;
    var smaller = imga;
  }
  let clean = removeSelection(displayOrder);
  return !(clean.indexOf(bigger) > clean.indexOf(smaller));
}

function removeSelection(imglist) {
  let result = imglist.map(x => x);
  for (let i = 0; i < imglist.length; i++) {
    if (imglist[i].includes(" id='selected'")) { //id=selected might be jspsych features
      result[i] = result[i].replace(" id='selected'", "");
    }
  }
  return result;
}

function shuffle(array) { //js should have shuffle function
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  array.push("finish");
  return array;
}

// Preload assets
timeline.push({
  type: jsPsychPreload,
  images: ['assets/C1.jpg', 'assets/C2.jpg', 'assets/C3.jpg', 'assets/C4.jpg', 'assets/C5.jpg', 'assets/C6.jpg'],
});

// Welcome screen
timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    displayOrder = shuffle(displayOrder);
    return "<p>Welcome to Sorting!<p/>";
  },
});

const display_img = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "",
  choices: function () {
    return displayOrder;
  },
  button_html: '<button class="jspsych-btn">%choice%</button>',
  prompt: "<p>Select any two images to compare, or click finish if you are done sorting.</p>",
};

const refresh = {
  timeline: [display_img],
  conditional_function: function () {
    if (times_clicked % 2 === 0 && times_clicked !== 0) {
      displayOrder = removeSelection(displayOrder);
    }
    times_clicked++;
    let data1 = jsPsych.data.get().last(1).values()[0];//the second selection
    let data2 = jsPsych.data.get().last(2).values()[0]; //the first selection

    if (data1.response !== null && displayOrder[data1.response] !== undefined) {
      if (displayOrder[data1.response].includes(" id='selected'")) {
        displayOrder[data1.response] = displayOrder[data1.response].replace(" id='selected'", "");
        switch_attempted = false; //if click an image twice then selection is removed
      } else {
        displayOrder[data1.response] = displayOrder[data1.response].replace("<img", "<img id='selected'");
        switch_attempted = true;
      }
      if (times_clicked % 2 === 0 && switch_attempted) {
        times_switched++;
      }
    }
    let clean = removeSelection(displayOrder);
    if (data2.response !== null && times_clicked % 2 === 0 && switchOrNot(clean[data1.response], clean[data2.response])) {
      let temp = displayOrder[data1.response];
      displayOrder[data1.response] = displayOrder[data2.response];
      displayOrder[data2.response] = temp;
    }
    if (jsPsych.pluginAPI.compareKeys(String(data1.response), String(6))) {//whether you clicked "finished" which is string(6)
      return false;
    }
    return true;
  },
};

const loopNode = {
  timeline: [refresh],
  loop_function: function (data) {
    var data = jsPsych.data.get().last(1).values()[0];
    if (jsPsych.pluginAPI.compareKeys(String(data.response), String(6))) {
      return false;
    } else {
      return true;
    }
  },
};

timeline.push(loopNode);

const finish = {
  type: jsPsychHtmlKeyboardResponse,
  prompt: function () {
    return "You made " + String(times_switched) + " switches in total";
  },
  stimulus: function () {
    displayOrder.pop();
    let finalDisplay = ["True order revealed...", "<br>"];
    removeSelection(displayOrder).forEach(element => finalDisplay.push(element, trueOrder.get(element) + 1));
    return finalDisplay;
  },
};

timeline.push(finish);

jsPsych.run(timeline);