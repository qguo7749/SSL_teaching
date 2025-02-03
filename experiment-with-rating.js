// Initialize jsPsych
const jsPsych = initJsPsych();

// Define the timeline
const timeline = [];

// Preload assets
timeline.push({
  type: jsPsychPreload,
  // images: ['Intro_Pic.png','G_1.jpg', 'G_2.jpg', 'G_3.jpg', 'G_4.jpg', 'G_5.jpg', 'G_6.jpg','G_7.jpg','G_8.jpg','G_9.jpg','G_10.jpg','Out-of-order-scale.jpg','Balance.jpg'], //cogntion.run version

  images: ['assets/Intro_Pic.png','assets/G_1.jpg', 'assets/G_2.jpg', 'assets/G_3.jpg', 'assets/G_4.jpg', 'assets/G_5.jpg', 'assets/G_6.jpg','assets/G_7.jpg','assets/G_8.jpg','assets/G_9.jpg','assets/G_10.jpg','assets/Out-of-order-scale.jpg','assets/Balance.jpg'],
});

// Define the images

//load all available images
// //Cognition.run version
// let img_intro = "<img src='Intro_Pic.png' height='120'>";
// let balance = "<img src='Balance.jpg' height='120'>";
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
let img_intro = "<img id='img_intro' src='assets/Intro_Pic.png' height='120'>";
let balance = "<img id='img_intro' src='assets/Balance.jpg' height='200'>";
let img_outoforder = "<img id='img_intro' src='assets/Out-of-order-scale.jpg' height='200'>";
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



const Consent = {
  type: jsPsychInstructions,
  pages: ['<h3>CONSENT TO PARTICIPATE IN RESEARCH</h3>'+'<h4>Gold Block Experiment</h4>'+'<p><b>Introduction/Purpose</b></p>'+'<p>My name is William Thompson. I am a faculty member at the University of California, Berkeley, working with my research colleague Qi Guo in the Department of Psychology. We are planning to conduct a research study, which I invite you to take part in. The purpose of this study is to better understand how people learn and teach a sorting method.</p>'+'<p><b>Procedures</b></p>'+'<p>If you agree to participate in my research, I/we will ask you to complete the attached online survey/ questionnaire. In this experiment you will see gold blocks. Your will be asked to sort them by weight. You will learn an efficient sorting method and teach that method to future participants. The task should take about 15 minutes to complete.</p>'+'<p><b>Benefits</b></p>'+'<p>There is no direct benefit to you anticipated from participating in this study. However, it is hoped that the information gained from the study will benefit society at large. By furthering our understanding of human learning and teaching, this research will benefit society by helping with the development of automated systems that can better communicate with humans, learn from humans, and teach humans.</p>'+'<p><b>Risks/Discomforts/Confidentiality</b></p>'+'<p>Your study data will be handled as confidentially as possible. If results of this study are published or presented, individual names and other personally identifiable information will not be used. Your data will not be associated with your name directly in any way. However, while the study is running it will be associated with your Prolific ID which someone could potentially use to personally identify you. Once the study is complete, we will replace your Prolific ID with a random string. These records may be shared with other researchers, but will not contain your Prolific ID or any other personal information. Responses you make within the study may be shown to other participants, but these responpses will not be linked to your personally identifiable information in any way.</p>'+'<p>While we will handle your responses as confidentially as possible, we cannot guarantee the confidentiality of information transmitted over the Internet. As with all research, there is a chance that confidentiality could be compromised; however, we are taking precautions to minimize this risk. We will be keeping data collected as part of this experiment indefinitely. Identifiers might be removed from the identifiable private information. After such removal, the information could be used for future research studies or distributed to other investigators for future research studies without additional informed consent from the subject or the legally authorized representative.</p>'+'<p><b>Compensation</b></p>'+'<p>In return for your time and effort, you will be paid $3.00 for taking part in this study. This money will be credited to your account within a week of submitting the study. There will be an opportunity to earn additional bonus compensation dependent upon completion of and performance within the task.</p>'+'<p><b>Rights</b></p>'+'<p><b><i>Participation in research is completely voluntary.</i></b>  You have the right to decline to participate or to withdraw at any point in this study without penalty or loss of benefits to which you are otherwise entitled.</p>'+'<p><b>Questions</b></p>'+'<p>If you have any questions or concerns about this study, you may contact William Thompson at <a href="mailto:wdt@berkeley.edu">wdt@berkeley.edu</a>.</p>'+'<p>If you have any questions or concerns about your rights and treatment as a research subject, you may contact the office of UC Berkeley\'s Committee for the Protection of Human Subjects, at 510-642-7461 or <a href="mailto:subjects@berkeley.edu">subjects@berkeley.edu</a>.</p>'+'<p>*********************************************</p>'+'<p>By consenting to participate, you acknowledge that you are 18 years or older, have read this consent form, agree to its contents, and agree to take part in this research. If you do not wish to consent, close this page and return the assignment to the recruitment platform.</p>'+'<div><button type="button" class="btn btn-primary btn-info" onClick="window.print();return false;" style="float: right;">Print this page</button></div>'],
  show_clickable_nav: true,
  button_label_next: "I agree"
}

timeline.push(Consent)


//////////////////////////////////////////////////////////////////// INTRO BLOCK ///////////////////////////////////////////////////////////////////////////

const Intro = {
  type: jsPsychInstructions,
  pages: [
  '<p>Welcome to the experiment! <br><br> Press Enter to continue.</p>',
  img_intro +'<p>Imagine you have five gold blocks that vary in weights. How can you sort them by weight using a balance (comparing two at each time)? <br></p>' + balance+'<p><br>Press Enter to continue.</p>',
  '<p>There are many ways to do that. In this game, you will learn a great method called "Omgne Sort". <br><br>Don’t worry about coming up with new methods. Your task is to learn how to do Omgne Sort. </p>'+'<br>' + img_intro+'<p><br>Press Enter to continue.</p>',
  '<p> Your reward bonus will depend on how accurately and efficiently you use Omgne Sort in the test.</p>'+'<br>' + img_intro +'<p>Press Enter to continue.</p>',
  '<p> Let’s try it first. This trial will not be used to calculate your performance. <br><br> Click any two blocks to compare them. The animals shown are just markers and do not indicate the ordering. </p>'+'<br>'+'<p><br>Press Enter to continue.</p>',
  ],
  show_clickable_nav: false,
  key_forward:"Enter"
}




function removeSelection_intro(imglist) {
  let result = imglist.map(x => x);
  for (let i = 0; i < imglist.length; i++) {
    if (imglist[i].includes(" id='selected'")) { //id=selected 
      result[i] = result[i].replace(" id='selected'", " ");
    }
    // if (imglist[i].includes(" id='swapped'")) { //id=swapped 
    //   result[i] = result[i].replace(" id='swapped'", " ");
    // }
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
let times_swapped=0;

timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    display_intro.push("finish"); 
    // console.log(display_intro)
    return "<p> + <p/>";
  },
  trial_duration: 500,
});

const display_img_intro = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "",
  choices: function () {
    // console.log(display_intro);
    return display_intro;
  },
  button_html: '<button class="jspsych-btn">%choice%</button>',
  prompt: "<p>Select any two blocks to compare. If they are in the wrong order relative to each other, they will swap positions. For example, if you select the fish block and the duck block they will swap positions, because the fish block is actually heavier than the duck block. To undo a selection, select the block again.  <br><br>Click finish if you are done sorting.</p>",
  data: {
    phase: 'Intro Trial'   // Add this flag
  },
};


