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

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

// som.addEventListener('input', () => {
//     const request = new XMLHttpRequest
//     request.open ('GET', '/data/conventor.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()

//     request.addEventListener('load', () => {
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)
//     })
// } )

//принцип DRY - don't reapeat yourself
//kiss - keep it simple, stupid
//kiss - keep it short and simple

const convert = (element, target, target2, isValuta) => {
    element.oninput = () => {
    const request = new XMLHttpRequest
    request.open ('GET', '/data/conventor.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()


    
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isValuta === 'som') {
                target.value = (element.value / response.usd).toFixed(2)
                target2.value = (element.value / response.eur).toFixed(2)
            }else if (isValuta === 'usd') {
                target.value = (element.value * response.usd).toFixed(2)
                target2.value = (target.value / response.eur).toFixed(2)
            }else if (isValuta === 'eur') {
                target2.value = (element.value * (response.eur / response.usd)).toFixed(2)
                target.value = (element.value * response.eur).toFixed(2)
            }
            // element.value === "" ? target.value = "" : null
            if (element.value === "") {
                target.value = ''
                target2.value = ''
            } 
        }
    }
}

convert(som, usd, eur, 'som')
convert(usd, som, eur, 'usd')
convert(eur, som, usd, 'eur')


//CARD SWITCHER

const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')
let count = 1


const showCard = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()

        card.innerHTML = `
        <p>${data.title}</p>
        <p style = "color: ${data.completed ? "green" : "red"}">${data.completed}</p>
        <p>${data.id}</p>
        `
    }catch (error) {
        console.error('Error');
    }
}
showCard()


btnNext.onclick = () => {
    if (count === 200) {
        count = 1
    }else {
        count++
    }
    showCard()
}

btnPrev.onclick = () => {
    count = (count === 1) ? 200 : count - 1
    showCard()
}

//fetch console.log
const fetchLog = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()
    console.log(data)
  }
  fetchLog()


//WEATHER
const cityName = document.querySelector('.cityName')
// const btnSearch = document.querySelector('#btn-search')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

//API HELPERS
const DEFAULT_URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

//optinal chaining - ?

// cityName.oninput = (event) => {
//     fetch(`${DEFAULT_URL}?q=${event.target.value}&appid=${API_KEY}`)
//     .then(response => response.json())
//     .then(data => {
//         city.innerHTML = data?.name ? data?.name : "город не найден..."
//         temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + '&deg;C' : '...'
//     })
// }

// ?q= - query пареметр

cityName.oninput = async (event)=> {
    try{
        const response = await fetch(`${DEFAULT_URL}?q=${event.target.value}&appid=${API_KEY}`)
        const data = await response.json()

        city.innerHTML = data?.name ? data?.name : 'город не найден'
        temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + '&deg;C' : '...'
    } catch (error) {
        console.error('Error');
    }
}
