var selected_color = "#FF7909"
var unselected_color = "#FFFFFF"

// Initialize jsPsych
const jsPsych = initJsPsych();

// Define the timeline
const timeline = [];

// Preload assets
timeline.push({
  type: jsPsychPreload,
  images: ['Intro_Pic.png','G_1.jpg', 'G_2.jpg', 'G_3.jpg', 'G_4.jpg', 'G_5.jpg', 'G_6.jpg','G_7.jpg','G_8.jpg','G_9.jpg','G_10.jpg','Out-of-order-scale.jpg'], //cogntion.run version

  // images: ['assets/Intro_Pic.png','assets/G_1.jpg', 'assets/G_2.jpg', 'assets/G_3.jpg', 'assets/G_4.jpg', 'assets/G_5.jpg', 'assets/G_6.jpg','assets/G_7.jpg','assets/G_8.jpg','assets/G_9.jpg','assets/G_10.jpg','assets/Out-of-order-scale.jpg'],
});

// Define the images

//load all available images
//Cognition.run version
let img_intro = "<img src='Intro_Pic.png' height='120'>";
let img_outoforder = "<img src='Out-of-order-scale.jpg' height='200'>";
let img1 = "<img src='G_1.jpg' height='90'>";
let img2 = "<img src='G_2.jpg' height='90'>";
let img3 = "<img src='G_3.jpg' height='90'>";
let img4 = "<img src='G_4.jpg' height='90'>";
let img5 = "<img src='G_5.jpg' height='90'>";
let img6 = "<img src='G_6.jpg' height='90'>";
let img7 = "<img src='G_7.jpg' height='90'>";
let img8 = "<img src='G_8.jpg' height='90'>";
let img9 = "<img src='G_9.jpg' height='90'>";
let img10 = "<img src='G_10.jpg' height='90'>";

// let img_intro = "<img src='assets/Intro_Pic.png' height='120'>";
// let img_outoforder = "<img src='assets/Out-of-order-scale.jpg' height='200'>";
// let img1 = "<img src='assets/G_1.jpg' height='120'>";
// let img2 = "<img src='assets/G_2.jpg' height='120'>";
// let img3 = "<img src='assets/G_3.jpg' height='120'>";
// let img4 = "<img src='assets/G_4.jpg' height='120'>";
// let img5 = "<img src='assets/G_5.jpg' height='120'>";
// let img6 = "<img src='assets/G_6.jpg' height='120'>";
// let img7 = "<img src='assets/G_7.jpg' height='120'>";
// let img8 = "<img src='assets/G_8.jpg' height='120'>";
// let img9 = "<img src='assets/G_9.jpg' height='120'>";
// let img10 = "<img src='assets/G_10.jpg' height='120'>";




//////////////////////////////////////////////////////////////////// INTRO BLOCK ///////////////////////////////////////////////////////////////////////////

const Intro = {
  type: jsPsychInstructions,
  pages: [
  '<p>Welcome to the experiment! <br><br> Press Enter to continue.</p>',
  '<p style="text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">Imagine you have five gold blocks that vary in weights. How can you sort them by weight using a balance? </p>'+'<br>' + img_intro+'<p style="text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px"><br>Press Enter to continue.</p>',
  '<p style="text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">There are many ways to do that. In this game, you will learn a method that is very efficient. <br><strong>Don’t worry about coming up with new methods. Your task is to learn this method and use it accurately and efficiently in the test. </strong> Some other people will learn from you as your students. </p>'+'<br>' + img_intro+'<p style="text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px"><br>Press Enter to continue.</p>',
  '<p style="text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px"><br><br>Your reward bonus will depend on your performance in the test.</p>'+'<br>' + img_intro +'<p style="text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">Press Enter to continue.</p>',
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px"> To get you familiar with this game, let’s try it first. This will not be counted as your performance. <br><br> <strong> You can only compare two items at each time by clicking them. If their order is wrong, they will swap positions. The animal on the item is only a mark and not relevant to the order of the items. </strong>   </p>'+'<br>' + img_intro +'<p style="text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px"><br>Press Enter to continue.</p>',
  ],
  show_clickable_nav: false,
  key_forward:"Enter"
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
    return display_intro;
  },
  button_html: '<button class="jspsych-btn">%choice%</button>',
  prompt: "<p>Select any two images to compare, or click finish if you are done sorting.</p>",
};