const refresh_intro = {
  timeline: [display_img_intro],
  conditional_function: function () {
    // console.log("refresh");
    // if (times_clicked % 2 === 0 && times_clicked !== 0) { //Comment out here and moved it after switchornot, so highlight will disappear when clicking on two items
    //   display_intro = removeSelection_intro(display_intro);
    // }
    times_clicked++;
    let data1_ib = jsPsych.data.get().last(1).values()[0].response;//the second selection
    let data2_ib = jsPsych.data.get().last(2).values()[0].response; //the first selection

    if (data1_ib !== null && display_intro[data1_ib] !== undefined) {
      if (display_intro[data1_ib].includes("id='selected'")) {
        display_intro[data1_ib] = display_intro[data1_ib].replace(" id='selected'", " ");
        // console.log(display_intro[data1])
        switch_attempted = false; //if click an image twice then selection is removed
      } else {
        display_intro[data1_ib] = display_intro[data1_ib].replace("<img ", "<img id='selected'");
        switch_attempted = true;
      }
      if (times_clicked % 2 === 0 && switch_attempted) {
        // if (display_intro[data1_ib].includes("id='selected'")) {
        //   display_intro[data1_ib] = display_intro[data1_ib].replace(" id='selected'", " ");
        // }
        // display_intro[data1_ib] = display_intro[data1_ib].replace("<img ", "<img id='swapped'");
        times_switched++;
      }
    }
    let clean = removeSelection_intro(display_intro);
    if (data2_ib !== null && times_clicked % 2 === 0 && switchOrNot_intro(clean[data1_ib], clean[data2_ib])) {
      let temp = display_intro[data1_ib];
      display_intro[data1_ib] = display_intro[data2_ib];
      display_intro[data2_ib] = temp;
      times_swapped++;
    }
    if (times_clicked % 2 === 0 && times_clicked !== 0) {
     display_intro = removeSelection_intro(display_intro);
    //  if (times_clicked % 2 === 0 && switch_attempted) {
    //   display_intro[data1_ib] = display_intro[data1_ib].replace("<img ", "<img id='swapped'");
    //   display_intro[data2_ib] = display_intro[data2_ib].replace("<img ", "<img id='swapped'");
    //  }
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
    // console.log("loop");
    

    if (jsPsych.pluginAPI.compareKeys(String(data), String(n_img_disp))) {
      return false;
    } else {
      return true;
    }
  },
};


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
      finalDisplay.push("You sorted correctly by using the balance "+ String(times_switched) + " times. <br><br> "+ display_intro.join("")+ "<br><br> Your final order is " + TrueOrder_o + "<br><br><br>Omgne Sort in this game will allow you to sort correctly by using the balance 8 times. Press Enter to learn it!")
    } else {
      finalDisplay.push("You sorted incorrectly by using the balance "+ String(times_switched) + " times. <br><br> "+ display_intro.join("")+ "<br><br> Your final order is " + TrueOrder_o + "<br><br><br>Omgne Sort in this game will allow you to sort correctly by using the balance 8 times. Press Enter to learn it!")
    }
    return finalDisplay;
  },
};

/////////////////////////////////////////////////// TIMELINES ////////////////////////////////////////
timeline.push(Intro)
timeline.push(loopNode_intro);
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

const welcome_learning = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p>Welcome to the learning phase! <br><br> You will learn by six examples. The following learning trials will not be used to calculate your performance. <br><br> Press Enter to continue.<p/>",
};
timeline.push(welcome_learning)

//examples are 5-least, 5-somewhat, 5-most, 8-least, 8-somewhat, 8-very (5L,5S,5M,8L,8S,8F)
p1=[2, 1, 3, 4, 5] ; // 5 comparison, 1 swaps
p2=[3, 4, 1, 2, 5] ; // 8 comparison, 4 swaps
p3=[5, 4, 3, 2, 1] ; // 10 comparison, 10 swaps
p4=[1, 2, 3, 4, 5, 7, 6, 8] ; // 14 comparison, 1 swaps
p5=[4, 6, 3, 1, 2, 5, 8, 7] ; // 19 comparison, 10 swaps
p6=[8, 5, 2, 6, 7, 3, 1, 4] ; // 24 comparison, 19 swaps

