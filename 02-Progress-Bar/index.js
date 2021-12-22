const buttons = document.getElementById('buttons')
const progressLine = document.getElementById('progress-line')

const previousButton = buttons.children[0]
const nextButton = buttons.children[1]

const items = document.getElementById('item')
const itemList = items.children

nextButton.addEventListener('click', nextItem)
previousButton.addEventListener('click', previousItem)

function latestActiveItem() {

    let latestActiveItemIndex

    for (let index = 0; index < itemList.length; index++) {
        const element = itemList[index];
        if (element.className.includes('active')) {
            latestActiveItemIndex = index
        }
    }

    return latestActiveItemIndex
}

function nextItem() {
    const latestActiveItemIndex = latestActiveItem()
    
    if (latestActiveItemIndex < itemList.length-2) {
    
        itemList[latestActiveItemIndex+1].classList.add('active')  
        
        progressLine.style.width = `${(latestActiveItemIndex+1)*100/3}%`
    
    } else if (latestActiveItemIndex === itemList.length-2) {

        itemList[latestActiveItemIndex+1].classList.add('active')  

        nextButton.classList.add('disable')

        progressLine.style.width = `${(latestActiveItemIndex+1)*100/3}%`
    
    }

    if (latestActiveItemIndex >= 0) {

        previousButton.classList.remove('disable')
    
    }
}

function previousItem() {
    const latestActiveItemIndex = latestActiveItem()
    const isPreviousButtonDisable = previousButton.classList.contains('disable')

    if (!isPreviousButtonDisable && latestActiveItemIndex > 0) {

        itemList[latestActiveItemIndex].classList.remove('active') 

        progressLine.style.width = `${(latestActiveItemIndex-1)*100/3}%`
    
    }

    if (latestActiveItemIndex === 1) {

        previousButton.classList.add('disable')
    
    }

    if (latestActiveItemIndex < itemList.length) {
    
        nextButton.classList.remove('disable')       
    
    }
}