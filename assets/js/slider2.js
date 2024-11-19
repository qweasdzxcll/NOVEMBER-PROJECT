let offset = 0;
const sliderLine= document.querySelector('.main__line');

// setInterval(() => {
//     nextSlide()
// }, 3000);

function nextSlide() {
    offset += 1920;
    if (offset >= 3840) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
}
function prevSlide() {
    offset -= 1920;
    if (offset < 0) {
        offset = 1920;
    }
    sliderLine.style.left = -offset + 'px'
}

document.querySelector('.btns__btn-next').onclick = nextSlide

document.querySelector('.btns__btn-prev').onclick = prevSlide