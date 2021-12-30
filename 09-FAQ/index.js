const arrowButtons = document.querySelectorAll('img')
const answers = document.querySelectorAll('p')

arrowButtons.forEach(arrowButton => arrowButton.addEventListener('click',()=> openClose(arrowButton)))

function openClose(arrowButton) {
    
    const arrowExpanded = arrowButton.classList.contains('img-active')
    if (arrowExpanded) {
        arrowButton.classList.remove('img-active')
    } else {
        arrowButton.classList.add('img-active')
    }

    const questionBox = arrowButton.parentElement
    const answer = questionBox.nextElementSibling

    if (!arrowExpanded) {
        answer.classList.add('active')
    }else {
        answer.classList.remove('active')
    }
}