var selected_color = "#FF7909"
var unselected_color = "#FFFFFF"

// Initialize jsPsych
const jsPsych = initJsPsych();

// Define the timeline
const timeline = [];

// Preload assets
timeline.push({
  type: jsPsychPreload,
  // images: ['assets/Intro_Pic.png','assets/C1.jpg', 'assets/C2.jpg', 'assets/C3.jpg', 'assets/C4.jpg', 'assets/C5.jpg', 'assets/C6.jpg','assets/C7.jpg','assets/C8.jpg','assets/V_1_0.jpg','assets/V_1_1.jpg','assets/V_1_2.jpg','assets/V_1_3.jpg','assets/V_1_4.jpg','assets/V_1_5.jpg','assets/V_1_6.jpg','assets/V_2_0.jpg'],
  images: ['assets/Intro_Pic.png','assets/G_1.jpg', 'assets/G_2.jpg', 'assets/G_3.jpg', 'assets/G_4.jpg', 'assets/G_5.jpg', 'assets/G_6.jpg','assets/G_7.jpg','assets/G_8.jpg','assets/G_9.jpg','assets/G_10.jpg','assets/Out-of-order-scale.jpg'],
});

// Define the images

//load all available images
let img_intro = "<img src='assets/Intro_Pic.png' height='200'>";
let img_outoforder = "<img src='assets/Out-of-order-scale.jpg' height='200'>";
let img1 = "<img src='assets/G_1.jpg' height='120'>";
let img2 = "<img src='assets/G_2.jpg' height='120'>";
let img3 = "<img src='assets/G_3.jpg' height='120'>";
let img4 = "<img src='assets/G_4.jpg' height='120'>";
let img5 = "<img src='assets/G_5.jpg' height='120'>";
let img6 = "<img src='assets/G_6.jpg' height='120'>";
let img7 = "<img src='assets/G_7.jpg' height='120'>";
let img8 = "<img src='assets/G_8.jpg' height='120'>";
let img9 = "<img src='assets/G_9.jpg' height='120'>";
let img10 = "<img src='assets/G_10.jpg' height='120'>";



//////////////////////////////////////////////////////////////////// INTRO BLOCK ///////////////////////////////////////////////////////////////////////////

const Intro = {
  type: jsPsychInstructions,
  pages: [
  '<p>Welcome to the experiment! </p>',
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">Imagine you have five gold blocks that vary in weights. How can you sort them by weight using a balance? There are many ways to do that. <strong>In this game, you will learn a method that is very efficient. Don’t worry about coming up with new methods. Your task is to learn this method as well as possible, use this method in the test, then select a curriculum that you believe is most helpful to teach this method. </strong> Some other people will learn with your curriculum as your students. <br><br>Your reward bonus will depend on your performance in the test as well as your teaching outcome (your students’ performance in the test).</p>'
  +'<br>' + 
  img_intro,
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px"> To get you familiar with this game, let’s try it first. This will not be counted as your performance. <br><br> <strong> You can only compare two items at each time by clicking them. If their order is wrong, they will swap positions. The animal on the item is only a mark and not relevant to the order of the items. </strong>  When you are done, click “Finish”. </p>'
  + 
  img_intro,
  ],
  show_clickable_nav: true
}

timeline.push(Intro)


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
  let clean = removeSelection_intro(displayOrder);
  return !(clean.indexOf(bigger) > clean.indexOf(smaller));
}


intro_order=[4, 2, 3, 5, 1]
intro_img_order=[[img1,4],[img2,2],[img3,3],[img4,5],[img5,1]]
const trueOrder = new Map(intro_img_order);
const TrueOrder_io=[img5,img2,img3,img1,img4];
let displayOrder=[img1,img2,img3,img4,img5];
const n_img_disp=5;

let times_clicked = -1;
let times_switched = 0;
let switch_attempted = false;

timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    displayOrder.push("finish"); 
    console.log(displayOrder)
    return "<p> + <p/>";
  },
  trial_duration: 500,
});

const display_img_intro = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "",
  choices: function () {
    return displayOrder;
  },
  button_html: '<button class="jspsych-btn">%choice%</button>',
  prompt: "<p>Select any two images to compare, or click finish if you are done sorting.</p>",
};


