//counter element creation and insertion in html:
let num = document.createElement('p');//creation element that will act as a counter
num.classList.add('counter'); //used for style css
container.insertBefore(num, buttons);//insertion in html
let counter=0;
num.textContent = counter;//displays the counter at zero

//buttons creation and insertion in html:
let decrement = document.createElement('input'); //declaration new button
buttonMaker(decrement, 'Decrease');//insertion button in html
let reset = document.createElement('input');//declaration new button
buttonMaker(reset, 'Reset');//insertion button in html
let increment = document.createElement('input');//declaration new button
buttonMaker(increment, 'Increase');//insertion button in html

function buttonMaker(node,name){  //this function allows us to initialize and append an input element (as a button) in the div buttons
  node.classList.add('btn'); //used for style css
  node.setAttribute('type', 'button');
  node.setAttribute('name', name);
  node.setAttribute('value', name);
  buttons.append(node);
}


function countplus(){ //simple function
  counter= counter+1;
    num.textContent = counter;
}

function countMinus(){ //simple function
  counter= counter-1;
    num.textContent = counter;
}

 function plus() { //function called by the eventListener by pressing the button increment
   counter= counter+1;
     num.textContent = counter;
   intervalID = setInterval (countplus, 400);
};

function minus() { //function called by the eventListener by pressing the button decrement
  counter= counter-1;
    num.textContent = counter;
  intervalID =  setInterval (countMinus, 400);
};

function stop() { //function called by the eventListener when the button is released
  clearInterval(intervalID);
};

function countReset() { //function called by the eventListener by clicking on the button Reset
  counter=0;
  num.textContent = counter;
};

//list of events:
increment.addEventListener("mousedown", plus);
decrement.addEventListener("mousedown", minus);
document.documentElement.addEventListener("mouseup", stop);
reset.addEventListener("click",countReset);
