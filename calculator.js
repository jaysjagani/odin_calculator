let calc_body = document.querySelector('.calc_body');


function createButton(button_class) {
    const button = document.createElement('button');
    button.classList.add("button" + button_class);
    button.style.backgroundColor = 'blue';
    button.style.color = 'white';
    button.style.fontSize = '50px';
    button.style.width = '100px';
    button.style.height = '100px';
    button.textContent = button_class;
    button.addEventListener('click',updateDisplay);
    return button;
}

function addNumberButtons() {
    for(i = 9; i >= 0; i--) {
        document.querySelector('.numbers').appendChild(createButton(`${i}`));   
    }
}

function addOperationButtons() {
    document.querySelector('.operations').appendChild(createButton("/"));
    document.querySelector('.operations').appendChild(createButton("*"));
    document.querySelector('.operations').appendChild(createButton("-"));
    document.querySelector('.operations').appendChild(createButton("+"));
    document.querySelector('.operations').appendChild(createButton("="));
}

function updateDisplay(e) {
    const display =  document.querySelector('.display-input');
    const element = e.target.className.charAt(e.target.className.length-1);
    if(element == "=") {evaluate(display.textContent)}
    display.innerHTML = display.textContent + element;
}

function evaluate() {

}

function operate(num1, num2, operation){
    switch(operation) {
        case "+":
            return num1+num2;

        case "-":
            return num1-num2;
 
        case "x":
            return num1*num2;
    
        case "/":
            return num1/num2;
    }
        
}
addNumberButtons();
addOperationButtons();