const image = document.getElementById('container').children[0]
const percentage = document.getElementById('percentage')

image.classList.add('img-clear')
let count = 0

let myInterval = setInterval(blurr, 10)

function blurr() {
    count++
    
    if (count > 99) {
        clearInterval(myInterval)
        percentage.classList.add('p-opacity')
    }

    percentage.textContent = `${count}%`
}