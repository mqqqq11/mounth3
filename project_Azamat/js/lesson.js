//PHONE VALIDATOR
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

//TAB SLIDER PL
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabsParentBlock = document.querySelector('.tab_content_items')
const tabsBlocks = document.querySelectorAll('.tab_content_item')

const hideTabContent = () => {
    tabContentBlocks.forEach((tabContentBlock) => {
        tabContentBlock.style.display = 'none'
    })
    tabsBlocks.forEach((tabBlock) => {
        tabBlock.classList.remove ('tab_content_item_active')
    })
}

const showTabContent = (indexElement = 0) => {
    tabContentBlocks[indexElement].style.display = 'block'
    tabsBlocks[indexElement].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()


tabsParentBlock.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsBlocks.forEach((tabBlock, tabIndex) => {
            if (event.target === tabBlock ) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}

let index = 0

const autoShow = (indexElement = 0) => {
    hideTabContent()
    showTabContent(indexElement)

    setInterval(() => {
        hideTabContent()
        showTabContent(index)
        index = (index + 1 >= tabsBlocks.length) ? 0 : index + 1;
    },3000) 
}
autoShow()

