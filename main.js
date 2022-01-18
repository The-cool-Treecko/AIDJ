var song;
var leftX = 0;
var rightX = 0;
var leftY = 0;
var rightY = 0;

function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("model is loaded");
}

function draw() {
    image(video,0,0,600,500);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftX = results[0].pose.leftWrist.x;
        rightX = results[0].pose.rightWrist.x;
        leftY = results[0].pose.leftWrist.y;
        rightY = results[0].pose.rightWrist.y;
        console.log("left wrist position = " + leftX + ", " + leftY);
        console.log("right wrist position = " + rightX + ", " + rightY)
    }
}

function play() {
    song.setVolume(1);
    song.rate(1);
    song.play();
}
