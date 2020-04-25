function preload() {
    sound = loadSound('sounds/heavy-rain.wav');
}

function setup() {
    let cnv = createCanvas(300, 300);
    cnv.mouseClicked(toggleSound);
    amplitude = new p5.Amplitude();
}

function draw() {
    background('pink');
    text('tap to play', 20, 20);
    let level = amplitude.getLevel();
    let size = map(level, 0, 1, 0, 200);
    ellipse(width/2, height/2, size, size);
}

function toggleSound() {
    if (sound.isPlaying()) {
        sound.stop();
    } else {
        sound.play();
    }
}