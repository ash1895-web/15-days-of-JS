const inputFields = document.querySelectorAll('.loginFields')

inputFields.forEach(element => 
    element.addEventListener('focus-in',waveLabel(element)))

function waveLabel(element) {
    const labelText = element.labels[0].innerText
    const labelTextArray = labelText.split("")
    element.labels[0].innerHTML = labelTextArray.map((letter, index)=> `<span style="transition-delay: ${index*20}ms">${letter}</span>`).join('')
} 