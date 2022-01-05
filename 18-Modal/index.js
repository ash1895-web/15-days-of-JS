const openModalButton = document.getElementById('openModalButton')
const closeModalButton = document.getElementById('closeModalButton')
const modalContainer = document.getElementById('modalContainer')

openModalButton.addEventListener('click', openModal)
closeModalButton.addEventListener('click', closeModal)

function openModal() {
    modalContainer.classList.add('modalVisible')
    openModalButton.style.display = 'none'
}

function closeModal() {
    openModalButton.style.display = 'block'
    modalContainer.classList.remove('modalVisible')
}