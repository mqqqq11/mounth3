//GMAIL
gmailInput = document.querySelector('#gmail_input');
gmailButton = document.querySelector('#gmail_button');
gmailResult = document.querySelector('#gmail_result');

const reg = /^[a-zA-Z0-9_]+@gmail\.com$/


gmailButton.onclick = () => {
    if (reg.test(gmailInput.value)) {
        gmailResult.textContent = 'OK'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.textContent = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

//MOVEBLOCK
const childBlock = document.querySelector('.child_block');

let mLeft = 0;
let mTop = 0;
let mRight = 0;
let mBottom = 0;

const moveBlock = () => {
    if (mLeft < 445) {
        mLeft++;
        childBlock.style.left = `${mLeft}px`;

    }else if (mLeft >= 445 && mTop < 445) {
        mTop++;
        childBlock.style.top = `${mTop}px`;

    }else if (mTop >= 445 && mRight < 445) {
        mRight++;
        childBlock.style.left = `${445 - mRight}px`;

    }else if (mRight >= 445 && mBottom < 445) {
        mBottom++;
        childBlock.style.top = `${445 - mBottom}px`
    }else {
        mLeft = 0
        mTop = 0
        mRight = 0
        mBottom = 0
        childBlock.style.left = "0px"
        childBlock.style.top = "0px"
    }

    setTimeout(moveBlock, 0.1)
}
moveBlock();

//TIMER
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

const second = document.querySelector('#secondsS')

let sec = 0
let intervalId = null;

start.onclick = () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            sec++;
            second.innerHTML = sec;
        }, 1000);
    }
};

stop.onclick = () => {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

reset.onclick = () => {
    sec = 0;
    second.innerHTML = sec;
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
};
 
