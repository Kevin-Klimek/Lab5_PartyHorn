// main.js

let audio = document.getElementById("horn-sound");
let image = document.getElementById("sound-image");

document.getElementById("radio-air-horn").addEventListener("change", changeAirHorn);
document.getElementById("radio-car-horn").addEventListener("change", changeCarHorn);
document.getElementById("radio-party-horn").addEventListener("change", changePartyHorn);

document.getElementById("party-horn-form").addEventListener("submit", playHorn);
//document.getElementById("honk-btn").onclick = function(){audio.play()};


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

// Honk button functionality
function playHorn() {
    //console.log(audio.src);
    audio.play();
}