const refresh_intro = {
  timeline: [display_img_intro],
  conditional_function: function () {
    // if (times_clicked % 2 === 0 && times_clicked !== 0) { //Comment out here and moved it after switchornot, so highlight will disappear when clicking on two items
    //   display_intro = removeSelection_intro(display_intro);
    // }
    times_clicked++;
    let data1_ib = jsPsych.data.get().last(1).values()[0].response;//the second selection
    let data2_ib = jsPsych.data.get().last(2).values()[0].response; //the first selection

    if (data1_ib !== null && display_intro[data1_ib] !== undefined) {
      if (display_intro[data1_ib].includes(" id='selected'")) {
        display_intro[data1_ib] = display_intro[data1_ib].replace(" id='selected'", "");
        // console.log(display_intro[data1])
        switch_attempted = false; //if click an image twice then selection is removed
      } else {
        display_intro[data1_ib] = display_intro[data1_ib].replace("<img", "<img id='selected'");
        switch_attempted = true;
      }
      if (times_clicked % 2 === 0 && switch_attempted) {
        times_switched++;
      }
    }
    let clean = removeSelection_intro(display_intro);
    if (data2_ib !== null && times_clicked % 2 === 0 && switchOrNot_intro(clean[data1_ib], clean[data2_ib])) {
      let temp = display_intro[data1_ib];
      display_intro[data1_ib] = display_intro[data2_ib];
      display_intro[data2_ib] = temp;
    }
    if (times_clicked % 2 === 0 && times_clicked !== 0) {
     display_intro = removeSelection_intro(display_intro);
    }
    if (jsPsych.pluginAPI.compareKeys(String(data1_ib), String(n_img_disp))) {//whether you clicked "finished" which is string(6)
      return false;
    }
    return true;
  },
};

