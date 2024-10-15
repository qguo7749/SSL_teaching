var selected_color = "#FF7909"
var unselected_color = "#FFFFFF"

// Initialize jsPsych
const jsPsych = initJsPsych();

// Define the timeline
const timeline = [];

// Preload assets
timeline.push({
  type: jsPsychPreload,
  images: ['assets/C1.jpg', 'assets/C2.jpg', 'assets/C3.jpg', 'assets/C4.jpg', 'assets/C5.jpg', 'assets/C6.jpg','assets/C7.jpg','assets/C8.jpg','assets/V_1_0.jpg','assets/V_1_1.jpg','assets/V_1_2.jpg','assets/V_1_3.jpg','assets/V_1_4.jpg','assets/V_1_5.jpg','assets/V_1_6.jpg'],
});

// Define the images

//load all available images
let img1 = "<img src='assets/C1.jpg' height='120'>";
let img2 = "<img src='assets/C2.jpg' height='120'>";
let img3 = "<img src='assets/C3.jpg' height='120'>";
let img4 = "<img src='assets/C4.jpg' height='120'>";
let img5 = "<img src='assets/C5.jpg' height='120'>";
let img6 = "<img src='assets/C6.jpg' height='120'>";
let img7 = "<img src='assets/C7.jpg' height='120'>";
let img8 = "<img src='assets/C8.jpg' height='120'>";
let img_v_1_0 = "<img src='assets/V_1_0.jpg' height='300'>";
let img_v_1_1 = "<img src='assets/V_1_1.jpg' height='300'>";
let img_v_1_2 = "<img src='assets/V_1_2.jpg' height='300'>";
let img_v_1_3 = "<img src='assets/V_1_3.jpg' height='300'>";
let img_v_1_4 = "<img src='assets/V_1_4.jpg' height='300'>";
let img_v_1_5 = "<img src='assets/V_1_5.jpg' height='300'>";
let img_v_1_6 = "<img src='assets/V_1_6.jpg' height='300'>";


//////////////////////////////////////////////////////////////////// LEARN BLOCK ///////////////////////////////////////////////////////////////////////////



list_comp=[[0, 1], [1, 2], [0, 1], [2, 3], [3, 4], [2, 3]]
list_comp_bool=[0, 1, 0, 0, 1, 0]
const img_t=[img1,img2,img3,img4,img5,img_v_1_0]
const img_s=[img1,img2,img3,img4,img5]
const img_v_1=[img_v_1_1,img_v_1_2,img_v_1_3,img_v_1_4,img_v_1_5,img_v_1_6]


for(var i=0; i<list_comp_bool.length; i++){

  const index_t_1=list_comp[i][0]
  const index_t_2=list_comp[i][1]
  const imit_swap=list_comp_bool[i]
  const img_v_1_i=img_v_1[i]
  

  const imi_hl1={
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
      img_t[index_t_1]=img_t[index_t_1].replace("<img", "<img id='selected'");
      let img_t_join=img_t.join(" ");
      return img_t_join
    },
    choices: img_s,
    margin_vertical:'100px',
    button_html: '<button class="jspsych-btn" style="position: relative ;right:100%; ">%choice%</button>',
    prompt: "<p>Select any two images to compare, or click finish if you are done sorting.</p>",
    trial_duration:500,
  }

  const imi_hl2={
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
      // img_t[index_t_1]=img_t[index_t_1].replace("<img", "<img id='selected'");
      img_t[index_t_2]=img_t[index_t_2].replace("<img", "<img id='selected'");
      let img_t_join=img_t.join(" ");
      return img_t_join
    },
    choices: img_s,
    margin_vertical:'100px',
    button_html: '<button class="jspsych-btn" style="position: relative ;right:100%; ">%choice%</button>',
    prompt: "<p>Select any two images to compare, or click finish if you are done sorting.</p>",
    trial_duration:800,
  }


  const imi_comp1={
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
      if (imit_swap==1){
        let temp=img_t[index_t_1]
        img_t[index_t_1]=img_t[index_t_2];
        img_t[index_t_2]=temp;
        img_t_join=img_t.join(" ");

      }else{
        img_t[index_t_1]=img_t[index_t_1];
        img_t[index_t_2]=img_t[index_t_2];
        img_t_join=img_t.join(" ");
      }

      return img_t_join
    },
    choices: img_s,
    margin_vertical:'100px',
    button_html: '<button class="jspsych-btn" style="position: relative ;right:100%; ">%choice%</button>',
    prompt: "<p> Select any two images to compare, or click finish if you are done sorting.</p>",
    trial_duration:1000,
  }

  timeline.push(imi_hl1)
  timeline.push(imi_hl2)
  timeline.push(imi_comp1)

  const imi_comp2={
    type: jsPsychHtmlButtonResponse,
    stimulus: img_t,
    choices: function () {
      // console.log(img_s)
      return img_s;
    },
    margin_vertical:'100px',
    button_html: '<button class="jspsych-btn" style="position: relative ;right:100%; ">%choice%</button>',
    prompt: "<p>Select any two images to compare, or click finish if you are done sorting.</p>",
  }


  const refresh = {
    timeline: [imi_comp2],
    conditional_function: function () {

      let data1 = jsPsych.data.get().last(1).values()[0];//the second selection
      let data2 = jsPsych.data.get().last(2).values()[0]; //the first selection
      // console.log(data2.response)
      if (jsPsych.pluginAPI.compareKeys(String(data1.response), String(index_t_2))&&jsPsych.pluginAPI.compareKeys(String(data2.response), String(index_t_1))&& imit_swap==1) {
        
        // console.log("yes")

        return false;
      } else if (jsPsych.pluginAPI.compareKeys(String(data1.response), String(index_t_1))&&jsPsych.pluginAPI.compareKeys(String(data2.response), String(index_t_2))&& imit_swap==1){
        
        // console.log("yes")

        return false
      } else {
        
        return true;
      }
    },
  };



  const loopNode = {
    timeline: [refresh],
    loop_function: function (data) {
      let data1 = jsPsych.data.get().last(1).values()[0];//the second selection
      let data2 = jsPsych.data.get().last(2).values()[0]; //the first selection
      if (jsPsych.pluginAPI.compareKeys(String(data1.response), String(index_t_2))&&jsPsych.pluginAPI.compareKeys(String(data2.response), String(index_t_1))){
        if (imit_swap==1) {
          let temp = img_s[data1.response];
          img_s[data1.response] = img_s[data2.response];
          img_s[data2.response] = temp;
          img_t.pop();
          img_t.push(img_v_1_i)
          return false;
        } else {
          img_t.pop();
          img_t.push(img_v_1_i)
          return false;
          
        };
      };
      return true;
    },
  };
  
  timeline.push(loopNode)



  
  

  const imi_hl0={
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
      // console.log(img_t) 
      img_t[index_t_1]=img_t[index_t_1].replace("id='selected'", "");
      img_t[index_t_2]=img_t[index_t_2].replace("id='selected'", "");
      const img_t_join=img_t.join(" ");
      
      return img_t_join
    },
    choices: img_s,
    margin_vertical:'100px',
    button_html: '<button class="jspsych-btn"  style="position: relative ;right:100%; ">%choice%</button>',
    prompt: "<p>Select any two images to compare, or click finish if you are done sorting.</p>",
    trial_duration:500,
  }
  timeline.push(imi_hl0)
};

