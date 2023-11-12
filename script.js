let display = document.querySelector('#display');

let displayValue = "";
let numbers = document.body.getElementsByClassName('numbers');

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', e => {       
        if (e.target.textContent === "0" && display.textContent === "") return;
        if (display.textContent.length >= 12) return;
        displayValue += e.target.textContent;
        display.textContent = displayValue;
    });
    
};

let dotBtn = document.getElementById('dot');
dotBtn.addEventListener('click', () => {
    if (displayValue.includes(".")) return;
    displayValue += ".";
    display.textContent = displayValue;
});

let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
    display.textContent = "";
    displayValue = "";
    a = "0";
    curOperator = "";
});

let curOperator = "";
let a = "0";

let opeators = document.body.getElementsByClassName('operators');
for (var i = 0; i < opeators.length; i++) {
    opeators[i].addEventListener('click', e => {
        if (a !== "0") {
            let tempRes = calculate(curOperator, +a, +displayValue);
            display.textContent = tempRes;
            a = tempRes;
            displayValue = "";
            curOperator = e.target.getAttribute('id');

        } else {
            a = displayValue;
            display.textContent = "";
            displayValue = "";
            curOperator = e.target.getAttribute('id');
        }


    });
    
};


function calculate(oper, first, second) {
    switch (oper) {
        case "add":
            return (first + second).toString()
        case "subtract":
            return (first - second).toString()
        case "multiply":
            return (first * second).toString()
        case "divide":
            if (second == 0) return "Error: dividing zero"
            else
                return (first / second).toString()
    }
}

let eqBtn = document.getElementById('equals');
eqBtn.addEventListener('click', () => {
    let result = calculate(curOperator, +a, +displayValue);
    display.textContent = result;
    a = result;
    //displayValue = ""
});