const loopNode_intro = {
  timeline: [refresh_intro],
  loop_function: function (data) {
    var data = jsPsych.data.get().last(1).values()[0].response;

    if (jsPsych.pluginAPI.compareKeys(String(data), String(n_img_disp))) {
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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////// LEARN BLOCK ///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  stimulus: "<p>Welcome to the learning phase! <br><br> You will learn by <b>imitating four examples</b>. <br><br> Press Enter to continue.<p/>",
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


///////////////////////////////Learning Trials//////////////////////
for(var j=0; j<4; j++){

  
  timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: ["Example " +(j+1)+"<br><br>Press Enter to continue."],
  });


  const img_t=JSON.parse(JSON.stringify(img_t_all[j] ));
  const img_s=JSON.parse(JSON.stringify(img_s_all[j] ));

  const list_comp=p_comp_all[j];
  const list_comp_bool=p_comp_bool_all[j];
  const p_order=p_order_all[j];

  for(var i=0; i<list_comp_bool.length; i++){

    const index_t_1=list_comp[i][0];
    const index_t_2=list_comp[i][1];
    const imit_swap=list_comp_bool[i];
    const which_exam=j;

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
      prompt: "<p>In the bottom row, you can compare two items at each time by clicking them. If their order is wrong, they will swap positions. <br><br> <strong>Please follow the pairs being compared at the top row. Try to find the pattern of this sorting method.</strong></p>",
      trial_duration:300,
      data: {
        save_trial: false  // Add this flag
      },
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
      prompt: "<p>In the bottom row, you can compare two items at each time by clicking them. If their order is wrong, they will swap positions. <br><br> <strong>Please follow the pairs being compared at the top row. Try to find the pattern of this sorting method.</strong></p>",
      trial_duration:300,
      data: {
        save_trial: false  // Add this flag
      },
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
      prompt: "<p>In the bottom row, you can compare two items at each time by clicking them. If their order is wrong, they will swap positions. <br><br>  <strong>Please follow the pairs being compared at the top row. Try to find the pattern of this sorting method.</strong></p>",
      trial_duration:200,
      data: {
        save_trial: false  // Add this flag
      },
    }

    timeline.push(imi_hl1)
    timeline.push(imi_hl2)
    timeline.push(imi_comp1)

    const imi_comp2 = {
      type: jsPsychHtmlButtonResponse,
      stimulus: function(){
        img_t_join = img_t.join(" ");
        return img_t_join;
      },
      choices: function () {
        return img_s;
      },
      margin_vertical: '100px',
      button_html: '<button class="jspsych-btn">%choice%</button>',
      prompt: "<p>In the bottom row, you can compare two items at each time by clicking them. If their order is wrong, they will swap positions. <br><br>  <strong>Please follow the pairs being compared at the top row. Try to find the pattern of this sorting method.</strong></p>",
      data: { phase: 'Learning example '+which_exam },
    }

    const refresh = {
      timeline: [imi_comp2],
      conditional_function: function () {
        // Get the last two trials using values() instead of trials()
        const allTrials = jsPsych.data.get().values();
        const lastTrialIndex = allTrials.length - 1;
        const secondLastTrialIndex = lastTrialIndex - 1;
        
        // If we don't have two trials yet, continue
        if (lastTrialIndex < 1) return true;
        
        const lastResponse = allTrials[lastTrialIndex].response;
        const secondLastResponse = allTrials[secondLastTrialIndex].response;
        
        // Check if we have a matching pair
        const isMatch = (
          (lastResponse === index_t_2 && secondLastResponse === index_t_1) ||
          (lastResponse === index_t_1 && secondLastResponse === index_t_2)
        ) && imit_swap === 1;
        
        // Continue if no match
        return !isMatch;
      }
    };

    const loopNode = {
      timeline: [refresh],
      loop_function: function (data) {
        // Get last two trials using values() instead of trials()
        const allTrials = jsPsych.data.get().values();
        const lastTrialIndex = allTrials.length - 1;
        const secondLastTrialIndex = lastTrialIndex - 1;
        
        if (lastTrialIndex < 1) return true;
        
        const lastResponse = allTrials[lastTrialIndex].response;
        const secondLastResponse = allTrials[secondLastTrialIndex].response;
        
        if ((lastResponse === index_t_2 && secondLastResponse === index_t_1) ||
            (lastResponse === index_t_1 && secondLastResponse === index_t_2)) {
          if (imit_swap === 1) {
            let temp = img_s[lastResponse];
            img_s[lastResponse] = img_s[secondLastResponse];
            img_s[secondLastResponse] = temp;
          }
          return false;
        }
        
        return true;
      }
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
      prompt: "<p>In the bottom row, you can compare two items at each time by clicking them. If their order is wrong, they will swap positions. <br><br>  <strong>Please follow the pairs being compared at the top row. Try to find the pattern of this sorting method.</strong></p>",
      trial_duration:200,
      data: {
        save_trial: false  // Add this flag
      },
    }
    timeline.push(imi_hl0)
  };

  timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: ["The initial order was " +p_order+" and it took "+list_comp_bool.length+" comparisons to sort it correctly with the method. <br><br>Press Enter to continue."],
  });
};

const Out_of_order = {
  type: jsPsychInstructions,
  pages: [
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">Given a certain number of gold blocks, some sequence are initially more <b>out of order</b> than others. <b>The out-of-order-ness is estimated based on how many comparisons are needed to sort correctly.</b></p>', '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">For example, to sort five gold blocks correctly, the least number of comparisons needed is four ([1,2,3,4,5], etc). Therefore, we will call this condition <b>"least out-of-order"</b>. The most number of comparisons needed is ten ([1, 5, 4, 3, 2], etc) and we will call it <b>"most out-of-order"</b>. <br><br>Between least and most out-of-order there are two additional levels---<b>somehow out-of-order</b> and <b>fairly out-of-order</b>. </p>'+img_outoforder,
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">If an 5-item example requires 8 comparisons to sort correctly with the method, how out-of-order do you think it is?</p>'+img_outoforder,
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">If an 5-item example requires 8 comparisons to sort correctly with the method, how out-of-order do you think it is?</p>'+img_outoforder+'<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">The answer is <b>"Fairly out-of-order"</b>. <br><br>Click "Previous" to review instructions. Click "Next" to the test phase.</p>'
  ],
  show_clickable_nav: true,
  // key_forward:"Enter"
}

