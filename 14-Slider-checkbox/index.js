const labels = document.querySelectorAll("label");

labels.forEach((label) => label.addEventListener("click",()=> moveBall(label)));

function moveBall(label) {
    const ball = label.children[0]
    ball.classList.toggle('active')
}
