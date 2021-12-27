const split = document.getElementsByClassName('split')
const leftSplit = split[0]
const rightSplit = split[1]

leftSplit.addEventListener('mouseenter', expandLeft)
leftSplit.addEventListener('mouseleave', applyNormalState)

rightSplit.addEventListener('mouseenter', expandRight)
rightSplit.addEventListener('mouseleave', applyNormalState)

function expandRight() {
    rightSplit.classList.add('expand')
    leftSplit.classList.add('shrink')
}

function expandLeft() {
    leftSplit.classList.add('expand')
    rightSplit.classList.add('shrink')
}

function applyNormalState() {
    leftSplit.classList.remove('expand')
    rightSplit.classList.remove('shrink')
    leftSplit.classList.remove('shrink')
    rightSplit.classList.remove('expand')
}