timeline.push(Out_of_order)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////// DO BLOCK ///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p>Welcome to the test phase! <br><br> You will do 10 problems. Your performance bonus will be calculated based on <b> how you accurately and efficiently use the method</b>. <br><br> Press Enter to continue.<p/>",
});

n_img_disp_list=[]
for(var i=0; i<4; i++){
  if (i%2==0){n_img_disp_list.push(5)
  } else {n_img_disp_list.push(8)
  }
  
  // Functions

  // Calculate minimum necessary number of comparisons
  function n_nece_comp(aa){
    var nn=0;
    var ii_f=0;
    let comp_seq=[];
    while (nn<30){
      // console.log(nn)
      //correct ofer and keep going forward
      if (aa[ii_f]<aa[ii_f+1]){
        comp_seq.push([ii_f,ii_f+1]);
        nn++;
        ii_f++;
      }else{
        comp_seq.push([ii_f,ii_f+1]);
        let aa_cache=aa[ii_f];
        aa[ii_f]=aa[ii_f+1];
        aa[ii_f+1]=aa_cache;
        // aa[ii_f],aa[ii_f+1]=aa[ii_f+1],aa[ii_f];
        nn++;
        ii_b=JSON.parse(JSON.stringify(ii_f));
        ii_f++;
        while (nn<30){
          if (ii_b==0){
            break;
          }
          if (aa[ii_b-1]>aa[ii_b]){
            comp_seq.push([ii_b-1,ii_b]);
            let aa_cache=aa[ii_b-1];
            aa[ii_b-1]=aa[ii_b];
            aa[ii_b]=aa_cache;
            // aa[ii_b-1],aa[ii_b]=aa[ii_b],aa[ii_b-1];
            nn++;
            ii_b--;
          }
          if (aa[ii_b-1]<aa[ii_b]){
            if (ii_b==0){
              break;
            }else{
              comp_seq.push([ii_b-1,ii_b]);
              nn++;
              break;
            }
          }
        }
      }
      for (var range_len_test=[],i=1;i<=aa.length;++i) range_len_test.push(i);

        if (JSON.stringify(aa) === JSON.stringify(range_len_test) && 
        comp_seq.some(pair => 
            JSON.stringify(pair) === JSON.stringify([aa.length-2,aa.length-1])
        )) {
        break;
      }
      
    }
    return nn;
  }


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
    
    const trueOrder = new Map(trueOrderArray);
    let trueOrderArray_sort = trueOrderArray.map((x) => x);
    trueOrderArray_sort.sort(function (element_a, element_b) {
      return element_a[1] - element_b[1];
    });
    trueOrderArray_sort=trueOrderArray_sort.slice(0,n_img_disp) //selected  the first n_img_disp images from shuffled img_all to show
    // console.log("1",trueOrderArray_sort);
    const TrueOrder_io=trueOrderArray_sort.map(function(value,index) { return value[0]; }); //io means image only, show the list of images selected
    let TrueOrder_oo=[];
    for (jj=0;jj<n_img_disp;jj++){
      TrueOrder_oo.push(trueOrder.get(trueOrderArray[jj][0]));
    }
    
    const TT=TrueOrder_oo.map(x => TrueOrder_oo.filter(y => y < x).length + 1); //initial order such as [5,2,4,1,3]

    return [TrueOrder_io,trueOrder,TT];
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


  let n_img=img_all.length; //all available images in the folder
  let n_img_disp=n_img_disp_list[i];
  let which_test=i;

  const [TrueOrder_io,trueOrder,TT] = disp_n_true(n_img_disp,n_img)
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
    data: { phase: 'Test '+which_test },
  };

  const refresh = {
    timeline: [display_img],
    conditional_function: function () {
      
      times_clicked++;
      let data1 = jsPsych.data.get().last(1).values()[0].response;//the second selection
      let data2 = jsPsych.data.get().last(2).values()[0].response; //the first selection

      if (data1 !== null && displayOrder[data1] !== undefined) {
        if (displayOrder[data1].includes(" id='selected'")) {
          displayOrder[data1] = displayOrder[data1].replace(" id='selected'", "");
          // console.log(displayOrder[data1])
          switch_attempted = false; //if click an image twice then selection is removed
        } else {
          displayOrder[data1] = displayOrder[data1].replace("<img", "<img id='selected'");
          switch_attempted = true;
        }
        if (times_clicked % 2 === 0 && switch_attempted) {
          times_switched++;
        }
      }
      let clean = removeSelection(displayOrder);
      if (data2 !== null && times_clicked % 2 === 0 && switchOrNot(clean[data1], clean[data2])) {
        let temp = displayOrder[data1];
        displayOrder[data1] = displayOrder[data2];
        displayOrder[data2] = temp;
      }
      if (times_clicked % 2 === 0 && times_clicked !== 0) {
        displayOrder = removeSelection(displayOrder);
      }
      if (jsPsych.pluginAPI.compareKeys(String(data1), String(n_img_disp))) {//whether you clicked "finished" which is string(6)
        return false;
      }
      return true;
    },
  };

  const loopNode = {
    timeline: [refresh],
    loop_function: function (data) {
      var data = jsPsych.data.get().last(1).values()[0].response;
      if (jsPsych.pluginAPI.compareKeys(String(data), String(n_img_disp))) {
        return false;
      } else {
        return true;
      }
    },
  };

  timeline.push(loopNode);



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
        let Order_final=TrueOrder_o.map(v=> v+1);
        finalDisplay.push("You sorted correctly with "+ String(times_switched) + " comparisons in total. <br> The necessary number of comparison is"+ n_nece_comp_test+"<br><br>"+displayOrder.join("")+ "<br><br> Your final order is " + Order_final+"<br><br> Press Enter to continue.")
      } else {
        finalDisplay.push("You sorted incorrectly with "+ String(times_switched) + " comparisons in total. <br><br> "+ displayOrder.join("")+ "<br><br> Your final order is " + Order_final+"<br><br> Press Enter to continue.")
      }
      return finalDisplay;
    },
    data: { phase: 'Test '+which_test},
  };


  timeline.push(finish);

  let n_nece_comp_test=n_nece_comp(TT);
  console.log(n_nece_comp_test)

  const outoforder5 = {
    type: jsPsychSurveyLikert,
    questions: [
      {

        prompt: "<div style='font-size: 20px;'>Given five blocks, the least out-of-order sequence requires 4 comparisons and the most out-of-order sequence requires 10 comparisons.<br><br>The one you just finished requires " + n_nece_comp_test + " comparisons, how out-of-order do you think it is?<br><br></div>", 
        labels: ['<div style="font-size: 20px;">least</div>',
          ' ',
          '<div style="font-size: 20px;">somehow</div>',
          ' ',
          '<div style="font-size: 20px;">fairly</div>',
          ' ',
          '<div style="font-size: 20px;">most</div>'], 
        required: true,
      } ],
  };
  
