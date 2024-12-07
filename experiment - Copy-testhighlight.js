// var selected_color = "#FF7909"
// var unselected_color = "#FFFFFF"

// Initialize jsPsych
const jsPsych = initJsPsych();

// Define the timeline
const timeline = [];

// Preload assets
timeline.push({
  type: jsPsychPreload,
  // images: ['Intro_Pic.png','G_1.jpg', 'G_2.jpg', 'G_3.jpg', 'G_4.jpg', 'G_5.jpg', 'G_6.jpg','G_7.jpg','G_8.jpg','G_9.jpg','G_10.jpg','Out-of-order-scale.jpg'], //cogntion.run version

  images: ['assets/Intro_Pic.png','assets/G_1.jpg', 'assets/G_2.jpg', 'assets/G_3.jpg', 'assets/G_4.jpg', 'assets/G_5.jpg', 'assets/G_6.jpg','assets/G_7.jpg','assets/G_8.jpg','assets/G_9.jpg','assets/G_10.jpg','assets/Out-of-order-scale.jpg'],
});

// Define the images

//load all available images
// //Cognition.run version
// let img_intro = "<img src='Intro_Pic.png' height='120'>";
// let img_outoforder = "<img src='Out-of-order-scale.jpg' height='200'>";
// let img1 = "<img src='G_1.jpg' height='90'>";
// let img2 = "<img src='G_2.jpg' height='90'>";
// let img3 = "<img src='G_3.jpg' height='90'>";
// let img4 = "<img src='G_4.jpg' height='90'>";
// let img5 = "<img src='G_5.jpg' height='90'>";
// let img6 = "<img src='G_6.jpg' height='90'>";
// let img7 = "<img src='G_7.jpg' height='90'>";
// let img8 = "<img src='G_8.jpg' height='90'>";
// let img9 = "<img src='G_9.jpg' height='90'>";
// let img10 = "<img src='G_10.jpg' height='90'>";

//version before cognition.run
let img_intro = "<img src='assets/Intro_Pic.png' height='120'>";
let img_outoforder = "<img src='assets/Out-of-order-scale.jpg' height='200'>";
let img1 = "<img src='assets/G_1.jpg' height='90'>";
let img2 = "<img src='assets/G_2.jpg' height='90'>";
let img3 = "<img src='assets/G_3.jpg' height='90'>";
let img4 = "<img src='assets/G_4.jpg' height='90'>";
let img5 = "<img src='assets/G_5.jpg' height='90'>";
let img6 = "<img src='assets/G_6.jpg' height='90'>";
let img7 = "<img src='assets/G_7.jpg' height='90'>";
let img8 = "<img src='assets/G_8.jpg' height='90'>";
let img9 = "<img src='assets/G_9.jpg' height='90'>";
let img10 = "<img src='assets/G_10.jpg' height='90'>";




//////////////////////////////////////////////////////////////////// INTRO BLOCK ///////////////////////////////////////////////////////////////////////////


function removeSelection_intro(imglist) {
  let result = imglist.map(x => x);
  for (let i = 0; i < imglist.length; i++) {
    if (imglist[i].includes(" id='selected'")) { //id=selected might be jspsych features
      result[i] = result[i].replace(" id='selected'", "");
    }
  }
  return result;
}

function switchOrNot_intro(imga, imgb) {
  if (trueOrder.get(imga) > trueOrder.get(imgb)) {//get the value for dictionary
    var bigger = imga;
    var smaller = imgb;
  } else {
    var bigger = imgb;
    var smaller = imga;
  }
  let clean = removeSelection_intro(display_intro);
  return !(clean.indexOf(bigger) > clean.indexOf(smaller));
}


intro_order=[4, 2, 3, 5, 1]
intro_img_order=[[img1,4],[img2,2],[img3,3],[img4,5],[img5,1]]
const trueOrder = new Map(intro_img_order);
// const TrueOrder_io=[img5,img2,img3,img1,img4];
// let displayOrder=[img1,img2,img3,img4,img5];
let display_intro=[img1,img2,img3,img4,img5];
const n_img_disp=5;

let times_clicked = -1;
let times_switched = 0;
let switch_attempted = false;

timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    display_intro.push("finish"); 
    console.log(display_intro)
    return "<p> + <p/>";
  },
  trial_duration: 500,
});

const display_img_intro = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "",
  choices: function () {
    console.log(display_intro);
    return display_intro;
  },
  button_html: '<button class="jspsych-btn">%choice%</button>',
  prompt: "<p>Select any two images to compare, or click finish if you are done sorting.</p>",
};


// const refresh_intro = {
//   timeline: [display_img_intro],
//   conditional_function: function () {
//     // console.log("refresh");
//     if (times_clicked % 2 === 0 && times_clicked !== 0) { //Comment out here and moved it after switchornot, so highlight will disappear when clicking on two items
//       display_intro = removeSelection_intro(display_intro);
//     }
//     times_clicked++;
//     let data1_ib = jsPsych.data.get().last(1).values()[0].response;//the second selection
//     let data2_ib = jsPsych.data.get().last(2).values()[0].response; //the first selection