const refresh_intro = {
  timeline: [display_img_intro],
  conditional_function: function () {
    if (times_clicked % 2 === 0 && times_clicked !== 0) {
      displayOrder = removeSelection_intro(displayOrder);
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
    let clean = removeSelection_intro(displayOrder);
    if (data2.response !== null && times_clicked % 2 === 0 && switchOrNot_intro(clean[data1.response], clean[data2.response])) {
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

const loopNode_intro = {
  timeline: [refresh_intro],
  loop_function: function (data) {
    var data = jsPsych.data.get().last(1).values()[0];
    if (jsPsych.pluginAPI.compareKeys(String(data.response), String(n_img_disp))) {
      return false;
    } else {
      return true;
    }
  },
};

timeline.push(loopNode_intro);

// the final page shows true order as number overlapped on your order
const finish_intro = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    displayOrder.pop();
    displayOrder=removeSelection_intro(displayOrder);
    let finalDisplay = [];
    
    var TrueOrder_o=[];
    for(var i=0; i<n_img_disp; i++){
      TrueOrder_o.push(trueOrder.get(displayOrder[i])) // order of final display (if it is 1,2,3,4,5 then the sorting is correct)
    };

    for (var range_len=[],i=1;i<=n_img_disp;++i) range_len.push(i);

    if (JSON.stringify(TrueOrder_o) === JSON.stringify(range_len)){
      finalDisplay.push("You sorted correctly with "+ String(times_switched) + " comparisons in total. <br><br> "+ displayOrder.join("")+ "<br><br> Your final order is " + TrueOrder_o + "<br><br><br>The method in this game will allow you to sort correctly with 8 comparisons. Press space to learn it!")
    } else {
      finalDisplay.push("You sorted incorrectly with "+ String(times_switched) + " comparisons in total. <br><br> "+ displayOrder.join("")+ "<br><br> Your final order is " + TrueOrder_o + "<br><br><br>The method in this game will allow you to sort correctly with 8 comparisons. Press space to learn it!")
    }
    return finalDisplay;
  },
};

timeline.push(finish_intro);

//////////////////////////////////////////////////////////////////// LEARN BLOCK ///////////////////////////////////////////////////////////////////////////

function shuffle_learning(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    };
    return array;
  }

timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p>Welcome to the learning phase! <br><br> You will learn by <b>imitating four examples</b>. <br><br> Press space to continue.<p/>",
});


p1=[4, 2, 3, 5, 1];
p2=[2, 5, 4, 3, 1];
p3=[2, 1, 3, 4, 5, 6, 7, 8];
p4=[3, 5, 4, 1, 2, 6, 8, 7];

p1_comp=[[0, 1], [1, 2], [0, 1], [2, 3], [3, 4], [2, 3], [1, 2], [0, 1]];
p1_comp_bool=[1, 1, 0, 0, 1, 1, 1, 1];
p2_comp=[[0, 1], [1, 2], [0, 1], [2, 3], [1, 2], [0, 1], [3, 4], [2, 3], [1, 2], [0, 1]];
p2_comp_bool=[0, 1, 0, 1, 1, 0, 1, 1, 1, 1];
p3_comp=[[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]] ;
p3_comp_bool=[1, 0, 0, 0, 0, 0, 0];
p4_comp=[[0, 1], [1, 2], [0, 1], [2, 3], [1, 2], [0, 1], [3, 4], [2, 3], [1, 2], [0, 1], [4, 5], [5, 6], [6, 7], [5, 6]];
p4_comp_bool=[0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];

const p_order_all=[p1,p2,p3,p4];
const p_comp_all=[p1_comp,p2_comp,p3_comp,p4_comp];
const p_comp_bool_all=[p1_comp_bool,p2_comp_bool,p3_comp_bool,p4_comp_bool];

const img_5=[img1,img3,img5,img7,img9];
const img_8=[img1,img2,img3,img4,img5,img6,img7,img8];
const eg_5_1=shuffle_learning(img_5)
const eg_5_2=shuffle_learning(img_5)
const eg_8_1=shuffle_learning(img_8)
const eg_8_2=shuffle_learning(img_8)
let img_t_all=[eg_5_1,eg_5_2,eg_8_1,eg_8_2];
let img_s_all = JSON.parse(JSON.stringify(img_t_all))


