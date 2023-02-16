class HiddenSearch extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div class="search active">
        <input type="text" class="input" placeholder="Search...">
        <button class="btn"><i class="fas fa-search"></i></button>
    </div>`;
    }
}

function init() {
    window.customElements.define('hidden-search', HiddenSearch)

    const search = document.querySelector('.search');
    const btn = document.querySelector('.btn');
    const input = document.querySelector('.input');

    btn.addEventListener('click', function(){
        search.classList.toggle('active')
        input.focus();
    })
}

document.addEventListener('DOMContentLoaded', init);
