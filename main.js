
song ="";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function preload(){
  song = loadSound("music.mp3")
}

function setup(){
    canvas = createCanvas(600,500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    myposenet = ml5.posenet(video, modalloaded);
    myposnet.on("pose", gotposes)

}
function modalloaded(){
    console.log("modal has been")
}
function gotposes(results){
if(results.lenght > 0){
    rightwristX = results[0].pose.rightWrist.x;
    leftwristX = results[0].pose.leftWrist.x;

    rightwristY = results[0].pose.rightWrist.y;
    lefttwristY = results[0].pose.lefttWrist.y;
}

}

function draw(){
    image(video,0,0,600,500)
}

function playing(){
    song.play();
    song.volume(1)
    song.rate(1)
}