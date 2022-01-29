noseX = 0;
noseY = 0;
difference = 0;
rightWrist = 0;
leftWrist = 0;
nameV = "Name";

function execute() {
    nameV = document.getElementById("name").value;
    console.log("Name :" + nameV);
}

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(900, 350);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model Initialized");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NoseX = " + noseX + " NoseY = " + noseY);
        leftWrist = results[0].pose.leftWrist.x;
        rigthWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rigthWrist);
        console.log("leftWristX = " + leftWrist + " rightWrist = " + rigthWrist);
    }
}

function draw() {
    background('#ffa500');
    textSize(difference);
    text(nameV, noseX, noseY);
    document.getElementById("size").innerHTML = "Text Size :" + difference;
}