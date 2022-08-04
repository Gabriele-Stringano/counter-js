let counter=0;
num.textContent = counter;

increment.addEventListener("click", function(){operation('add')});

decrement.addEventListener("click", function(){operation('subtract')});

reset.addEventListener("click", function(){operation('reset')});

function operation(operator) {
    switch (operator) {
        case 'add':
            counter= counter+1;
        break;
        case 'subtract':
            counter--;
        break;
        case 'reset':
            counter = 0;
        break;
    }
    num.textContent = counter;
};