p1_comp=[[0, 1], [1, 2], [2, 3], [3, 4]] ;
p1_comp_bool=[1, 0, 0, 0];
p2_comp=[[0, 1], [1, 2], [0, 1], [2, 3], [1, 2], [0, 1], [3, 4]] ;
p2_comp_bool=[0, 1, 1, 1, 1, 0, 0];
p3_comp=[[0, 1], [1, 2], [0, 1], [2, 3], [1, 2], [0, 1], [3, 4], [2, 3], [1, 2], [0, 1]] ;
p3_comp_bool=[1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
p4_comp=[[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [4, 5], [6, 7]] ;
p4_comp_bool=[0, 0, 0, 0, 0, 1, 0, 0];
p5_comp=[[0, 1], [1, 2], [0, 1], [2, 3], [1, 2], [0, 1], [3, 4], [2, 3], [1, 2], [0, 1], [4, 5], [3, 4], [5, 6], [6, 7], [5, 6]];
p5_comp_bool= [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0];
p6_comp=[[0, 1], [1, 2], [0, 1], [2, 3], [1, 2], [3, 4], [2, 3], [4, 5], [3, 4], [2, 3], [1, 2], [0, 1], [5, 6], [4, 5], [3, 4], [2, 3], [1, 2], [0, 1], [6, 7], [5, 6], [4, 5], [3, 4], [2, 3]] ;
p6_comp_bool=[1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0];

// for six example version
const p_order_all=[p1,p5,p2,p3,p4,p6]; // the examples are ordered this way (5L,8S,5S,5M,8L,8F) so the last four examples cover all four levels, it is p5-l
const p_comp_all=[p1_comp,p5_comp,p2_comp,p3_comp,p4_comp,p6_comp]; // the examples are ordered this way (5L,8S,5S,5M,8L,8F) so the last four examples cover all four levels, it is p5-l
const p_comp_bool_all=[p1_comp_bool,p5_comp_bool,p2_comp_bool,p3_comp_bool,p4_comp_bool,p6_comp_bool]; // the examples are ordered this way (5L,8S,5S,5M,8L,8F) so the last four examples cover all four levels, it is p5-l


const img_5=[img1,img3,img5,img7,img9];
const img_8=[img1,img2,img3,img4,img5,img6,img7,img8];
const eg_5_L=shuffle_learning(img_5)
const eg_5_S=shuffle_learning(img_5)
const eg_5_M=shuffle_learning(img_5)
const eg_8_L=shuffle_learning(img_8)
const eg_8_S=shuffle_learning(img_8)
const eg_8_F=shuffle_learning(img_8)
let img_t_all=[eg_5_L,eg_8_S,eg_5_S,eg_5_M,eg_8_L,eg_8_F]; // the examples are ordered this way (5L,8S,5S,5M,8L,8F) so the last four examples cover all four levels, it is p5-l
let img_s_all = JSON.parse(JSON.stringify(img_t_all))

// // for four example version
// const p_order_all=[p1,p3,p5,p6]; //the last three examples ask for out of orderness
// const p_comp_all=[p1_comp,p3_comp,p5_comp,p6_comp];
// const p_comp_bool_all=[p1_comp_bool,p3_comp_bool,p5_comp_bool,p6_comp_bool];


// const img_5=[img1,img3,img5,img7,img9];
// const img_8=[img1,img2,img3,img4,img5,img6,img7,img8];
// const eg_5_L=shuffle_learning(img_5)
// const eg_5_S=shuffle_learning(img_5)
// const eg_5_M=shuffle_learning(img_5)
// const eg_8_L=shuffle_learning(img_8)
// const eg_8_S=shuffle_learning(img_8)
// const eg_8_V=shuffle_learning(img_8) //V IS VERY OUT OF ORDER
// let img_t_all=[eg_5_L,eg_5_M,eg_8_S,eg_8_V]; // the examples are ordered this way (5L,8S,5S,5M,8L,8F) so the last four examples cover all four levels, it is p5-l
// let img_s_all = JSON.parse(JSON.stringify(img_t_all))



///////////////////////////////Learning Trials//////////////////////
for(var j=0; j<6; j++){
  if (j==2){
    const Out_of_order = {
    type: jsPsychInstructions,
    pages: [
    '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">Given a certain number of gold blocks, the number of swaps varies based on their initial arrangement. <br><br>The "least out-of-order" condition, such as [2,1,3,4,5], needs <b>the least number of swaps with Omgne Sort</b> (1 swap in this case). <br><br>The "most out-of-order" condition, like [5,4,3,2,1], requires <b> the most swaps with Omgne Sort</b> (10 swaps in this case). </p>', 
    '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px"><br><br>Between the <b>least</b> and <b>most</b> out-of-order there are two additional levels---<b>somewhat</b> out-of-order and <b>very</b> out-of-order. </p>'+img_outoforder,
    '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">If an 5-item example requires 7 swaps to sort correctly with Omgne Sort, how out-of-order do you think it is?</p>'+img_outoforder+'<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">Click "Next" to see the answer.</p>',
    '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">If an 5-item example requires 7 swaps to sort correctly with Omgne Sort, how out-of-order do you think it is?</p>'+img_outoforder+'<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">The answer is <b>"very out-of-order"</b>. <br><br>Click "Previous" to review instructions. Click "Next" to the learning phase.</p>'
    ],
    show_clickable_nav: true,
  }
  
  timeline.push(Out_of_order)
  }

  const intro_example = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: ["Example " +(j+1)+"<br><br>You will watch Omnge Sort in action. Try to identify any patterns in the comparisons made by this method. <br><br>Press Enter to continue."],
  };

  timeline.push(intro_example)


  const img_t_demo_only=JSON.parse(JSON.stringify(img_t_all[j] ));
  const img_t=JSON.parse(JSON.stringify(img_t_all[j] ));
  const img_s=JSON.parse(JSON.stringify(img_s_all[j] ));

  const list_comp=p_comp_all[j];
  const list_comp_bool=p_comp_bool_all[j];
  const p_order=p_order_all[j];

  //demonstration only
  for(var i=0; i<list_comp_bool.length; i++){

    const index_t_1=list_comp[i][0];
    const index_t_2=list_comp[i][1];
    const imit_swap=list_comp_bool[i];
    const which_exam=j;

    const imi_hl1_demo_only={
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function() {
        img_t_demo_only[index_t_1]=img_t_demo_only[index_t_1].replace("<img", "<img id='selected'");
        let img_t_demo_only_join=img_t_demo_only.join(" ");
        return img_t_demo_only_join;
      },
      choices: "NO_KEYS",
      margin_vertical:'30px',
      prompt: "<p>Try to identify any patterns in the comparisons made by Omgne Sort.</p>",
      trial_duration:500,
      data: {
        phase: 'Animation'+which_exam   // Add this flag
      },
    }

    const imi_hl2_demo_only={
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function() {
        img_t_demo_only[index_t_2]=img_t_demo_only[index_t_2].replace("<img", "<img id='selected'");
        let img_t_demo_only_join=img_t_demo_only.join(" ");
        return img_t_demo_only_join;
      },
      // choices: img_s,
      choices: "NO_KEYS",
      margin_vertical:'30px',
      prompt: "<p>Try to identify any patterns in the comparisons made by Omgne Sort.</p>",
      trial_duration:500,
      data: {
        phase: 'Animation'+which_exam   // Add this flag
      },
    }



    const imi_comp1_demo_only={
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function(){
        if (imit_swap==1){
          img_t_demo_only[index_t_1]=img_t_demo_only[index_t_1].replace("<img id='selected'", "<img id='swapped'");
          img_t_demo_only[index_t_2]=img_t_demo_only[index_t_2].replace("<img id='selected'", "<img id='swapped'");
          let temp=img_t_demo_only[index_t_1]
          img_t_demo_only[index_t_1]=img_t_demo_only[index_t_2];
          img_t_demo_only[index_t_2]=temp;
          img_t_demo_only_join=img_t_demo_only.join(" ");

        }else{
          img_t_demo_only[index_t_1]=img_t_demo_only[index_t_1];
          img_t_demo_only[index_t_2]=img_t_demo_only[index_t_2];
          img_t_demo_only_join=img_t_demo_only.join(" ");
        }

        return img_t_demo_only_join;
      },
      // choices: img_s,
      choices: "NO_KEYS",
      margin_vertical:'30px',
      prompt: "<p>Try to identify any patterns in the comparisons made by Omgne Sort.</p>",
      trial_duration:500,
      data: {
        phase: 'Animation'+which_exam   // Add this flag
      },
    }



    function removeSelection_learn(imglist) {
      // let result = imglist.map(x => x);
      for (let i = 0; i < imglist.length; i++) {
        // imglist[i] = imglist[i].replace("<img id='selected'", "<img ");
        if (imglist[i].includes("selected")) { //id=selected might be jspsych features
          
          imglist[i] = imglist[i].replace("<img id='selected'", "<img ");
        }
        if (imglist[i].includes("swapped")) { //id=selected might be jspsych features
          
          imglist[i] = imglist[i].replace("<img id='swapped'", "<img ");
        }
      }
      return imglist;
    }

    
    const imi_hl0_demo_only={
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function() {
        // console.log(img_t_demo_only) 
        img_t_demo_only[index_t_1]=img_t_demo_only[index_t_1].replace("id='selected'", "");
        img_t_demo_only[index_t_2]=img_t_demo_only[index_t_2].replace("id='selected'", "");
        img_t_demo_only[index_t_1]=img_t_demo_only[index_t_1].replace("id='swapped'", "");
        img_t_demo_only[index_t_2]=img_t_demo_only[index_t_2].replace("id='swapped'", "");
        const img_t_demo_only_join=img_t_demo_only.join(" ");
        
        return img_t_demo_only_join;
      },
      // choices: img_s,
      choices: "NO_KEYS",
      margin_vertical:'30px',
      // button_html: '<button class="jspsych-btn">%choice%</button>',
      prompt: "<p>Try to identify any patterns in the comparisons made by Omgne Sort.</p>",
      trial_duration:300,
      data: {
        phase: 'Animation'+which_exam   // Add this flag
      },
    }


    timeline.push(imi_hl1_demo_only)
    timeline.push(imi_hl2_demo_only)
    timeline.push(imi_comp1_demo_only)
    timeline.push(imi_hl0_demo_only)
  };

  //Imitation
  timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: ["Did you notice any patterns? <br><br>Press Enter to watch that example again and follow the steps of Omgne Sort."],
  });

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
      margin_vertical:'30px',
      button_html: '<button class="jspsych-btn">%choice%</button>',
      prompt: "<p>Please follow the pairs being compared at the top row. <strong>Try to identify any patterns in the comparisons made by Omgne Sort.</strong></p>",
      trial_duration:400,
      data: { phase: 'Learning example '+which_exam },
    }

    const imi_hl2={
      type: jsPsychHtmlButtonResponse,
      stimulus: function() {
        img_t[index_t_2]=img_t[index_t_2].replace("<img", "<img id='selected'");
        let img_t_join=img_t.join(" ");
        return img_t_join;
      },
      choices: img_s,
      margin_vertical:'30px',
      button_html: '<button class="jspsych-btn">%choice%</button>',
      prompt: "<p>Please follow the pairs being compared at the top row. <strong>Try to identify any patterns in the comparisons made by Omgne Sort.</strong></p>",
      trial_duration:300,
      data: { phase: 'Learning example '+which_exam },
    }



    const imi_comp1={
      type: jsPsychHtmlButtonResponse,
      stimulus: function(){
        if (imit_swap==1){
          img_t[index_t_1]=img_t[index_t_1].replace("<img id='selected'", "<img id='swapped'");
          img_t[index_t_2]=img_t[index_t_2].replace("<img id='selected'", "<img id='swapped'");
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
      margin_vertical:'30px',
      button_html: '<button class="jspsych-btn">%choice%</button>',
      prompt: "<p>Please follow the pairs being compared at the top row. <strong>Try to identify any patterns in the comparisons made by Omgne Sort.</strong></p>",
      trial_duration:300,
      data: { phase: 'Learning example '+which_exam },
    }

    

    const imi_comp2 = {
      type: jsPsychHtmlButtonResponse,
      stimulus: function(){
        img_t_join = img_t.join(" ");
        return img_t_join;
      },
      choices: function () {
        console.log(img_s)
        return img_s;
      },
      margin_vertical: '30px',
      button_html: '<button class="jspsych-btn">%choice%</button>',
      prompt: "<p>Please follow the pairs being compared at the top row. <strong>Try to identify any patterns in the comparisons made by Omgne Sort.</strong></p>",
      data: { phase: 'Learning example '+which_exam },
    }


    function removeSelection_learn(imglist) {
      // let result = imglist.map(x => x);
      for (let i = 0; i < imglist.length; i++) {
        // imglist[i] = imglist[i].replace("<img id='selected'", "<img ");
        if (imglist[i].includes("selected")) { //id=selected might be jspsych features
          
          imglist[i] = imglist[i].replace("<img id='selected'", "<img ");
        }
        if (imglist[i].includes("swapped")) { //id=selected might be jspsych features
          
          imglist[i] = imglist[i].replace("<img id='swapped'", "<img ");
        }
      }
      return imglist;
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

        if (
          (lastResponse == index_t_2 || lastResponse == index_t_1 )&&!img_s[lastResponse].includes("selected")
        ) {
          img_s[lastResponse] = img_s[lastResponse].replace("<img ", "<img id='selected'");
          }

        
        if ((lastResponse == index_t_2 && secondLastResponse == index_t_1) ||
            (lastResponse == index_t_1 && secondLastResponse == index_t_2)) {

          
          if (imit_swap === 1) {
            let temp = img_s[lastResponse];
            img_s[lastResponse] = img_s[secondLastResponse];
            img_s[secondLastResponse] = temp;
            setTimeout(() => {
            for (let ii=0;ii<img_s.length;ii++){
              img_s[ii] = img_s[ii].replace("id='selected'", " ");
            }
          }, 200); 
          }else{
            setTimeout(() => {
              for (let ii=0;ii<img_s.length;ii++){
                img_s[ii] = img_s[ii].replace("id='selected'", " ");
              }
            }, 200); 
          }
          return false;
        }
        
        return true;
      }
    };


    const imi_hl0={
      type: jsPsychHtmlButtonResponse,
      stimulus: function() {
        // console.log(img_t) 
        img_t[index_t_1]=img_t[index_t_1].replace("id='selected'", "");
        img_t[index_t_2]=img_t[index_t_2].replace("id='selected'", "");
        img_t[index_t_1]=img_t[index_t_1].replace("id='swapped'", "");
        img_t[index_t_2]=img_t[index_t_2].replace("id='swapped'", "");
        const img_t_join=img_t.join(" ");
        
        return img_t_join;
      },
      choices: img_s,
      margin_vertical:'30px',
      button_html: '<button class="jspsych-btn">%choice%</button>',
      prompt: "<p>Please follow the pairs being compared at the top row. <strong>Try to identify any patterns in the comparisons made by Omgne Sort.</strong></p>",
      trial_duration:200,
      data: { phase: 'Learning example '+which_exam },
    }


    timeline.push(imi_hl1)
    timeline.push(imi_hl2)
    timeline.push(imi_comp1)
    timeline.push(loopNode)

    timeline.push(imi_hl0)
  };

  


  const outoforder5 = {
    type: jsPsychSurveyLikert,
    questions: [
      {

        prompt: "<div style='font-size: 20px;'>Given five blocks, the least out-of-order sequence requires 1 swap and the most out-of-order sequence requires 10 swaps.<br><br>The one you just finished requires " + list_comp_bool.reduce((partialSum, a) => partialSum + a, 0) + " swaps, how out-of-order do you think it is?<br><br></div>", 
        labels: ['<div style="font-size: 20px;">least</div>',
          // ' ',
          '<div style="font-size: 20px;">somewhat</div>',
          // ' ',
          '<div style="font-size: 20px;">very</div>',
          // ' ',
          '<div style="font-size: 20px;">most</div>'], 
        required: true,
      } ],
  };
  
  const outoforder8 = {
    type: jsPsychSurveyLikert,
    questions: [
      {
        prompt: "<div style='font-size: 20px;'>Given eight blocks, the least out-of-order sequence requires 1 swap and the most out-of-order sequence requires 28 swaps. <br><br>The one you just finished requires "+ list_comp_bool.reduce((partialSum, a) => partialSum + a, 0) +" swaps, how out-of-order do you think it is?<br><br></div>", 
        labels: ['<div style="font-size: 20px;">least</div>',
            // ' ',
            '<div style="font-size: 20px;">somewhat</div>',
            // ' ',
            '<div style="font-size: 20px;">very</div>',
            // ' ',
            '<div style="font-size: 20px;">most</div>'], 
        required: true,
      }, ],
    };
  if (j>1){
    if (j<4){
      timeline.push({
        type: jsPsychHtmlKeyboardResponse,
        stimulus: ["Final order was 1,2,3,4,5. The initial order was " +p_order+".<br>It took "+list_comp_bool.reduce((partialSum, a) => partialSum + a, 0)+" swaps to sort it correctly with Omgne Sort. <br><br>Press Enter to continue."],
      });
      timeline.push(outoforder5);
    }else{
      timeline.push({
        type: jsPsychHtmlKeyboardResponse,
        stimulus: ["Final order was 1,2,3,4,5,6,7,8. The initial order was " +p_order+".<br>It took "+list_comp_bool.reduce((partialSum, a) => partialSum + a, 0)+" swaps to sort it correctly with Omgne Sort. <br><br>Press Enter to continue."],
      });
      timeline.push(outoforder8);
    }
  }else{
    if (j==0){
      timeline.push({
        type: jsPsychHtmlKeyboardResponse,
        stimulus: ["Final order was 1,2,3,4,5. The initial order was " +p_order+".<br>It took "+list_comp_bool.reduce((partialSum, a) => partialSum + a, 0)+" swaps to sort it correctly with Omgne Sort. <br><br>Press Enter to continue."],
      });
    }
    else{
      timeline.push({
        type: jsPsychHtmlKeyboardResponse,
        stimulus: ["Final order was 1,2,3,4,5,6,7,8. The initial order was " +p_order+".<br>It took "+list_comp_bool.reduce((partialSum, a) => partialSum + a, 0)+" swaps to sort it correctly with Omgne Sort. <br><br>Press Enter to continue."],
      });
    }
  }

};



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////// DO BLOCK ///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

