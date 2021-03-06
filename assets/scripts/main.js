// main.js
let audio = document.getElementById("horn-sound");
let image = document.getElementById("sound-image");
let volumeImage = document.getElementById("volume-image");
let volumeSlider = document.getElementById("volume-slider");
let volumeNumber = document.getElementById("volume-number");

document.getElementById("radio-air-horn").addEventListener("change", changeAirHorn);
document.getElementById("radio-car-horn").addEventListener("change", changeCarHorn);
document.getElementById("radio-party-horn").addEventListener("change", changePartyHorn);

volumeNumber.addEventListener("input", changeSlider);
volumeSlider.addEventListener("input", changeNumber);

// Honk functionality to play the sound and prevent refreshing when submitting form.
document.getElementById("party-horn-form").addEventListener("submit", function(event) {
    event.preventDefault();
    audio.play();
});

// Radio button functions
function changeAirHorn() {
    audio.src = "./assets/media/audio/air-horn.mp3";
    image.src = "./assets/media/images/air-horn.svg";
}

function changeCarHorn() {
    audio.src = "./assets/media/audio/car-horn.mp3";
    image.src = "./assets/media/images/car.svg";
}

function changePartyHorn() {
    audio.src = "./assets/media/audio/party-horn.mp3";
    image.src = "./assets/media/images/party-horn.svg";
}

// Volume adjustment functionality
function changeSlider() {
    let vol = volumeNumber.value;
    updateVolumeVisuals(vol);
    volumeSlider.value = vol;
    audio.volume = vol / 100;
}

function changeNumber() {
    let vol = volumeSlider.value;
    updateVolumeVisuals(vol);
    volumeNumber.value = vol;
    audio.volume = vol / 100;
}

function updateVolumeVisuals(vol) {
    button = document.getElementById("honk-btn");
    button.disabled = false;
    if(vol > 66) {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(vol > 33) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(vol > 0) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    }
    else {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        button.disabled = true;
    }
}