document.addEventListener('DOMContentLoaded', init);

function init() {
    const nav = document.querySelector('#nav')
    const toggle = document.querySelector('#toggle')

    toggle.addEventListener('click', function(e){
        nav.classList.toggle('active')
    })
}



