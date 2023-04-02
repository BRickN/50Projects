document.addEventListener('DOMContentLoaded', init);

function init() {
    const smallCups = document.querySelectorAll('.cup-small');
    const liters = document.querySelector('#liters');
    const percentage = document.querySelector('#percentage');
    const remained = document.querySelector('#remained')

    updateBigCup();

    smallCups.forEach(function (smallCup, idx) {
        smallCup.addEventListener('click', function () {
            highlightCups(idx)
            updateBigCup();
        })
    })

    function highlightCups(idx) {
        if (smallCups[idx].classList.contains('full')
            && idx == (smallCups.length - 1)) {
            idx--;
        }
        else if (smallCups[idx].classList.contains('full')
            && !smallCups[idx + 1].classList.contains('full')) {
            idx--;
        }

        smallCups.forEach(function (cup, idx2) {
            if (idx2 <= idx) {
                cup.classList.add('full');
            } else {
                cup.classList.remove('full');
            }
        })

    }

    function updateBigCup() {
        const fullCups = document.querySelectorAll('.cup-small.full').length;
        const totalCups = smallCups.length
        if(fullCups === 0){
            percentage.style.visibility = 'hidden';
            percentage.style.height = 0;
        }else{
            percentage.style.visibility = 'visible';
            percentage.style.height = `${fullCups / totalCups * 330}px`;
            percentage.innerText = `${fullCups / totalCups * 100}%`
        }

        if(fullCups === totalCups){
            remained.style.visibility = 'hidden';
            remained.style.height = 0;
        }else{
            remained.style.visibility = 'visible';
            liters.innerText = `${2 - (250 * fullCups / 1000)} L`
        }
    }
}




