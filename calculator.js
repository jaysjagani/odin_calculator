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
    return button;
}

function addNumberButtons() {
    for(i = 9; i >= 0; i--) {
        createButton("i");
        document.querySelector('.numbers').appendChild(createButton(`${i}`));   
    }
}

function addOperationButtons() {
    document.querySelector('.operations').appendChild(createButton("/"));
    document.querySelector('.operations').appendChild(createButton("x"));
    document.querySelector('.operations').appendChild(createButton("-"));
    document.querySelector('.operations').appendChild(createButton("+"));
    document.querySelector('.operations').appendChild(createButton("="));


}

addNumberButtons();
addOperationButtons();