//     if (data1_ib !== null && display_intro[data1_ib] !== undefined) {
//       if (display_intro[data1_ib].includes(" id='selected'")) {
//         display_intro[data1_ib] = display_intro[data1_ib].replace(" id='selected'", "");
//         // console.log(display_intro[data1])
//         switch_attempted = false; //if click an image twice then selection is removed
//       } else {
//         display_intro[data1_ib] = display_intro[data1_ib].replace("<img", "<img id='selected'");
//         switch_attempted = true;
//       }
//       if (times_clicked % 2 === 0 && switch_attempted) {
//         times_switched++;
//       }
//     }
//     let clean = removeSelection_intro(display_intro);
//     if (data2_ib !== null && times_clicked % 2 === 0 && switchOrNot_intro(clean[data1_ib], clean[data2_ib])) {
//       let temp = display_intro[data1_ib];
//       display_intro[data1_ib] = display_intro[data2_ib];
//       display_intro[data2_ib] = temp;
//     }
//     // if (times_clicked % 2 === 0 && times_clicked !== 0) {
//     //  display_intro = removeSelection_intro(display_intro);
//     // }
//     if (jsPsych.pluginAPI.compareKeys(String(data1_ib), String(n_img_disp))) {//whether you clicked "finished" which is string(6)
//       return false;
//     }
//     return true;
//   },
//   // on_finish:function(data){
//   //   console.log("a",times_clicked);
//   //   if ((times_clicked+1) % 2 === 0 && (times_clicked+1) !== 0) { //Comment out here and moved it after switchornot, so highlight will disappear when clicking on two items
//   //     // setTimeout(function(){
//   //     //   console.log("timeout")
//   //       removeSelection_intro(display_intro)

//   //     // },150)
      
//   //   }
//   // },
// };



// Track selected images
let selectedImages = [];

const refresh_intro = {
  timeline: [display_img_intro],
  conditional_function: function () {
    times_clicked++;
    let data1_ib = jsPsych.data.get().last(1).values()[0].response;
    let data2_ib = jsPsych.data.get().last(2).values()[0].response;

    // Handle first selection
    if (data1_ib !== null && display_intro[data1_ib] !== undefined) {
      // Add highlight to first selected image
      if (!display_intro[data1_ib].includes(" id='selected'")) {
        display_intro[data1_ib] = display_intro[data1_ib].replace("<img", "<img id='selected'");
        selectedImages.push(data1_ib);
        switch_attempted = true;
      }

      // If this is the second selection
      if (selectedImages.length === 2) {
        times_switched++;
        
        // Store the images to swap
        let clean = removeSelection_intro(display_intro);
        let shouldSwap = switchOrNot_intro(clean[data1_ib], clean[data2_ib]);
        
        // Remove highlights after delay
        setTimeout(() => {
          display_intro = removeSelection_intro(display_intro);
          selectedImages = [];
          
          // Perform swap if needed
          if (shouldSwap) {
            let temp = display_intro[data1_ib];
            display_intro[data1_ib] = display_intro[data2_ib];
            display_intro[data2_ib] = temp;
          }
        }, 300);
      }
    }

    // Check for finish button click
    if (jsPsych.pluginAPI.compareKeys(String(data1_ib), String(n_img_disp))) {
      return false;
    }
    return true;
  }
};


const loopNode_intro = {
  timeline: [refresh_intro],
  loop_function: function (data) {
    var data = jsPsych.data.get().last(1).values()[0].response;
    // console.log("loop");
    

    if (jsPsych.pluginAPI.compareKeys(String(data), String(n_img_disp))) {
      return false;
    } else {
      return true;
    }
  },
  // on_finish:function(data){
  //   console.log("a",times_clicked);
  //   if ((times_clicked+1) % 2 === 0 && (times_clicked+1) !== 0) { //Comment out here and moved it after switchornot, so highlight will disappear when clicking on two items
  //     setTimeout(function(){
  //       console.log("timeout")
  //     display_intro=removeSelection_intro(display_intro);

  //     },500)
      
  //   }
  // },
};




timeline.push(loopNode_intro);

// the final page shows true order as number overlapped on your order
const finish_intro = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    display_intro.pop();
    display_intro=removeSelection_intro(display_intro);
    let finalDisplay = [];
    
    var TrueOrder_o=[];
    for(var i=0; i<n_img_disp; i++){
      TrueOrder_o.push(trueOrder.get(display_intro[i])) // order of final display (if it is 1,2,3,4,5 then the sorting is correct)
    };

    for (var range_len=[],i=1;i<=n_img_disp;++i) range_len.push(i);

    if (JSON.stringify(TrueOrder_o) === JSON.stringify(range_len)){
      finalDisplay.push("You sorted correctly with "+ String(times_switched) + " comparisons in total. <br><br> "+ display_intro.join("")+ "<br><br> Your final order is " + TrueOrder_o + "<br><br><br>The method in this game will allow you to sort correctly with 8 comparisons. Press Enter to learn it!")
    } else {
      finalDisplay.push("You sorted incorrectly with "+ String(times_switched) + " comparisons in total. <br><br> "+ display_intro.join("")+ "<br><br> Your final order is " + TrueOrder_o + "<br><br><br>The method in this game will allow you to sort correctly with 8 comparisons. Press Enter to learn it!")
    }
    return finalDisplay;
  },
};

timeline.push(finish_intro);



jsPsych.run(timeline);