// const img_t_all=[[img1,img2,img3,img4,img5],[img1,img2,img3,img4,img5],[img1,img2,img3,img4,img5,img6,img7,img8],[img1,img2,img3,img4,img5,img6,img7,img8]];
// const img_s_all=[[img1,img2,img3,img4,img5],[img1,img2,img3,img4,img5],[img1,img2,img3,img4,img5,img6,img7,img8],[img1,img2,img3,img4,img5,img6,img7,img8]];


for(var j=0; j<4; j++){

  
  timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: ["Example " +(j+1)+"<br><br>Press space to continue."],
  });

  // const img_t=img_t_all[j] 
  // const img_s=img_s_all[j]
  const img_t=JSON.parse(JSON.stringify(img_t_all[j] ));
  const img_s=JSON.parse(JSON.stringify(img_s_all[j] ));
  console.log(img_t)
  console.log(img_s)
  const list_comp=p_comp_all[j];
  const list_comp_bool=p_comp_bool_all[j];
  const p_order=p_order_all[j];

  for(var i=0; i<list_comp_bool.length; i++){

    const index_t_1=list_comp[i][0];
    const index_t_2=list_comp[i][1];
    const imit_swap=list_comp_bool[i];
    

    const imi_hl1={
      type: jsPsychHtmlButtonResponse,
      stimulus: function() {
        img_t[index_t_1]=img_t[index_t_1].replace("<img", "<img id='selected'");
        let img_t_join=img_t.join(" ");
        return img_t_join;
      },
      choices: img_s,
      margin_vertical:'100px',
      // button_html: '<button class="jspsych-btn" style="position: relative ;right:80%; ">%choice%</button>', //move button to the left, used this when we have the visualization in the end of the stimulus
      button_html: '<button class="jspsych-btn">%choice%</button>',
      prompt: "<p>In the bottom row, you can compare two items at each time by clicking them. If their order is wrong, they will swap positions. <strong>Please follow the pairs being compared at the top row. Try to find the pattern of this sorting method.</strong></p>",
      trial_duration:500,
    }

    const imi_hl2={
      type: jsPsychHtmlButtonResponse,
      stimulus: function() {
        img_t[index_t_2]=img_t[index_t_2].replace("<img", "<img id='selected'");
        let img_t_join=img_t.join(" ");
        return img_t_join;
      },
      choices: img_s,
      margin_vertical:'100px',
      button_html: '<button class="jspsych-btn">%choice%</button>',
      prompt: "<p>In the bottom row, you can compare two items at each time by clicking them. If their order is wrong, they will swap positions. <strong>Please follow the pairs being compared at the top row. Try to find the pattern of this sorting method.</strong></p>",
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

        return img_t_join;
      },
      choices: img_s,
      margin_vertical:'100px',
      button_html: '<button class="jspsych-btn">%choice%</button>',
      prompt: "<p>In the bottom row, you can compare two items at each time by clicking them. If their order is wrong, they will swap positions. <strong>Please follow the pairs being compared at the top row. Try to find the pattern of this sorting method.</strong></p>",
      trial_duration:500,
    }

    timeline.push(imi_hl1)
    timeline.push(imi_hl2)
    timeline.push(imi_comp1)

    const imi_comp2={
      type: jsPsychHtmlButtonResponse,
      stimulus: function(){
        img_t_join=img_t.join(" ");
        return img_t_join;
      },
      choices: function () {
        return img_s;
      },
      margin_vertical:'100px',
      button_html: '<button class="jspsych-btn">%choice%</button>',
      prompt: "<p>In the bottom row, you can compare two items at each time by clicking them. If their order is wrong, they will swap positions. <strong>Please follow the pairs being compared at the top row. Try to find the pattern of this sorting method.</strong></p>",
    }

    const refresh = {
      timeline: [imi_comp2],
      conditional_function: function () {
  
        let data1 = jsPsych.data.get().last(1).values()[0];//the second selection
        let data2 = jsPsych.data.get().last(2).values()[0]; //the first selection
        // console.log(data2.response)
        if (jsPsych.pluginAPI.compareKeys(String(data1.response), String(index_t_2))&&jsPsych.pluginAPI.compareKeys(String(data2.response), String(index_t_1))&& imit_swap==1) {
          return false;
        } else if (jsPsych.pluginAPI.compareKeys(String(data1.response), String(index_t_1))&&jsPsych.pluginAPI.compareKeys(String(data2.response), String(index_t_2))&& imit_swap==1){
          return false;
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
            // img_t.pop();
            // img_t.push(img_v_1_i)
            return false;
          } else {
            // img_t.pop();
            // img_t.push(img_v_1_i)
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
        
        return img_t_join;
      },
      choices: img_s,
      margin_vertical:'100px',
      button_html: '<button class="jspsych-btn">%choice%</button>',
      prompt: "<p>In the bottom row, you can compare two items at each time by clicking them. If their order is wrong, they will swap positions. <strong>Please follow the pairs being compared at the top row. Try to find the pattern of this sorting method.</strong></p>",
      trial_duration:500,
    }
    timeline.push(imi_hl0)
  };

  timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: ["The initial order was " +p_order+" and it took "+list_comp_bool.length+" comparisons to sort it correctly with the method. <br><br>Press space to continue."],
  });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////// DO BLOCK ///////////////////////////////////////////////////////////////////////////

timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p>Welcome to the test phase! <br><br> You will do 10 problems. Your performance bonus will be calculated based on <b> how you accurately and efficiently use the method</b>. <br><br> Press space to continue.<p/>",
});

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
    // console.log("2",trueOrderArray);
    const trueOrder = new Map(trueOrderArray);
    let trueOrderArray_sort = trueOrderArray.map((x) => x);
    trueOrderArray_sort.sort(function (element_a, element_b) {
      return element_a[1] - element_b[1];
    });
    trueOrderArray_sort=trueOrderArray_sort.slice(0,n_img_disp) //selected  the first n_img_disp images from shuffled img_all to show
    // console.log("1",trueOrderArray_sort);
    const TrueOrder_io=trueOrderArray_sort.map(function(value,index) { return value[0]; }); //io means image only, show the list of images selected
    const TrueOrder_o=trueOrderArray_sort.map(function(value,index) { return value[1]; }); //io means image only, show the list of images selected

    return [TrueOrder_io,trueOrder,trueOrderArray];
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

  img_all=[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];


  let n_img=img_all.length //all available images in the folder
  let n_img_disp=n_img_disp_list[i]

  const [TrueOrder_io,trueOrder,trueOrderArray] = disp_n_true(n_img_disp,n_img)
  let displayOrder=TrueOrder_io.map((x) => x); //new code


  let times_clicked = -1;
  let times_switched = 0;
  let switch_attempted = false;


  // Welcome screen
  timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      displayOrder = shuffle(displayOrder); 
      return "<p> + <p/>";
    },
    trial_duration: 500,
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




  // // the final page show both true order and your order
  // const finish = {
  //   type: jsPsychHtmlKeyboardResponse,
  //   // prompt: function () {
  //   //   return "You made " + String(times_switched) + " switches in total";
  //   // },
  //   stimulus: function () {
  //     displayOrder.pop();
  //     displayOrder=removeSelection(displayOrder);
  //     let finalDisplay = [];
  //     if (displayOrder==TrueOrder_io){
  //       finalDisplay.push("You sorted correctly with "+ String(times_switched) + " comparisons in total. <br><br> The true order is <br><br>"+TrueOrder_io.join(" ")+"<br><br> Your final order is <br><br>"+displayOrder.join(""))
  //     } else {
  //       finalDisplay.push("You sorted correctly with "+ String(times_switched) + " comparisons in total. <br><br> The true order is <br><br>"+TrueOrder_io.join(" ")+"<br><br> Your final order is <br><br>"+displayOrder.join(""))
  //     }
      
  //     return finalDisplay;
  //   },
  // };


  // the final page shows true order as number overlapped on your order
  const finish = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      displayOrder.pop();
      displayOrder=removeSelection(displayOrder);
      let finalDisplay = [];
      
      var TrueOrder_o=[];
      for(var i=0; i<n_img_disp; i++){
        TrueOrder_o.push(trueOrder.get(displayOrder[i])) // order of final display (if it is 0,1,2,3,4 then the sorting is correct)
      };
      

      if (jsPsych.pluginAPI.compareKeys(String(displayOrder), String(TrueOrder_io))){
        console.log(displayOrder)
        console.log(TrueOrder_io)
        console.log((displayOrder==TrueOrder_io))
        finalDisplay.push("You sorted correctly with "+ String(times_switched) + " comparisons in total. <br><br> "+ displayOrder.join("")+ "<br><br> Your final order is " + TrueOrder_o.map(v=> v+1)+"<br><br> Press space to continue.")
      } else {
        finalDisplay.push("You sorted incorrectly with "+ String(times_switched) + " comparisons in total. <br><br> "+ displayOrder.join("")+ "<br><br> Your final order is " + TrueOrder_o.map(v=> v+1)+"<br><br> Press space to continue.")
      }
      return finalDisplay;
    },
  };


  timeline.push(finish);
}




