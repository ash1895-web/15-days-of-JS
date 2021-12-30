const navbar = document.getElementById('navbar')
const line = document.getElementById('line')
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')

line.addEventListener('click', activeToggle)

function activeToggle() {
    if (navbar.classList.contains('navbar-active')) {
        line1.classList.remove('line1-active')
        line2.classList.remove('line2-active')
        line.classList.remove('line-active')
        navbar.classList.remove('navbar-active')
    } else {
        line1.classList.add('line1-active')
        line2.classList.add('line2-active')
        line.classList.add('line-active')
        navbar.classList.add('navbar-active')
    }
}