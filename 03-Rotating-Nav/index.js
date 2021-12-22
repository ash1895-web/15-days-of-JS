const hamburgerButton = document.getElementById("menu")
const cancelButton = document.getElementById('cancel')
const circle = document.getElementById('circle')
const nav = document.querySelector('.nav')
const pageContent = document.getElementById('page-content')

hamburgerButton.addEventListener('click', openMenu)
cancelButton.addEventListener('click', closeMenu)

function openMenu() {
    circle.classList.remove('rev-rotate-circle')
    circle.classList.add('rotate-circle')

    nav.classList.remove('hide-menu')
    nav.classList.add('show-menu')

    pageContent.classList.remove('rev-rotate-page-content')
    pageContent.classList.add('rotate-page-content')
}

function closeMenu() {
    circle.classList.remove('rotate-circle')
    circle.classList.add('rev-rotate-circle')

    nav.classList.remove('show-menu')
    nav.classList.add('hide-menu')

    pageContent.classList.remove('rotate-page-content')
    pageContent.classList.add('rev-rotate-page-content')
}
