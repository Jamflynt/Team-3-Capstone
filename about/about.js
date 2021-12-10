// Card Scroll Animation
const boxes = document.querySelectorAll('.card');
window.addEventListener('scroll', checkBoxes);
checkBoxes();
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

// H2 Fade In Animation
const h2 = document.querySelectorAll('h2');
window.addEventListener('scroll', checkH2);
checkH2();
function checkH2() {
    const triggerBottom = window.innerHeight / 5 * 4;
    h2.forEach(h2 => {
        const h2Top = h2.getBoundingClientRect().top;
        if(h2Top < triggerBottom){
            h2.classList.add('showH2')
        } else {
            h2.classList.remove('showH2')
        }
    })
}