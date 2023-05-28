const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');

// const currentYear = new Date().getFullYear();
const weddingTime = new Date('October 7 2023 15:00:00');

//Update Countdowntime
function updateCountdown() {
    const currentTime = new Date();
    const diff = weddingTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    // console.log(m);

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;

}

setInterval(updateCountdown, 1000);
