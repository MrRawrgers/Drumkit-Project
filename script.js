const clap = new Audio(`clap.wav`);
const hihat = new Audio(`hihat.wav`);
const kick = new Audio(`kick.wav`);
const openhat = new Audio(`openhat.wav`);
const boom = new Audio(`boom.wav`);
const ride = new Audio(`ride.wav`);
const snare = new Audio(`snare.wav`);
const tom = new Audio(`tom.wav`);
const tink = new Audio(`tink.wav`);
const clapId = document.getElementById("clap")
const hihatId = document.getElementById("hihat")
const kickId = document.getElementById("kick")
const openhatId = document.getElementById("openhat")
const boomId = document.getElementById("boom")
const rideId = document.getElementById("ride")
const snareId = document.getElementById("snare")
const tomId = document.getElementById("tom")
const tinkId = document.getElementById("tink")

// function to play the audio file corresponding to the pressed key and turn the key div white

document.addEventListener("keydown", () => {
    if (event.keyCode == 65) {
        clap.currentTime = 0;
        clap.play();
        clapId.style.backgroundColor = "white"
    } else if (event.keyCode == 83) {
        hihat.currentTime = 0;
        hihat.play();
        hihatId.style.backgroundColor = "white"
    } else if (event.keyCode == 68) {
        kick.currentTime = 0;
        kick.play();
        kickId.style.backgroundColor = "white"
    } else if (event.keyCode == 70) {
        openhat.currentTime = 0;
        openhat.play();
        openhatId.style.backgroundColor = "white"
    } else if (event.keyCode == 71) {
        boom.currentTime = 0;
        boom.play();
        boomId.style.backgroundColor = "white"
    } else if (event.keyCode == 72) {
        ride.currentTime = 0;
        ride.play();
        rideId.style.backgroundColor = "white"
    } else if (event.keyCode == 74) {
        snare.currentTime = 0;
        snare.play();
        snareId.style.backgroundColor = "white"
    } else if (event.keyCode == 75) {
        tom.currentTime = 0;
        tom.play();
        tomId.style.backgroundColor = "white"
    } else if (event.keyCode == 76) {
        tink.currentTime = 0;
        tink.play();
        tinkId.style.backgroundColor = "white"
    }
})

// function to turn the key div back to grey when pressed key is released

document.addEventListener("keyup", () => {
    if (event.keyCode == 65) {
        clapId.style.backgroundColor = "grey"
    } else if (event.keyCode == 83) {
        hihatId.style.backgroundColor = "grey"
    } else if (event.keyCode == 68) {
        kickId.style.backgroundColor = "grey"
    } else if (event.keyCode == 70) {
        openhatId.style.backgroundColor = "grey"
    } else if (event.keyCode == 71) {
        boomId.style.backgroundColor = "grey"
    } else if (event.keyCode == 72) {
        rideId.style.backgroundColor = "grey"
    } else if (event.keyCode == 74) {
        snareId.style.backgroundColor = "grey"
    } else if (event.keyCode == 75) {
        tomId.style.backgroundColor = "grey"
    } else if (event.keyCode == 76) {
        tinkId.style.backgroundColor = "grey"
    }
})

// function to play the corresponding audio file when the mouse button is held down over a key div


clapId.addEventListener("mousedown", () => {
    clap.currentTime = 0;
    clap.play();
    clapId.style.backgroundColor = "white"
})
hihatId.addEventListener("mousedown", () => {
    hihat.currentTime = 0;
    hihat.play();
    hihatId.style.backgroundColor = "white"
})
kickId.addEventListener("mousedown", () => {
    kick.currentTime = 0;
    kick.play();
    kickId.style.backgroundColor = "white"
})
openhatId.addEventListener("mousedown", () => {
    openhat.currentTime = 0;
    openhat.play();
    openhatId.style.backgroundColor = "white"
})
boomId.addEventListener("mousedown", () => {
    boom.currentTime = 0;
    boom.play();
    boomId.style.backgroundColor = "white"
})
rideId.addEventListener("mousedown", () => {
    ride.currentTime = 0;
    ride.play();
    rideId.style.backgroundColor = "white"
})
snareId.addEventListener("mousedown", () => {
    snare.currentTime = 0;
    snare.play();
    snareId.style.backgroundColor = "white"
})
tomId.addEventListener("mousedown", () => {
    tom.currentTime = 0;
    tom.play();
    tomId.style.backgroundColor = "white"
})
tinkId.addEventListener("mousedown", () => {
    tink.currentTime = 0;
    tink.play();
    tinkId.style.backgroundColor = "white"
})

// function to turn the key div back to grey when mousebutton is released 

document.addEventListener("mouseup", () => {
    clapId.style.backgroundColor = "grey"
    hihatId.style.backgroundColor = "grey"
    kickId.style.backgroundColor = "grey"
    openhatId.style.backgroundColor = "grey"
    boomId.style.backgroundColor = "grey"
    rideId.style.backgroundColor = "grey"
    snareId.style.backgroundColor = "grey"
    tomId.style.backgroundColor = "grey"
    tinkId.style.backgroundColor = "grey"
})