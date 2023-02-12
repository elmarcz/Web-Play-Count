const btn = document.getElementById('btn');
const TPlayed = document.getElementById('TPlayed');
let playing = false;
let intervalId;

btn.addEventListener('click', () => {
    let t = 0;
    let Stplayed = localStorage.getItem('TPlayed')
    if (isNaN(Stplayed)) { localStorage.setItem('TPlayed', 0) }
    playing = !playing
    if (playing) {
        btn.innerHTML = 'Stop';
        btn.className = 'btn btn-danger btn-lg';
        intervalId = setInterval(() => {
            t++;
            TPlayed.innerHTML = `Playing`;
            localStorage.setItem('TPlayed', parseInt(Stplayed) + t);
        }, 1000);
    } else {
        clearInterval(intervalId);
        btn.innerHTML = 'Play';
        btn.className = 'btn btn-primary btn-lg';
        TPlayed.innerHTML = `Time Played: ${(parseInt(Stplayed)/3600).toFixed(1)}h`;
    }
});