const numbers = document.querySelectorAll('h1')

numbers.forEach((number) => {
    const stringTarget = number.getAttribute('data-target')
    let intTarget = parseInt(stringTarget)
    
    let count = 0
    let incrementBy = 1

    if (intTarget > 100) {
        incrementBy = 10
    } else if (intTarget < 100 && intTarget > 10) {
        incrementBy = 2
    }

    let interval = setInterval(()=>{
        count = count + incrementBy
        number.textContent = count
        if (count === intTarget) {
            clearInterval(interval)
        }
    }, 100 )


})
