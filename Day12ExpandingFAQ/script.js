document.addEventListener('DOMContentLoaded', init);

function init() {
    const questions = document.querySelectorAll('.faq');

    questions.forEach(function (question) {
        question.addEventListener('click', function (e) {
            toggleQuestion(question)
        })
    })

    function toggleQuestion(question) {
        question.classList.toggle('active')
    }

    //event listeners on buttons instead of entire faq element
    // const buttons = document.querySelectorAll('.faq-toggle')

    // buttons.forEach(function (button) {
    //     button.addEventListener('click', function (e) {
    //         toggleQuestionButton(button)
    //     })
    // })

    // function toggleQuestionButton(button) {
    //     button.closest('.faq').classList.toggle('active')
    // }
}


