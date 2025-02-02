let progress = document.getElementById('progress')
let song = document.getElementById('song')
let ctrIcon = document.getElementById('ctrIcon')

song.onloadeddata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrIcon.classList.remove("fa-pause");
        ctrIcon.classList.add("fa-play")
    } else {
        song.play();
        ctrIcon.classList.add("fa-pause");
        ctrIcon.classList.remove("fa-play")
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime
    }, 500)
}
progress.onchange = () => {
    song.play();
    song.currentTime = progress.value;
    ctrIcon.classList.add("fa-pause");
    ctrIcon.classList.remove("fa-play")
}