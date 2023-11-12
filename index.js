document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundAudio');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function() {
        audio.play()
            .then(() => {
                console.log('Audio is playing');
            })
            .catch(error => {
                console.log('Error playing audio:', error);
            });
    });
});