const outoforder8 = {
  type: jsPsychSurveyLikert,
  questions: [
    {
      prompt: "<div style='font-size: 20px;'>Given eight blocks, the least out-of-order sequence requires 7 comparisons and the most out-of-order sequence requires 28 comparisons. <br><br>The one you just finished requires "+n_nece_comp_test +" comparisons, how out-of-order do you think it is?<br><br></div>", 
      labels: ['<div style="font-size: 20px;">least</div>',
          ' ',
          '<div style="font-size: 20px;">somehow</div>',
          ' ',
          '<div style="font-size: 20px;">fairly</div>',
          ' ',
          '<div style="font-size: 20px;">most</div>'], 
      required: true,
    }, ],
  };

  if (i%2==0){
    timeline.push(outoforder5);
  }else{
    timeline.push(outoforder8);
  }



}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////// TEACH BLOCK ///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Teaching_Intro = {
  type: jsPsychInstructions,
  pages: [
  '<p>Welcome to the teaching phase! <br><br> Press Enter to continue.</p>',
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">You will teach by assigning four examples for your student to imitate. Additionally, you need to write a memo to help them learn this method and use it in their tests.<br><br> Press Enter to continue.</p>',
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px"> Note:<br><br>1) Your teaching bonus is calculated based on your students’ performance (<strong>how they accurately and efficiently use this method</strong>). <br><br>2) In the test phase, your students will do 10 tests including five 5-item and five 8-item tests. <strong>The test problems will be new and random</strong>.<br><br> Press Enter to continue.</p>'
  ],
  show_clickable_nav: false,
  key_forward:"Enter"
}

