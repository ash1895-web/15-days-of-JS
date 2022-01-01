const secondEl = document.querySelector('.second')
const minuteEl = document.querySelector('.minute')
const hourEl = document.querySelector('.hour')
const digitalTime = document.querySelector('.time')
const toggleButton = document.querySelector('button')

toggleButton.addEventListener('click', changeTheme)

function changeTheme() {
    const html = document.querySelector('html')
    html.classList.toggle('dark')
}

function scale(s, a1, a2, b1, b2) {
    return b1+(s - a1)*(b2-b1)/(a2-a1)
}

function runClock() {
    const time = new Date()
    const seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}`: time.getSeconds()
    const minute = time.getMinutes() < 10 ? `0${time.getMinutes()}`: time.getMinutes()
    const hour = time.getHours() < 10 ? `0${time.getHours()}`: time.getHours()
    
    secondEl.style.transform = `rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
    minuteEl.style.transform = `rotate(${scale(minute, 0, 59, 0, 360)}deg)`
    hourEl.style.transform = `rotate(${scale(hour, 0, 11, 0, 360)}deg)`

    digitalTime.innerHTML = `${hour} : ${minute} : ${seconds}`
    console.log(time);
}

setInterval(runClock, 1000)

