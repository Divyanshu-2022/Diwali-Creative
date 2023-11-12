document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundAudio');
    const playButton = document.getElementById('playButton');

    // Function to play audio
    function playAudio() {
        audio.play()
            .then(() => {
                console.log('Audio is playing');
            })
            .catch(error => {
                console.log('Error playing audio:', error);
            });
    }

    // Trigger playAudio function on window load
    window.onload = function() {
        playAudio();
    };

    // Fallback for browsers that may need a user interaction
    document.addEventListener('click', function() {
        playAudio();
    });

    // Fallback for mobile devices
    document.addEventListener('touchstart', function() {
        playAudio();
    });

    // Trigger a fake click event on the invisible button
    playButton.click();
});