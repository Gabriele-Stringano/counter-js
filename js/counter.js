let counter=0;
num.textContent = counter;

function countplus(){
  counter= counter+1;
    num.textContent = counter;
}

function countMinus(){
  counter= counter-1;
    num.textContent = counter;
}

 function plus() {
   counter= counter+1;
     num.textContent = counter;
   intervalID = setInterval (countplus, 500);
};

function minus() {
  counter= counter-1;
    num.textContent = counter;
  intervalID =  setInterval (countMinus, 500);
};

function stop() {
  clearInterval(intervalID);
};

function countReset() {
  counter=0;
  num.textContent = counter;
};

increment.addEventListener("mousedown", plus);
increment.addEventListener("mouseup", stop);

decrement.addEventListener("mousedown", minus);
decrement.addEventListener("mouseup", stop);

reset.addEventListener("click",countReset);
