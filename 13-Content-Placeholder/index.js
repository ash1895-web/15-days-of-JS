const travelImageContainer = document.getElementById('travelImageContainer')
const description = document.getElementById('descriptionText')
const profileContainer = document.getElementById('personImageContainer')
const authorDescriptionContainer = document.getElementById('authorDescriptionContainer')

function animateLoading() {
    travelImageContainer.classList.remove('animation-bg')
    travelImageContainer.innerHTML = `<img src="./Assets/travel.jpg" alt="travel">`
    
    description.classList.remove('animation-bg')
    description.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, vero!'
    
    profileContainer.classList.remove('animation-bg')
    profileContainer.innerHTML = `<img src="./Assets/person.jpg" alt="person">`
    
    authorDescriptionContainer.classList.remove('animation-bg')
    authorDescriptionContainer.innerHTML = `<p>Alex Jones</p>
    <p>December 20, 2021</p>`    
}

setTimeout(animateLoading, 8000)