//////////////////////////////////////////////////////////////////// TEACH BLOCK ///////////////////////////////////////////////////////////////////////////

const Teaching_Intro = {
  type: jsPsychInstructions,
  pages: [
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">Welcome to the teaching phase! <br><br>You will teach by assigning four examples for your student to imitate. Additionally, you need to write a memo to help them learn this method and use it in their tests.<br><br> Press space to continue.</p>',
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px"> Note:<br><br>1) Your teaching bonus is calculated based on your students’ performance (<strong>how they accurately and efficiently use this method</strong>). <br><br>2) In the test phase, your students will do 10 tests including five 5-item and five 8-item tests. <strong>The test problems will be new and random</strong>.</p>',
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">Given a certain number of gold blocks, some sequence are initially more out of order than others. When you assign examples for your students , you need to choose how out-of-order-ness each example will be. <b>The out-of-order-ness is estimated based on how many comparisons are needed to sort correctly.</b> <br><br>For example, to sort five gold blocks correctly, the least number of comparisons needed is four ([1,2,3,4,5], etc). Therefore, we will call this condition <b>"least out-of-order"</b>. The most number of comparisons needed is ten ([1, 5, 4, 3, 2], etc) and we will call it <b>"most out-of-order"</b>. <br><br>Between least and most out-of-order there are two additional levels---<b>somehow out-of-order</b> and <b>fairly out-of-order</b>. </p>'+img_outoforder,
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">If an 5-item example requires 8 comparisons to sort correctly with the method, how out-of-order do you think it is?</p>'+img_outoforder,
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">If an 5-item example requires 8 comparisons to sort correctly with the method, how out-of-order do you think it is?</p>'+img_outoforder+'<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">The answer is <b>"Fairly out-of-order"</b>. <br><br>Click "Previous" to review instructions. Click "Next" to customize examples for your students.</p>'
  ],
  show_clickable_nav: true
}

timeline.push(Teaching_Intro)



const teaching_choice = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "<strong>Example 1</strong>: how many items needs to be sorted?", 
      name: 'proportion', 
      options: ['5-item', '8-item'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "<strong>Example 1</strong>: how out-of-order is the initial state?", 
      name: 'order', 
      options: ['least', 'somehow', 'fairly','most'], 
      required: true,
      horizontal: true
    },
    {
      prompt: "<strong>Example 2</strong>: how many items needs to be sorted?", 
      name: 'proportion', 
      options: ['5-item', '8-item'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "<strong>Example 2</strong>: how out-of-order is the initial state?", 
      name: 'order', 
      options: ['least', 'somehow', 'fairly','most'], 
      required: true,
      horizontal: true
    },{
      prompt: "<strong>Example 3</strong>: how many items needs to be sorted?", 
      name: 'proportion', 
      options: ['5-item', '8-item'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "<strong>Example 3</strong>: how out-of-order is the initial state?", 
      name: 'order', 
      options: ['least', 'somehow', 'fairly','most'], 
      required: true,
      horizontal: true
    },{
      prompt: "<strong>Example 4</strong>: how many items needs to be sorted?", 
      name: 'proportion', 
      options: ['5-item', '8-item'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "<strong>Example 4</strong>: how out-of-order is the initial state?", 
      name: 'order', 
      options: ['least', 'somehow', 'fairly','most'], 
      required: true,
      horizontal: true
    },
  ],
};
timeline.push(teaching_choice)


jsPsych.run(timeline);