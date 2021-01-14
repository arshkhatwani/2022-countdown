const days = document.getElementById('days');
const hrs = document.getElementById('hrs');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

function formatTime(time) {
    if (time < 10) {
        return `0${time}`;
    }
    else {
        return time;
    }
}

function countdown() {
    const currentDate = new Date();
    const newYearDate = new Date('1 Jan 2022');
    const diff = newYearDate - currentDate;
    const day = Math.floor(diff / 1000 / 3600 / 24);
    const hour = Math.floor(diff / 1000 / 3600) % 24;
    const minute = Math.floor(diff / 1000 / 60) % 60;
    const second = Math.floor(diff / 1000) % 60;
    // console.log(day, hour, minute, second);
    days.innerHTML = formatTime(day);
    hrs.innerHTML = formatTime(hour);
    mins.innerHTML = formatTime(minute);
    secs.innerHTML = formatTime(second);
}

setInterval(() => {
    countdown()
}, 1000);