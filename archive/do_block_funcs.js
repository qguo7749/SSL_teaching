export default function ini_shuffle(array) {
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