//////////////////////////////////////////////////////////////////// DO BLOCK ///////////////////////////////////////////////////////////////////////////
// import ini_shuffle from "./do_block_funcs";
// ini_shuffle();
n_img_disp_list=[]
for(var i=0; i<4; i++){
  if (i%2==0){n_img_disp_list.push(5)
  } else {n_img_disp_list.push(8)
  }
  
// Functions
// assign random order to array of images, output is a 2d array, each row is "image source + order number"
  function ini_shuffle(array) {
    var tmp, current, top = array.length;
    // console.log(top)
    var trueOrderArray_test=[];
    var ii=0;
    if(top) while(--top) {
      // console.log(top)
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
      trueOrderArray_test.push([img_all[ii],array[top]]);
      ii++;
    }
    trueOrderArray_test.push([img_all[ii],array[top]]);
    return trueOrderArray_test;
  }
  

  // Generate true order given number of images ()
  function disp_n_true(n_img_disp,n_img) {
    // Make the right order (trueOrderArray) different each time
    for (var aa=[],i=0;i<n_img;++i) aa[i]=i;
    const trueOrderArray = ini_shuffle(aa) //assign random order to all images in img_all
    // console.log("1",trueOrderArray);
    const trueOrder = new Map(trueOrderArray);
    let trueOrderArray_sort = trueOrderArray.map((x) => x);
    trueOrderArray_sort.sort(function (element_a, element_b) {
      return element_a[1] - element_b[1];
    });
    trueOrderArray_sort=trueOrderArray_sort.slice(0,n_img_disp) //selected  the first n_img_disp images from shuffled img_all to show
    const TrueOrder_io=trueOrderArray_sort.map(function(value,index) { return value[0]; }); //io means image only, show the list of images selected
    return [TrueOrder_io,trueOrder];
  }


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

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    array.push("finish");
    return array;
  }


  

  img_all=[img1, img2, img3, img4, img5, img6, img7, img8];


  let n_img=img_all.length //all available images in the folder
  let n_img_disp=n_img_disp_list[i]

  const [TrueOrder_io,trueOrder] = disp_n_true(n_img_disp,n_img)
  let displayOrder=TrueOrder_io.map((x) => x); //new code


  let times_clicked = -1;
  let times_switched = 0;
  let switch_attempted = false;


  // Welcome screen
  timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      displayOrder = shuffle(displayOrder); //why put it here
      return "<p> + <p/>";
    },
    trial_duration: 1000,
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
          console.log(displayOrder[data1.response])
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
      if (jsPsych.pluginAPI.compareKeys(String(data1.response), String(n_img_disp))) {//whether you clicked "finished" which is string(6)
        return false;
      }
      return true;
    },
  };

  const loopNode = {
    timeline: [refresh],
    loop_function: function (data) {
      var data = jsPsych.data.get().last(1).values()[0];
      if (jsPsych.pluginAPI.compareKeys(String(data.response), String(n_img_disp))) {
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
      
      let finalDisplay = ["True order revealed...<br>"];
      finalDisplay.push(TrueOrder_io.join(" "))
      console.log(finalDisplay.join(" "))    
      finalDisplay.join(" ");


      finalDisplay.push("<br><br><br>Your final order is <br>");
      finalDisplay.push(removeSelection(displayOrder).join(""));
      // finalDisplay.join("");
      return finalDisplay;
    },
  };

  timeline.push(finish);
}




//////////////////////////////////////////////////////////////////// TEACH BLOCK ///////////////////////////////////////////////////////////////////////////



jsPsych.run(timeline);