timeline.push({
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p>Welcome to the test phase! <br><br> You will do six problems. Your performance bonus will be calculated based on <b> how you accurately and efficiently use Omgne Sort</b>. <br><br> Press Enter to continue.<p/>",
});

n_img_disp_list=[]
for(var i=0; i<6; i++){
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
    
    // const TT=TrueOrder_oo.map(x => TrueOrder_oo.filter(y => y < x).length + 1); //initial order such as [5,2,4,1,3]
    // console.log("trueOrder",trueOrder)
    // console.log("TT",TT)

    return [TrueOrder_io,trueOrder,trueOrderArray_sort];
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

  // function shuffle(array) {
  //   let currentIndex = array.length, randomIndex;
  //   while (currentIndex != 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;
  //     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  //   }
  //   array.push("finish");
  //   return array;
  // }

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    let aa=array.map(function(value,index) { return value[0]; }); //io means image only, show the list of images selected
    aa.push("finish");
    let TT=array.map(function(value,index) { return value[1]; }); //io means image only, show the list of images selected

    return [aa,TT];
  }

  img_all=[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];


  let n_img=img_all.length; //all available images in the folder
  let n_img_disp=n_img_disp_list[i];
  let which_test=i;

  const [TrueOrder_io,trueOrder,trueOrderArray_sort] = disp_n_true(n_img_disp,n_img)
  // let displayOrder=TrueOrder_io.map((x) => x);
  let displayOrder=null;

  let times_clicked = -1;
  let times_switched = 0;
  let switch_attempted = false;


  // Welcome screen
  // let order_init = null; 
  timeline.push({
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
      // displayOrder = shuffle(displayOrder); 
      let [aa,TT]=shuffle(trueOrderArray_sort)
      displayOrder=aa;
      order_init=TT;
      // console.log(displayOrder)
      console.log(order_init)
      return "<p> + <p/>";
    },
    trial_duration: 500,
    on_start: function(trial) {
      // This ensures data is set after order_init has been assigned
      trial.data = { phase: 'Initial Order: ' + order_init };
    }

  });
  // console.log("TT",TT)



  const display_img = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "",
    choices: function () {
      return displayOrder;
    },
    button_html: '<button class="jspsych-btn">%choice%</button>',
    prompt: "<p>Select any two blocks to compare. If they are in the wrong order, they will swap positions. To undo a selection, select the block again. <br><br>Click finish if you are done sorting.</p>",
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


  

  let Order_final=null;
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
      console.log("to",TrueOrder_o)
      
      
      

      if (jsPsych.pluginAPI.compareKeys(String(displayOrder), String(TrueOrder_io))){
        Order_final=TrueOrder_o.map(v=> v+1);
        // finalDisplay.push("You sorted correctly with "+ String(times_switched) + " comparisons in total. <br><br> "+ displayOrder.join("")+ "<br><br> Your final order is " + Order_final+"<br><br> Press Enter to continue.")
        finalDisplay.push("You sorted correctly. <br><br> "+ displayOrder.join("")+ "<br><br> Your final order is " + Order_final+"<br><br> Press Enter to continue.")
      } else {
        Order_final=TrueOrder_o.map(v=> v+1);
        finalDisplay.push("You sorted incorrectly. <br><br> "+ displayOrder.join("")+  "<br><br> Your final order is " + Order_final+"<br><br> Press Enter to continue.")
      }
      return finalDisplay;
    },
    on_start: function(trial) {
      // This ensures data is set after order_init has been assigned
      trial.data = { phase: 'Final Order: ' + Order_final };
    }
  };

  timeline.push(loopNode);
  timeline.push(finish);


}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////// TEACH BLOCK ///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Teaching_Intro = {
  type: jsPsychInstructions,
  pages: [
  '<p>Welcome to the teaching phase! <br><br> Press Enter to continue.</p>',
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">You will select 6 example problems and write teaching notes to help students learn and apply Omgne Sort during their tests.<br><br> Press Enter to continue.</p>',
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">Students will complete 10 tests: five with 5 items and five with 8 items. All test problems will be new and randomly generated.<br><br> Press Enter to continue.</p>',
  '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">Your bonus is calculated based on your students’ performance (how they accurately and efficiently use Omgne Sort). <br><br> Press Enter to continue.</p>',
  // '<p style="font-size:24px; text-align:left; line-height: 1.2;margin-left: 150px;margin-right: 150px">For each example for your student, first select how many item to be sorted, then select how out-of-order the example should be.<br><br> Press Enter to continue.</p>',
  ],
  show_clickable_nav: false,
  key_forward:"Enter"
}

