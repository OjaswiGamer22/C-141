function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
video=createCapture(VIDEO);
video.size(800,400);
video.parent("game_console");
posenet=ml5.poseNet(video,ModelLoaded);
posenet.on("pose",gotPoses);
}

function draw() {
	game();
}

function ModelLoaded(){
	console.log("Model is Loaded");
}

function gotPoses(results){
	if(results.length>0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;

	}
}





