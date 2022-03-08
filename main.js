var noseX = 0;
var noseY = 0;


function preload (){
  clown_nose = loadImage('https://i.postimg.cc/NMqT9WmT/output-onlinepngtools-1.png');
}

function setup (){
  canvas = createCanvas(400,450);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400, 450);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPose);



}

function draw (){
  image(video,0,0,400,450)
  fill(255,0,0);
  stroke(255,0,0);
  image(clown_nose,noseX,noseY,70,30)
}

function snap(){
    save('image.png');
}

function modelLoaded(){
  console.log("Pose net is Initialized");
}

function gotPose(results){
  if(results.length > 0){
    console.log(results);
    console.log("nose x =" + results[0].pose.nose.x);
    console.log("nose y =" + results[0].pose.nose.y);
    noseX = results[0].pose.nose.x - 35;
    noseY = results[0].pose.nose.y + 10;
  }
}