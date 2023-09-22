//MODAL
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

function modalAutoOpen() {
    setTimeout(openModal, 10000)
}
modalAutoOpen()


function openModalOnScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.innerHeight + window.scrollY;

    if (scrollTop >= scrollHeight) {
        openModal();

        window.removeEventListener('scroll', openModalOnScroll);
    }
}
window.addEventListener('scroll', openModalOnScroll);

//POST MODAL

const form = document.querySelector('form')

const postData = (formElement) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();

        const request = new XMLHttpRequest()
        request.open('POST', '/server.php')
        request.setRequestHeader('Content-Type', 'application/json')

        const formData = new FormData (formElement)
        const obj = {}
        formData.forEach((item, index) => {
            obj[index] = item
        })

        const json = JSON.stringify(obj)

        request.send(json)
    })
}
