Status="";

function setup(){
   canvas=createCanvas(480,380) ;
   canvas.center();
   video=createCapture(VIDEO);
   video.size(480,380);
}
function start(){
    objectDetector=ml5.objectDetector('cocosst',modelLoaded);
    document.getElementById("Status").innerHTML="status: Detecting object";
}
function draw(){
    image(video,0,0,480,380);
}
function modelLoaded(){
    console.log("modelLoaded");
    Status= true;
    video.loop();
    video.speed(1);
    video.volume(0);
}