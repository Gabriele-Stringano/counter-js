let counter=0;
num.textContent = counter; //display the number on the screen

function countplus(){ //simple function 
  counter= counter+1;
    num.textContent = counter;
}

function countMinus(){ //simple function
  counter= counter-1;
    num.textContent = counter;
}

 function plus() { //function called by the eventListener by pressing the button
   counter= counter+1;
     num.textContent = counter;
   intervalID = setInterval (countplus, 500);
};

function minus() { //function called by the eventListener by pressing the button
  counter= counter-1;
    num.textContent = counter;
  intervalID =  setInterval (countMinus, 500);
};

function stop() { //function called by the eventListener when the button is released
  clearInterval(intervalID);
};

function countReset() { //function called by the eventListener by clicking on the button
  counter=0;
  num.textContent = counter;
};

//list of events:
increment.addEventListener("mousedown", plus);
increment.addEventListener("mouseup", stop);

decrement.addEventListener("mousedown", minus);
decrement.addEventListener("mouseup", stop);

reset.addEventListener("click",countReset);
