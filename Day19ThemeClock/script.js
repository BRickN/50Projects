document.addEventListener('DOMContentLoaded', init);

function init() {
    const hourEl = document.querySelector('.hour');
    const minEl = document.querySelector('.min');
    const secEl = document.querySelector('.sec');
    const timeEl = document.querySelector('.time');
    const dateEl = document.querySelector('.date');
    const toggleEl = document.querySelector('.toggle');

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May",
        "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    toggleEl.addEventListener('click', function (e) {
        document.documentElement.classList.toggle('dark')
        if (document.documentElement.classList.contains('dark')) {
            e.target.innerHTML = 'Light mode'
        } else {
            e.target.innerHTML = 'Dark mode'
        }
    })

    setTime();
    setInterval(setTime, 1000);

    function setTime() {
        const time = new Date();
        const month = time.getMonth();
        const day = time.getDay();
        const date = time.getDate();
        const hours = time.getHours();
        const hoursForClock = hours % 12;
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
        minEl.style.transform = `translate(-50%, -100%) rotate(${scale(min, 0, 59, 0, 360)}deg)`;
        secEl.style.transform = `translate(-50%, -100%) rotate(${scale(sec, 0, 59, 0, 360)}deg)`;

        timeEl.innerHTML = `${hours}:${min < 10 ? `0${min}` : min} ${ampm}`

        dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
    }


}


