var selected_color = "#FF7909";
var unselected_color = "#000000";

console.log('DOM fully loaded and parsed');
// Get image elements
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
let img6 = document.getElementById('img6');

// let img1 = "<img src='assets/C1.jpg' height='150'>";
// let img2 = "<img src='assets/C2.jpg' height='150'>";
// let img3 = "<img src='assets/C3.jpg' height='150'>";
// let img4 = "<img src='assets/C4.jpg' height='150'>";
// let img5 = "<img src='assets/C5.jpg' height='150'>";
// let img6 = "<img src='assets/C6.jpg' height='150'>";

let displayOrder = [img1, img2, img3, img4, img5, img6];
const trueOrderArray = [[img1, 0], [img2, 1], [img3, 2], [img4, 3], [img5, 4], [img6, 5]];
const trueOrder = new Map(trueOrderArray);


let times_clicked = -1;
let times_switched = 0;
let switch_attempted = false;
let selectedImages = [];

function switchOrNot(imga, imgb) {
  if (trueOrder.get(imga) > trueOrder.get(imgb)) {
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
  imglist.forEach(img => {
    if (img && img.classList) {
      img.classList.remove('highlighted');
    }
  });
  return imglist;
}

displayOrder.forEach(img => {
  img.addEventListener('click', () => {
    console.log('DOM fully loaded and parsed111');
    console.log('Image clicked:', img.id); // Debugging
    if (selectedImages.length < 2) {
      img.classList.add('highlighted');
      console.log('Image highlighted:', img.id); // Debugging
      selectedImages.push(img);
    }
    if (selectedImages.length === 2) {
      const [imga, imgb] = selectedImages;
      if (switchOrNot(imga, imgb)) {
        // Swap images if they are in the wrong order
        const tempSrc = imga.src;
        imga.src = imgb.src;
        imgb.src = tempSrc;
        times_switched++;
      }
      // Remove highlighting after checking/switching
      imga.classList.remove('highlighted');
      imgb.classList.remove('highlighted');
      selectedImages = [];
    }
  });
});

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Initialize jsPsych
const jsPsych = initJsPsych();

// Define the timeline
const timeline = [];

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
    return displayOrder.map(img => img.outerHTML).concat(["<button class='jspsych-btn' id='finish-btn'>Finish</button>"]);
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
    let data1 = jsPsych.data.get().last(1).values()[0];
    let data2 = jsPsych.data.get().last(2).values()[0];

    if (data1.response !== null && displayOrder[data1.response] !== undefined) {
      const imgElement = displayOrder[data1.response];
      if (imgElement.classList.contains('highlighted')) {
        imgElement.classList.remove('highlighted');
        switch_attempted = false;
      } else {
        imgElement.classList.add('highlighted');
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
    if (jsPsych.pluginAPI.compareKeys(String(data1.response), String(6))) {
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
    let finalDisplay = ["True order revealed...", "<br>"];
    removeSelection(displayOrder).forEach(element => finalDisplay.push(element.outerHTML, trueOrder.get(element) + 1));
    return finalDisplay.join("<br>");
  },
};

timeline.push(finish);

jsPsych.run(timeline);
