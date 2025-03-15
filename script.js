document.addEventListener("DOMContentLoaded", function () {
    const stream = document.getElementById("stream");
    const playPauseBtn = document.getElementById("playPause");
    const stopBtn = document.getElementById("stop");
    const volumeControl = document.getElementById("volume");

    let isPlaying = false;

    playPauseBtn.addEventListener("click", function () {
        if (!isPlaying) {
            stream.play();
            playPauseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-pause-circle" viewBox="0 0 16 16">\n' +
                '                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>\n' +
                '                    <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>\n' +
                '                </svg>';
        } else {
            stream.pause();
            playPauseBtn.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-play-circle" viewBox="0 0 16 16">\n' +
                '                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>\n' +
                '                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>\n' +
                '                </svg>';
        }
        isPlaying = !isPlaying;
    });

    stopBtn.addEventListener("click", function () {
        stream.pause();
        stream.currentTime = 0;
        playPauseBtn.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-play-circle" viewBox="0 0 16 16">\n' +
            '                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>\n' +
            '                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>\n' +
            '                </svg>';
        isPlaying = false;
    });

    volumeControl.addEventListener("input", function () {
        stream.volume = this.value / 100;
    });
});