timeline.push(Teaching_Intro)

// examples for demonstration generated from Gnome_Calcs.ipynb
const demo_5_1=[[1, 2, 3, 5, 4], [1, 2, 4, 3, 5], [1, 3, 2, 4, 5], [2, 1, 3, 4, 5], [1, 2, 4, 3, 5], [2, 1, 3, 4, 5]];
const demo_5_2=[[3, 4, 1, 2, 5], [2, 4, 1, 5, 3], [2, 1, 5, 4, 3], [1, 4, 3, 5, 2], [5, 1, 2, 3, 4], [4, 1, 3, 2, 5]];
const demo_5_3=[[3, 4, 5, 2, 1], [3, 5, 4, 1, 2], [5, 2, 4, 1, 3], [4, 3, 2, 5, 1], [2, 5, 4, 3, 1], [4, 3, 5, 1, 2]];
const demo_5_4=[[5, 4, 3, 2, 1], [5, 4, 3, 2, 1], [5, 4, 3, 2, 1], [5, 4, 3, 2, 1], [5, 4, 3, 2, 1], [5, 4, 3, 2, 1]];
const demo_8_1=[[1, 2, 4, 3, 5, 6, 7, 8], [1, 2, 3, 4, 6, 5, 7, 8], [1, 2, 3, 5, 4, 6, 7, 8], [2, 1, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 7, 6, 8], [1, 3, 2, 4, 5, 6, 7, 8]];
const demo_8_2=[[4, 6, 1, 2, 5, 7, 8, 3], [2, 3, 6, 5, 1, 8, 7, 4], [3, 2, 5, 1, 8, 6, 7, 4], [3, 6, 1, 7, 4, 2, 5, 8], [1, 8, 3, 2, 4, 7, 6, 5], [2, 6, 3, 1, 8, 4, 7, 5]];
const demo_8_3=[[6, 8, 4, 2, 3, 7, 5, 1], [7, 6, 4, 2, 5, 8, 1, 3], [6, 7, 2, 5, 4, 8, 3, 1], [3, 7, 5, 6, 8, 4, 2, 1], [7, 5, 8, 2, 3, 4, 6, 1], [1, 8, 6, 7, 4, 5, 3, 2]];
const demo_8_4=[[8, 7, 6, 5, 4, 3, 2, 1], [8, 7, 6, 5, 4, 3, 2, 1], [8, 7, 6, 5, 4, 3, 2, 1], [8, 7, 6, 5, 4, 3, 2, 1], [8, 7, 6, 5, 4, 3, 2, 1], [8, 7, 6, 5, 4, 3, 2, 1]];



