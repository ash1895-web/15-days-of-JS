const iconContainer = document.getElementById('icon-container')
const searchIcon = iconContainer.children[0];
const input = document.getElementsByClassName('input')[0]

searchIcon.addEventListener('click', showInputBox)

function showInputBox() {
    input.classList.add('input-visible')
}