timeline.push(Teaching_Intro)

// examples for demonstration generated from Gnome_Calcs.ipynb
const demo_5_1=[[1, 2, 3, 4, 5], [2, 1, 3, 4, 5], [2, 1, 3, 4, 5], [1, 2, 3, 4, 5]];
const demo_5_2=[[2, 1, 5, 3, 4], [2, 3, 1, 5, 4], [3, 2, 4, 1, 5], [4, 1, 2, 3, 5]];
const demo_5_3=[[5, 3, 1, 2, 4], [2, 5, 1, 4, 3], [4, 3, 1, 5, 2], [5, 2, 3, 1, 4]];
const demo_5_4=[[4, 5, 2, 3, 1], [1, 5, 4, 3, 2], [5, 1, 4, 3, 2], [4, 5, 3, 2, 1]];
const demo_8_1=[[2, 1, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8], [2, 1, 3, 4, 5, 6, 7, 8]];
const demo_8_2=[[1, 2, 7, 6, 3, 4, 5, 8], [3, 2, 5, 4, 8, 1, 6, 7], [1, 5, 3, 2, 6, 8, 4, 7], [4, 5, 1, 3, 6, 2, 7, 8]];
const demo_8_3=[[4, 7, 5, 3, 1, 8, 6, 2], [4, 8, 3, 7, 2, 5, 1, 6], [5, 3, 7, 2, 8, 6, 4, 1], [4, 2, 6, 8, 7, 5, 1, 3]];
const demo_8_4=[[8, 3, 7, 6, 5, 4, 2, 1], [8, 7, 6, 4, 5, 1, 3, 2], [7, 8, 5, 6, 4, 1, 3, 2], [8, 5, 7, 6, 4, 2, 3, 1]];





const teaching_choice = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "<strong>Example 1</strong>: how many items needs to be sorted?", 
      options: ['5-item', '8-item'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "<strong>Example 1</strong>: how out-of-order is the initial state?", 
      options: ['least', 'somehow', 'fairly','most'], 
      required: true,
      horizontal: true
    },
    {
      prompt: "<strong>Example 2</strong>: how many items needs to be sorted?", 
      options: ['5-item', '8-item'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "<strong>Example 2</strong>: how out-of-order is the initial state?", 
      options: ['least', 'somehow', 'fairly','most'], 
      required: true,
      horizontal: true
    },{
      prompt: "<strong>Example 3</strong>: how many items needs to be sorted?", 
      options: ['5-item', '8-item'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "<strong>Example 3</strong>: how out-of-order is the initial state?", 
      options: ['least', 'somehow', 'fairly','most'], 
      required: true,
      horizontal: true
    },{
      prompt: "<strong>Example 4</strong>: how many items needs to be sorted?", 
      options: ['5-item', '8-item'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "<strong>Example 4</strong>: how out-of-order is the initial state?", 
      options: ['least', 'somehow', 'fairly','most'], 
      required: true,
      horizontal: true
    },
  ],
  
};

// console.log(demo_all)
  
  
// Generating demonstration examples based on selections
const demo_examples = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "+",
  trial_duration: 0,
  on_start: function() {
      // Get the sequences from the teaching choice
      const lastTrial = jsPsych.data.get().last(1).values()[0].response;
      console.log(lastTrial)
      var answer_demo = [lastTrial.Q0, lastTrial.Q1, 
                      lastTrial.Q2, lastTrial.Q3, 
                      lastTrial.Q4, lastTrial.Q5, 
                      lastTrial.Q6, lastTrial.Q7];
      var demo_all = [];
      // Your sequence processing code
      for (var j=0; j<8; j+=2) {
        var a=answer_demo[j];
        var b=answer_demo[j+1];
        // console.log(a)
        if (a=="5-item" && b=="least") {
          demo_all.push(demo_5_1[0]);
          demo_5_1.shift()
        }
        if (a=="5-item" && b=="somehow") {
          demo_all.push(demo_5_2[0]);
          demo_5_2.shift()
        }
        if (a=="5-item" && b=="fairly") {
          demo_all.push(demo_5_3[0]);
          demo_5_3.shift()
        }
        if (a=="5-item" && b=="most") {
          demo_all.push(demo_5_4[0]);
          demo_5_4.shift()
        }
        if (a=="8-item" && b=="least") {
          demo_all.push(demo_8_1[0]);
          demo_8_1.shift()
        }
        if (a=="8-item" && b=="somehow") {
          demo_all.push(demo_8_2[0]);
          demo_8_2.shift()
        }
        if (a=="8-item" && b=="fairly") {
          demo_all.push(demo_8_3[0]);
          demo_8_3.shift()
        }
        if (a=="8-item" && b=="most") {
          demo_all.push(demo_8_4[0]);
          demo_8_4.shift()
        }
      }
      window.demo_all = demo_all;
      console.log("bbbb",demo_all)
    }
};


