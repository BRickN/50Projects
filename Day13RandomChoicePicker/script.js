document.addEventListener('DOMContentLoaded', init);

function init() {
    const textarea = document.querySelector('#textarea');
    const tagsEl = document.querySelector('#tags');

    textarea.focus();
    textarea.addEventListener('keyup', function (e) {
        createTags(e.target.value)

        if(e.key === 'Enter'){
            setTimeout(() => {
                e.target.value = '';
            },10)
            randomSelect()
        }
    })

    function createTags(input) {
        const tags = input.split(',')
            .map(tag => tag.trim())
            .filter(tag => tag !== '');

        tagsEl.innerHTML = ''

        tags.forEach(function(tag){
            const tagEl = document.createElement('span');
            tagEl.classList.add('tag');
            tagEl.innerText = tag;
            tagsEl.appendChild(tagEl)
        })
    }

    function randomSelect(){
        const times = 30;
        const timeout = 100;
        const interval = setInterval(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
            setTimeout(() => {
                unHighlightTag(randomTag)
            }, timeout)
        }, timeout)

        setTimeout(() => {
            clearInterval(interval);

            setTimeout(() => {
                const randomTag = pickRandomTag();
                highlightTag(randomTag);
            }, timeout)
        }, times * timeout)
    }

    function pickRandomTag(){
        const tags = document.querySelectorAll('.tag');
        return tags[Math.floor(Math.random() * tags.length)];
    }

    function highlightTag(tag){
        tag.classList.add('highlight')
    }

    function unHighlightTag(tag){
        tag.classList.remove('highlight')
    }
}



