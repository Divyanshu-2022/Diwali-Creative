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


function generateWish() {
    const friendName = document.getElementById('friendName').value;
    if (friendName.trim() !== '') {
        const friendWishes = document.getElementById('friendWish');

		const wishes = [
			"May the festival of lights fill your life with joy! ✨🪔🎇",
			"Wishing you and your family a sparkling Diwali! 🎆🌟❤️",
			"May this Diwali bring endless moments of joy and love! 🕯️🌠😊",
			"May the light of Diyas bring joy to your life! 🌌🪔😄",
			"Wishing you prosperity and happiness this Diwali! 💫🏮🥳",
			"May this Diwali light up new dreams, fresh hopes, and fill your days with pleasant surprises and moments. 🎇✨🎉",
			"Wishing you a year rich with wisdom, light, and love! 🪔🌟❤️",
			"May the divine light of Diwali spread peace, prosperity, happiness, and good health in your life. 🏮🌠😊",
			"May the gleaming diyas of Diwali bless you and your loved ones with positivity. 🪔✨😄",
			"Wishing you a Diwali full of celebrations and feasts. 🎉🥳🌟",
			"May this festival of light brighten your life and bring happiness, joy, and prosperity for you and your family. 🎆✨🪔",
			"May the joyous celebration of this divine festival fill your heart with never-ending joy and happiness! 🥳🌌✨",
			"May the beauty of Diwali fill your home with happiness and may the coming year provide you with everything that brings you joy! 🪔🎇❤️",
			"Wishing that the glow of the diyas guide you towards the path of success and prosperity. 🌌✨🏮",
			"May the divine light of Diwali bring into your life peace, prosperity, happiness, and good health. 🪔🎉🌟"
		];

        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];

        friendWishes.innerHTML = `<strong>${friendName}</strong>: ${randomWish}`;

        openPopup();
        document.getElementById('friendName').value = '';
    }
}

function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