timeline.push(teaching_choice)
timeline.push(demo_examples)




for(var kk=0; kk<4; kk++){
  const jj=kk;



  function removeSelection_demo(imglist) {
    let result = imglist.map(x => x);
    for (let i = 0; i < imglist.length; i++) {
      if (imglist[i].includes(" id='selected'")) { //id=selected might be jspsych features
        result[i] = result[i].replace(" id='selected'", "");
      }
    }
    return result;
  }
  
  function switchOrNot_demo(imga, imgb,trueOrder) {
    const order_imga=trueOrder.get(imga);
    const order_imgb=trueOrder.get(imgb);
    if (!order_imga || !order_imgb) return false;
  
    if (order_imga > order_imgb ) {//get the value for dictionary
      var bigger = imga;
      var smaller = imgb;
    } else {
      var bigger = imgb;
      var smaller = imga;
    }
    let clean = removeSelection_demo(displayOrder_demo);
    return !(clean.indexOf(bigger) > clean.indexOf(smaller));
  }

  //if select 5-item, change displayOrder from [img1,img2,img3,img4,img5,img6,img7,img8] to [img1,img2,img3,img4,img5]
  function demo_length(array1,array2) { //array1 is displayOrder ([img1,img2,img3,img4,img5,img6,img7,img8]) array2 is the order selected (such as 5,2,3,4,1)
    let newArray = [...array1]; // Create a copy to avoid modifying original
    if (array2.length == 5) {
      newArray = newArray.slice(0, 5);
    }
    newArray.push("finish");
    return newArray;
  }

  // var demo_img_order=[[img1,demo_all[0][0]],[img2,demo_all[0][1]],[img3,demo_all[0][2]],[img4,demo_all[0][3]],[img5,demo_all[0][4]]];
  function trueOrderBuilder(array1,array2){ //array1 is displayOrder, array2 is selected order for the question
    var array=[];
    for (var ii=0;ii<array1.length;ii++) {
      array.push([array1[ii],array2[ii]])
    }
    return array;
  }



  let times_clicked = -1;
  let times_switched = 0;
  let switch_attempted = false;


  // displayOrder_demo=[img1,img2,img3,img4,img5,img6,img7,img8];


  let globalTrueOrder_Q1 = null;
  let global_order_demo_Q1=null;
  let global_n_img_disp_Q1=null;



  timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      // global_order_demo_Q1=demo_all[0];
      displayOrder_demo=[img1,img2,img3,img4,img5,img6,img7,img8];
      console.log("aa",demo_all)
      global_order_demo_Q1=demo_all[jj];
      console.log("demo",global_order_demo_Q1)
      global_n_img_disp_Q1=global_order_demo_Q1.length;
      globalTrueOrder_Q1 = new Map(trueOrderBuilder(removeSelection_demo(displayOrder_demo), global_order_demo_Q1, jj));
      // console.log("dd",globalTrueOrder_Q1)
      displayOrder_demo=demo_length(displayOrder_demo,global_order_demo_Q1);
      console.log("demo2",displayOrder_demo)
      return "<p> + <p/>";
    },
    trial_duration: 500,
  });

  const display_img_demo = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "",
    choices: function () {
      return displayOrder_demo;
    },
    button_html: '<button class="jspsych-btn">%choice%</button>',
    prompt: "<p>Select any two images to compare, or click finish if you are done sorting.<br><br> <b>Your student will learn by imitating your comparisons.</b></p>",
  };


  const refresh_demo = {
    timeline: [display_img_demo],
    conditional_function: function () {
      times_clicked++;
      let data1_tb = jsPsych.data.get().last(1).values()[0];//the second selection
      let data2_tb = jsPsych.data.get().last(2).values()[0]; //the first selection

      if (data1_tb.response !== null && displayOrder_demo[data1_tb.response] !== undefined) {
        if (displayOrder_demo[data1_tb.response].includes(" id='selected'")) {
          displayOrder_demo[data1_tb.response] = displayOrder_demo[data1_tb.response].replace(" id='selected'", "");
          console.log("Remove")
          switch_attempted = false; //if click an image twice then selection is removed
        } else {
          displayOrder_demo[data1_tb.response] = displayOrder_demo[data1_tb.response].replace("<img", "<img id='selected'");
          switch_attempted = true;
        }
        if (times_clicked % 2 === 0 && switch_attempted) {
          times_switched++;
        }
      }
      let clean = removeSelection_demo(displayOrder_demo);
      
      if (data2_tb.response !== null && times_clicked % 2 === 0 && switchOrNot_demo(clean[data1_tb.response], clean[data2_tb.response],globalTrueOrder_Q1)) {
        console.log("switch")
        let temp = displayOrder_demo[data1_tb.response];
        displayOrder_demo[data1_tb.response] = displayOrder_demo[data2_tb.response];
        displayOrder_demo[data2_tb.response] = temp;
      }
      if (times_clicked % 2 === 0 && times_clicked !== 0) {
        displayOrder_demo = removeSelection_demo(displayOrder_demo);
      }
      if (jsPsych.pluginAPI.compareKeys(String(data1_tb.response), String(global_n_img_disp_Q1))) {//whether you clicked "finished" which is string(6)
        return false;
      }
      return true;
    },
  };





  const loopNode_demo = {
    timeline: [refresh_demo],
    loop_function: function (data) {
    
      var data = jsPsych.data.get().last(1).values()[0];
      if (jsPsych.pluginAPI.compareKeys(String(data.response), String(global_n_img_disp_Q1))) {
        return false;
      } else {
        return true;
      }
    },
  };

  timeline.push(loopNode_demo);

  // the final page shows true order as number overlapped on your order
  const finish_demo = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      // console.log("finish")
      displayOrder_demo.pop();
      displayOrder_demo=removeSelection_demo(displayOrder_demo);
      let finalDisplay = [];
      
      var TrueOrder_o=[];

      if (!global_n_img_disp_Q1) {
        console.error('length data not found');
        return false;
      }
      // console.log("ff",globalTrueOrder_Q1)
      // console.log("gg",displayOrder_demo)
      for(var i=0; i<global_n_img_disp_Q1; i++){
        // console.log("Ff",globalTrueOrder_Q1.get(displayOrder_demo[i]))
        TrueOrder_o.push(globalTrueOrder_Q1.get(displayOrder_demo[i])) // order of final display (if it is 1,2,3,4,5 then the sorting is correct)
      };

      for (var range_len=[],i=1;i<=global_n_img_disp_Q1;++i) range_len.push(i);

      if (JSON.stringify(TrueOrder_o) === JSON.stringify(range_len)){
        finalDisplay.push("You sorted correctly with "+ String(times_switched) + " comparisons in total. <br><br> "+ displayOrder_demo.join("")+ "<br><br> Your final order is " + TrueOrder_o + "<br><br><br>Press Enter to continue.")
      } else {
        finalDisplay.push("You sorted incorrectly with "+ String(times_switched) + " comparisons in total. <br><br> "+ displayOrder_demo.join("")+ "<br><br> Your final order is " + TrueOrder_o + "<br><br><br>Press Enter  to continue.")
      }
      return finalDisplay;
    },
  };

  timeline.push(finish_demo);
}


var Description = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: 'Please leave a note for your student to use the method accurately and efficiently. Your student will read your note when they learn the sorting method.',rows: 10}
  ]
}

timeline.push(Description);

jsPsych.run(timeline);