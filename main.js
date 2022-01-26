function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas= createCanvas(500,500);
    canvas.position(900,350);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model Initialized");
}
function gotPoses(results){
    if(results.lenght>0){
        console.log(results);
    }
}
function draw(){
    background('#ffa500')
}