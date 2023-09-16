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
 
