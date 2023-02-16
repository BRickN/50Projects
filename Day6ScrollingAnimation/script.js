document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxes = document.querySelectorAll('.box');
    checkBoxes();

    window.addEventListener('scroll', checkBoxes);

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 5 * 4;

        boxes.forEach(function(box){
            const boxTop = box.getBoundingClientRect().top;

            if(boxTop < triggerBottom){
                box.classList.add('show')
            } else{
                box.classList.remove('show')
            }
        });
    }
}