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
    document.querySelector('.operations').appendChild(createButton("c"));
    document.querySelector('.operations').appendChild(createButton("/"));
    document.querySelector('.operations').appendChild(createButton("*"));
    document.querySelector('.operations').appendChild(createButton("-"));
    document.querySelector('.operations').appendChild(createButton("+"));
    document.querySelector('.operations').appendChild(createButton("="));


}
function reset() {
    document.querySelector('.display-input').innerHTML = ''
}
function updateDisplay(e) {
    if(e.target.className == 'buttonc') {reset(); return;}
    const display =  document.querySelector('.display-input');
    const element = e.target.className.charAt(e.target.className.length-1);
    if(element == "=") {
        const answer = evaluate(display.textContent); 
        display.innerHTML = answer;
        return;
    }
    display.innerHTML = display.textContent + element;
}

function evaluate(expression) {
   let operations = [...document.querySelector('.operations').children]
   let num1;
   let num2;
   let operator;
   operations.forEach(element => {
    const operation =  element.className;
    const operatorLocation = expression.indexOf(operation.charAt(operation.length-1))
        if( operatorLocation != -1){
            num1 = Number(expression.substring(0,operatorLocation));
            num2 = Number(expression.substring(operatorLocation+1));
            operator = operation.charAt(operation.length-1);
        }
   }
   );
   return operate(num1, num2, operator);
}

function operate(num1, num2, operation){
    switch(operation) {
        case "+":
            return (num1+num2).toFixed(3);

        case "-":
            return (num1-num2).toFixed(3);
 
        case "*":
            return (num1*num2).toFixed(3);
    
        case "/":
            return (num1/num2).toFixed(3);
    }
        
}
addNumberButtons();
addOperationButtons();