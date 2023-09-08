//GMAIL
gmailInput = document.querySelector('#gmail_input');
gmailButton = document.querySelector('#gmail_button');
gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z0-9_]+@gmail\.com$/


gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.textContent = 'OK'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.textContent = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

//block
const childBlock = document.querySelector('.child_block');
let leftBlock = 0;

const moveBlock = () => {
    leftBlock ++;
    childBlock.style.left = `${leftBlock}px`;
    if (leftBlock < 445) {
        requestAnimationFrame(moveBlock);
    }
}
moveBlock();
 