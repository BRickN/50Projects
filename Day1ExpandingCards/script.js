document.addEventListener('DOMContentLoaded', init);

function init(){
    const panels = document.querySelectorAll('.panel');
    panels.forEach(function(panel){
        panel.addEventListener('click', function(ev){
            removeActiveClasses(panels);
            panel.classList.add('active')
        })
    })
}

function removeActiveClasses(panels){
    panels.forEach(function(panel){
        panel.classList.remove('active')
    })
}