const teaching_choice = {
  type: jsPsychSurveyMultiChoice,
  //5L,8S,5S,5M,8L,8F
  preamble:["For each example for your student, first select how many item to be sorted, then select how out-of-order the example should be. <br><br>For your information, the six examples you learned from were selected from: 1) 5-item-least, 2) 8-item-somewhat, 3) 5-item-somewhat, 4) 5-item-most, 5) 8-item-least, 6) 8-item-very."],
  questions: [
    {
      prompt: "<strong>Student Example 1</strong>: how many items needs to be sorted?", 
      options: ['5-item', '8-item'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "<strong>Student Example 1</strong>: how out-of-order is the initial state?", 
      options: ['least', 'somewhat', 'very','most'], 
      required: true,
      horizontal: true
    },
    {
      prompt: "<strong>Student Example 2</strong>: how many items needs to be sorted?", 
      options: ['5-item', '8-item'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "<strong>Student Example 2</strong>: how out-of-order is the initial state?", 
      options: ['least', 'somewhat', 'very','most'], 
      required: true,
      horizontal: true
    },{
      prompt: "<strong>Student Example 3</strong>: how many items needs to be sorted?", 
      options: ['5-item', '8-item'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "<strong>Student Example 3</strong>: how out-of-order is the initial state?", 
      options: ['least', 'somewhat', 'very','most'], 
      required: true,
      horizontal: true
    },{
      prompt: "<strong>Student Example 4</strong>: how many items needs to be sorted?", 
      options: ['5-item', '8-item'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "<strong>Student Example 4</strong>: how out-of-order is the initial state?", 
      options: ['least', 'somewhat', 'very','most'], 
      required: true,
      horizontal: true
    },
    {
      prompt: "<strong>Student Example 5</strong>: how many items needs to be sorted?", 
      options: ['5-item', '8-item'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "<strong>Student Example 5</strong>: how out-of-order is the initial state?", 
      options: ['least', 'somewhat', 'very','most'], 
      required: true,
      horizontal: true
    },
    {
      prompt: "<strong>Student Example 6</strong>: how many items needs to be sorted?", 
      options: ['5-item', '8-item'], 
      required: true,
      horizontal: true
    }, 
    {
      prompt: "<strong>Student Example 6</strong>: how out-of-order is the initial state?", 
      options: ['least', 'somewhat', 'very','most'], 
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
                      lastTrial.Q6, lastTrial.Q7,
                      // lastTrial.Q8, lastTrial.Q9,
                      // lastTrial.Q10, lastTrial.Q11
                    ];
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
        if (a=="5-item" && b=="somewhat") {
          demo_all.push(demo_5_2[0]);
          demo_5_2.shift()
        }
        if (a=="5-item" && b=="very") {
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
        if (a=="8-item" && b=="somewhat") {
          demo_all.push(demo_8_2[0]);
          demo_8_2.shift()
        }
        if (a=="8-item" && b=="very") {
          demo_all.push(demo_8_3[0]);
          demo_8_3.shift()
        }
        if (a=="8-item" && b=="most") {
          demo_all.push(demo_8_4[0]);
          demo_8_4.shift()
        }
      }
      window.demo_all = demo_all;
      // console.log("bbbb",demo_all)
    }
};


timeline.push(teaching_choice)




// timeline.push(demo_examples)




// for(var kk=0; kk<4; kk++){
//   const jj=kk;



//   function removeSelection_demo(imglist) {
//     let result = imglist.map(x => x);
//     for (let i = 0; i < imglist.length; i++) {
//       if (imglist[i].includes(" id='selected'")) { //id=selected might be jspsych features
//         result[i] = result[i].replace(" id='selected'", "");
//       }
//     }
//     return result;
//   }
  
//   function switchOrNot_demo(imga, imgb,trueOrder) {
//     const order_imga=trueOrder.get(imga);
//     const order_imgb=trueOrder.get(imgb);
//     if (!order_imga || !order_imgb) return false;
  
//     if (order_imga > order_imgb ) {//get the value for dictionary
//       var bigger = imga;
//       var smaller = imgb;
//     } else {
//       var bigger = imgb;
//       var smaller = imga;
//     }
//     let clean = removeSelection_demo(displayOrder_demo);
//     return !(clean.indexOf(bigger) > clean.indexOf(smaller));
//   }

//   //if select 5-item, change displayOrder from [img1,img2,img3,img4,img5,img6,img7,img8] to [img1,img2,img3,img4,img5]
//   function demo_length(array1,array2) { //array1 is displayOrder ([img1,img2,img3,img4,img5,img6,img7,img8]) array2 is the order selected (such as 5,2,3,4,1)
//     let newArray = [...array1]; // Create a copy to avoid modifying original
//     if (array2.length == 5) {
//       newArray = newArray.slice(0, 5);
//     }
//     newArray.push("finish");
//     return newArray;
//   }

//   // var demo_img_order=[[img1,demo_all[0][0]],[img2,demo_all[0][1]],[img3,demo_all[0][2]],[img4,demo_all[0][3]],[img5,demo_all[0][4]]];
//   function trueOrderBuilder(array1,array2){ //array1 is displayOrder, array2 is selected order for the question
//     var array=[];
//     for (var ii=0;ii<array1.length;ii++) {
//       array.push([array1[ii],array2[ii]])
//     }
//     return array;
//   }



//   let times_clicked = -1;
//   let times_switched = 0;
//   let switch_attempted = false;


//   // displayOrder_demo=[img1,img2,img3,img4,img5,img6,img7,img8];


//   let globalTrueOrder_Q1 = null;
//   let global_order_demo_Q1=null;
//   let global_n_img_disp_Q1=null;



//   timeline.push({
//     type: jsPsychHtmlKeyboardResponse,
//     stimulus: function () {
//       // global_order_demo_Q1=demo_all[0];
//       displayOrder_demo=[img1,img2,img3,img4,img5,img6,img7,img8];
//       console.log("aa",demo_all)
//       global_order_demo_Q1=demo_all[jj];
//       console.log("demo",global_order_demo_Q1)
//       global_n_img_disp_Q1=global_order_demo_Q1.length;
//       globalTrueOrder_Q1 = new Map(trueOrderBuilder(removeSelection_demo(displayOrder_demo), global_order_demo_Q1, jj));
//       // console.log("dd",globalTrueOrder_Q1)
//       displayOrder_demo=demo_length(displayOrder_demo,global_order_demo_Q1);
//       console.log("demo2",displayOrder_demo)
//       return "<p> + <p/>";
//     },
//     trial_duration: 500,
//   });

//   const display_img_demo = {
//     type: jsPsychHtmlButtonResponse,
//     stimulus: "",
//     choices: function () {
//       return displayOrder_demo;
//     },
//     button_html: '<button class="jspsych-btn">%choice%</button>',
//     prompt: "<p><b>Your student will learn by imitating your comparisons.</b> <br><br>Select any two blocks to compare. If they are in the wrong order, they will swap positions. To undo a selection, select the block again. <br><br>Click finish if you are done sorting.</p>",
//   };


//   const refresh_demo = {
//     timeline: [display_img_demo],
//     conditional_function: function () {
//       times_clicked++;
//       let data1_tb = jsPsych.data.get().last(1).values()[0];//the second selection
//       let data2_tb = jsPsych.data.get().last(2).values()[0]; //the first selection

//       if (data1_tb.response !== null && displayOrder_demo[data1_tb.response] !== undefined) {
//         if (displayOrder_demo[data1_tb.response].includes(" id='selected'")) {
//           displayOrder_demo[data1_tb.response] = displayOrder_demo[data1_tb.response].replace(" id='selected'", "");
//           console.log("Remove")
//           switch_attempted = false; //if click an image twice then selection is removed
//         } else {
//           displayOrder_demo[data1_tb.response] = displayOrder_demo[data1_tb.response].replace("<img", "<img id='selected'");
//           switch_attempted = true;
//         }
//         if (times_clicked % 2 === 0 && switch_attempted) {
//           times_switched++;
//         }
//       }
//       let clean = removeSelection_demo(displayOrder_demo);
      
//       if (data2_tb.response !== null && times_clicked % 2 === 0 && switchOrNot_demo(clean[data1_tb.response], clean[data2_tb.response],globalTrueOrder_Q1)) {
//         console.log("switch")
//         let temp = displayOrder_demo[data1_tb.response];
//         displayOrder_demo[data1_tb.response] = displayOrder_demo[data2_tb.response];
//         displayOrder_demo[data2_tb.response] = temp;
//       }
//       if (times_clicked % 2 === 0 && times_clicked !== 0) {
//         displayOrder_demo = removeSelection_demo(displayOrder_demo);
//       }
//       if (jsPsych.pluginAPI.compareKeys(String(data1_tb.response), String(global_n_img_disp_Q1))) {//whether you clicked "finished" which is string(6)
//         return false;
//       }
//       return true;
//     },
//   };





//   const loopNode_demo = {
//     timeline: [refresh_demo],
//     loop_function: function (data) {
    
//       var data = jsPsych.data.get().last(1).values()[0];
//       if (jsPsych.pluginAPI.compareKeys(String(data.response), String(global_n_img_disp_Q1))) {
//         return false;
//       } else {
//         return true;
//       }
//     },
//   };

//   timeline.push(loopNode_demo);

//   // the final page shows true order as number overlapped on your order
//   const finish_demo = {
//     type: jsPsychHtmlKeyboardResponse,
//     stimulus: function () {
//       // console.log("finish")
//       displayOrder_demo.pop();
//       displayOrder_demo=removeSelection_demo(displayOrder_demo);
//       let finalDisplay = [];
      
//       var TrueOrder_o=[];

//       if (!global_n_img_disp_Q1) {
//         console.error('length data not found');
//         return false;
//       }
//       // console.log("ff",globalTrueOrder_Q1)
//       // console.log("gg",displayOrder_demo)
//       for(var i=0; i<global_n_img_disp_Q1; i++){
//         // console.log("Ff",globalTrueOrder_Q1.get(displayOrder_demo[i]))
//         TrueOrder_o.push(globalTrueOrder_Q1.get(displayOrder_demo[i])) // order of final display (if it is 1,2,3,4,5 then the sorting is correct)
//       };

//       for (var range_len=[],i=1;i<=global_n_img_disp_Q1;++i) range_len.push(i);

//       if (JSON.stringify(TrueOrder_o) === JSON.stringify(range_len)){
//         // finalDisplay.push("You sorted correctly with "+ String(times_switched) + " comparisons in total. <br><br> "+ displayOrder_demo.join("")+ "<br><br> Your final order is " + TrueOrder_o + "<br><br><br>Press Enter to continue.")
//         finalDisplay.push("You have finished demonstration for student example "+(jj+1)+ ". Press Enter to continue.")
//       } else {
//         finalDisplay.push("You have finished demonstration for student example "+(jj+1)+ ". Press Enter to continue.")
//       }
//       return finalDisplay;
//     },
//   };

//   timeline.push(finish_demo);
// }


var Description = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: 'Create a note for your students to help them quickly identify Omgne Sort patterns and improve accuracy. Your teaching bonus depends on student performance.',rows: 10}
  ]
}

timeline.push(Description);

const Rating_Intro = {
  type: jsPsychInstructions,
  pages: [
  '<p>Welcome to the final section: evaluating notes written by other participants.You will see two notes at a time. Select the one you find more helpful. A helpful note enables beginners to identify patterns of Omgne Sort quickly and improve their accuracy. Press Enter to continue. </p>'
  ],
  show_clickable_nav: false,
  key_forward:"Enter"
}

timeline.push(Rating_Intro);


// const allChoices = ["Check if it is moving left to right. They check blocks next to each other starting from the very left. If they don't swap go to the 2nd and 3rd blocks. If they do swap then check if there are any more swaps with previous blocks. Then go back to where you were.", "KEYS TO OMGNE SORT<br>If a pair changes places, you have to check backwards<br>If a pair does not change places, you go forward<br>After checking forward, go back to where you left off.<br>(For example, if 3 and 4 switch places, you have to go backwards to check, then you start back at 4 by checking 4 and 5)<br><br><br><br>EXAMPLE OF FIVE POSITION SORT<br><br>Start at the left and compare  Position One and Position Two<br>They may or may not switch places.<br><br><br>Compare Position Two and Position Three.<br>If they change places, compare Positions One and Two.<br>If they don't change places, move on with sort<br><br><br>Compare Position Three and Four<br>If they change places, compare Positions Two and Three<br>  If they change places, compare Positions One and Two<br>  If they don't change places, move on with sort<br>If they don't change places, move on with sort<br><br><br>Compare Position Four and Five<br>If they change places, compare Positions Three and Four<br>  If they change places, compare Positions Two and Three<br>    If they change places, compare Positions One and Two<br>    If they don't change places, move on with sort<br>  If they don't change places, move on with sort<br>If they don't change places, move on with sort<br><br>done<br><br>", "Step 1: Designate the leftmost object as Object A.<br><br>Step 2: Check if swapping Object A with its right neighbor is valid (based on a predefined rule, such as its weight).<br><br>If invalid, designate the right neighbor as the new Object A and repeat Step 2.<br><br>If valid, swap their positions, designate the swapped neighbor as Object B, note Object A’s position, and proceed to Step 3.<br><br>Step 3: Propagate Object B to the left, following the same logic as Step 2 but with two changes:<br><br>The goal direction is now left.<br><br>If a swap fails, assume Object B is sorted and return to Step 2 and remember Object A's position.", 'Starting with the left-most block, click on the block and the one to its right. If they swap, try to swap the one that just moved with the one to the left. Continue until no more swaps occur, and then proceed to the right.', 'Start by comparing the first two blocks. Then progress by comparing the blocks in the 2nd and 3rd position, and then the 3rd and 4th, and so on.<br><br>Whenever a swap happens, keep note of the "leading" block that was placed ahead (to the right). If a swap does not happen, the block on the right that was compared becomes the new "leading" block. The block that was just swapped behind the "leading" block then needs to be compared to the block behind it. If a swap happens, again compare it to the block behind it. Repeat this until a swap does not happen or until it is placed in the first position. Then return to your "leading" block and compare it to the block ahead of it.', 'COMPARE TWO ITEMS UNTIL THEY STOP ROTATING, ONCE THEY STOP ROTATING CLICK ON THE ITEM IN WHICH YOU LEFT OFF TO COMPARE TO THE NEXT ITEM, AND CONTINUE UNTIL ITEMS STOP ROTATING', 'Continue to swap pieces until you have put them as far to the left as they will allow.', 'Click on the blocks in pairs from left to right.  If you find a pair that switches, go back and make sure none of the blocks behind switch, then continue where you left off, repeating the pattern.', 'as you sort the gold blocks, compare them to the previous and next blocks to sort them.', "Select 2 blocks. It is recommended to start playing from left to right. Select the first and second block on the left and see whether they switch places. It is ok if they do or don't. Then select the 2nd and 3rd block. If they swap that means that Block 3 should be in Block 2's place. Now to make sure let's select Block 2 and Block 1. If they stay the same, no worries. If they swap places, that's ok. The goal of the game is to put the gold blocks in order. Repeat this method for every block. The goal is to order the blocks correctly with minimal attempts/moves. Good luck!", "Instead of using a compare the first block to the second block, then compare the first block to the third block, etc., the Omgne Sort is a more direct and less repetitive sorting system which doesn't repeat steps over and over. The Omgne Sort compares the first block to the second and then the second to the third. Only when there is an actual block swap do you then go backwards in your possible swapping of blocks, i.e. if the fourth and fifth blocks swap, then you go backwards trying to swap blocks until they don't swap anymore.", 'check on patterns and learn to do them', 'Start left from right and if there is a change keep passing it to the left until it can not move anymore then move on to the next block ', "Select items starting at the left and then to the immediate right select that item as well. If they switch places they are out of order. If they swap places proceed back to the left and see if they swap if they do continue that process until they don't switch places. Then go back and start again where you left off completing the same motion from above until no images change places. ", 'compare each with precious block after each swap', 'Start on the first block and click the second. If nothing moves, moves on to the second block and do the same all the way down the line. If the block is sent back 1 when you click on it going forward, you must keep clicking on the block until its sent back (to the left) as far as it can go, then go back to where you were in the line of blocks and repeat the process.', "Start with the first block and move it to the right as far as it will go.  Then check all the blocks that moved against each other, moving them as necessary.  When nothing can move to the left, you've done it correctly.", 'compare each block with next if it swaps the recheck the previous blocks as well', 'go from left to right selecting 2 at a time.', 'Select 2 objects beside each other and see if they change position', 'Sort the heavy first by selecting and moving them the opposite way', "Quick Guide to Identifying Omgne Sort Patterns<br>Omgne Sort is all about efficiently sorting items by comparing pairs and swapping when necessary. To improve your accuracy and speed, here's a breakdown of key patterns:<br><br>1. Recognizing the Order of Items:<br>Least Out-of-Order: Only one swap is needed, meaning the items are almost sorted. Look for just one misplaced item.<br>Somewhat Out-of-Order: A few swaps are needed. The items are not far from sorted but have a few minor adjustments required.<br>Very Out-of-Order: Multiple swaps are needed to arrange the items in order. This means the items are fairly scrambled.<br>Most Out-of-Order: This requires the maximum number of swaps. Items are in a completely reversed or scrambled order.<br>2. Tips for Faster Sorting:<br>Start with the Extremes: Compare the items at the ends (heaviest vs. lightest) to get a sense of their order.<br>Minimize Comparisons: After each comparison, update the list to focus only on what still needs sorting.<br>Work in Small Sections: If you have 8 items, focus on smaller groups (like the first 3 or 4) to build a sorted base.<br>3. Practice Makes Perfect:<br>Familiarize Yourself with Patterns: Recognize when the arrangement is close to sorted and when it needs more adjustments.<br>Stay Calm and Focused: If you get stuck, step back and compare a new pair to continue the process.", "Hi Students. look out for the number of swaps in a sequence. If you swap in a rightly arranged sequence of 5 8 times, that's very out of order.", 'Hi there, for every 5 item arranged, if you sort out items 7 out of 5 then its sure out of order.', 'The Omgne Sort patterns makes it easy for better understanding and accurate results<br>It is such an easy pattern mostly.<br>Usually in a numerical order.', "Hello Folks, don't forget to keep track of how the numbers are arranged.", 'move the animals randomly until they dont switch positions', 'Hi There, look out for the pattern with the least swap.', 'Hi There, the least number of swaps has the tendency for a correct order.', 'Try your best and click the ones to move them'];

// for every other participant
const allChoices=["Check if it is moving left to right. They check blocks next to each other starting from the very left. If they don't swap go to the 2nd and 3rd blocks. If they do swap then check if there are any more swaps with previous blocks. Then go back to where you were.", "Step 1: Designate the leftmost object as Object A.<br><br>Step 2: Check if swapping Object A with its right neighbor is valid (based on a predefined rule, such as its weight).<br><br>If invalid, designate the right neighbor as the new Object A and repeat Step 2.<br><br>If valid, swap their positions, designate the swapped neighbor as Object B, note Object A’s position, and proceed to Step 3.<br><br>Step 3: Propagate Object B to the left, following the same logic as Step 2 but with two changes:<br><br>The goal direction is now left.<br><br>If a swap fails, assume Object B is sorted and return to Step 2 and remember Object A's position.", 'Start by comparing the first two blocks. Then progress by comparing the blocks in the 2nd and 3rd position, and then the 3rd and 4th, and so on.<br><br>Whenever a swap happens, keep note of the "leading" block that was placed ahead (to the right). If a swap does not happen, the block on the right that was compared becomes the new "leading" block. The block that was just swapped behind the "leading" block then needs to be compared to the block behind it. If a swap happens, again compare it to the block behind it. Repeat this until a swap does not happen or until it is placed in the first position. Then return to your "leading" block and compare it to the block ahead of it.', 'Continue to swap pieces until you have put them as far to the left as they will allow.', 'as you sort the gold blocks, compare them to the previous and next blocks to sort them.', "Instead of using a compare the first block to the second block, then compare the first block to the third block, etc., the Omgne Sort is a more direct and less repetitive sorting system which doesn't repeat steps over and over. The Omgne Sort compares the first block to the second and then the second to the third. Only when there is an actual block swap do you then go backwards in your possible swapping of blocks, i.e. if the fourth and fifth blocks swap, then you go backwards trying to swap blocks until they don't swap anymore.", 'Start left from right and if there is a change keep passing it to the left until it can not move anymore then move on to the next block ', 'compare each with precious block after each swap', "Start with the first block and move it to the right as far as it will go.  Then check all the blocks that moved against each other, moving them as necessary.  When nothing can move to the left, you've done it correctly.", 'go from left to right selecting 2 at a time.', 'Sort the heavy first by selecting and moving them the opposite way', "Hi Students. look out for the number of swaps in a sequence. If you swap in a rightly arranged sequence of 5 8 times, that's very out of order.", 'The Omgne Sort patterns makes it easy for better understanding and accurate results<br>It is such an easy pattern mostly.<br>Usually in a numerical order.', 'move the animals randomly until they dont switch positions', 'Hi There, the least number of swaps has the tendency for a correct order.']


for(var rr=0; rr<14; rr++){
  function getRandomChoices(array, n) {
    return array
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, n);
  }

  if (rr==5){
    const attention1 = {
      type: jsPsychHtmlButtonResponse,
      stimulus: '<p style="font-size: 24px;color: black;word-spacing: 10px">Which note do you think is more helpful?  <br>A helpful note enables beginners to identify patterns of Omgne Sort quickly and improve their accuracy.</p>',
      choices: function() {
        const selectedChoices = ["Please select this choice.","Please do not select this choice."];
        jsPsych.data.write({
          presented_choices: selectedChoices
        });
        return selectedChoices;
        // return getRandomChoices(allChoices, 2); // Get 2 random choices
      },
      button_html: '<button class="jspsych-btn" style="white-space: normal; width: 350px; height: auto; word-wrap: break-word;">%choice%</button>',
      data: {
        phase: 'Note Comparison-Attention1'
      }
    };
    timeline.push(attention1)
  }

  if (rr==9){
    const attention2 = {
      type: jsPsychHtmlButtonResponse,
      stimulus: '<p style="font-size: 24px;color: black;word-spacing: 10px">Which note do you think is more helpful?  <br>A helpful note enables beginners to identify patterns of Omgne Sort quickly and improve their accuracy.</p>',
      choices: function() {
        const selectedChoices = ["Please do not select this choice.","Please select this choice."];
        jsPsych.data.write({
          presented_choices: selectedChoices
        });
        return selectedChoices;
        // return getRandomChoices(allChoices, 2); // Get 2 random choices
      },
      button_html: '<button class="jspsych-btn" style="white-space: normal; width: 350px; height: auto; word-wrap: break-word;">%choice%</button>',
      data: {
        phase: 'Note Comparison-Attention2'
      }
    };
    timeline.push(attention2)
  }
  if (rr!=9&&rr!=5){
    const trial = {
      type: jsPsychHtmlButtonResponse,
      stimulus: '<p style="font-size: 24px;color: black;word-spacing: 10px">Which note do you think is more helpful?  <br>A helpful note enables beginners to identify patterns of Omgne Sort quickly and improve their accuracy.</p>',
      choices: function() {
        const selectedChoices = getRandomChoices(allChoices, 2);
        jsPsych.data.write({
          presented_choices: selectedChoices
        });
        return selectedChoices;
        // return getRandomChoices(allChoices, 2); // Get 2 random choices
      },
      button_html: '<button class="jspsych-btn" style="white-space: normal; width: 350px; height: auto; word-wrap: break-word;">%choice%</button>',
      data: {
        phase: 'Note Comparison'
      }
    };
    timeline.push(trial)
  }

  
};


const Completion = {
  type: jsPsychInstructions,
  pages: [
  '<p>Thank you for your participation! The completion code for this study is C7C8RT8U. Press Enter to finish this study. </p>'
  ],
  show_clickable_nav: false,
  key_forward:"Enter"
}

timeline.push(Completion)

//https://app.prolific.com/submissions/complete?cc=C7C8RT8U


jsPsych.run(timeline);