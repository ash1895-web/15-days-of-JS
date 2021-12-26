const boxes = document.querySelectorAll(".box");

 window.addEventListener('scroll', doScrollAnimation)

doScrollAnimation();

function doScrollAnimation() {
  const triggerLine = (window.innerHeight * 4) / 5;

  boxes.forEach((box) => {
    //   for more info. see MDN docs for getBoundingClientRect
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerLine) {
        box.classList.add('show')
    } else {
        box.classList.remove('show')
    }
  });
}
