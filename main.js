function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,loadmodel);
    posenet.on("pose",gotPoses);
}
function loadmodel(){
    console.log("model is loaded");
}
leftWristX="";
rightWristX="";
driffernce="";
function gotPoses(results){
      if(results.length>0){
          console.log(results);
          leftWristX=results[0].pose.leftWrist.x;
          rightWristX=results[0].pose.rightWrist.x;
          driffernce=floor(leftWristX-rightWristX);
          document.getElementById("cyborge").innerHTML="The font size is: "+driffernce;
      }
}
function draw(){
    background("white");
    textSize(driffernce);
    fill("lawngreen");
    text("Aarnav",50,260);
}