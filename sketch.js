var balloon,balloonImage1,balloonImage2;
var database;
var balloonposition;
var position;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  console.log(database);

  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  balloonposition=database.ref('Project 35/balloon/position');
  balloonposition.on("value", readPosition, showError);
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(-10, 0);
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(+10, 0);
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(0, -10);
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(0, +10);
  }

  drawSprites();

  fill(0);
  stroke("white");
  textSize(25);
  text("*Use arrow keys to move Hot Air Balloon!",40,40);
}

function keyPressed() {
  if (keyCode==LEFT_ARROW) {
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    writePosition(-10, 0);
    console.log("left");
  }
  if (keyCode==RIGHT_ARROW) {
    balloon.addAnimation("hotAirBalloon", balloonimage2);
    writePosition(+10, 0);
    console.log("right");
  }
  if (keyCode==UP_ARROW) {
    balloon.addAnimation("hotAirBalloon", balloonImage2);
    writePosition(-10, 0);
    console.log("up");
  }
  if (keyCode==DOWN_ARROW) {
    balloon.addAnimation("hotAirBalloon", balloonImage2);
    console.log("down");
  }
}

function writePosition(x, y) {
  database.ref('Project 35/balloon/position').set({
    'x': position.x+x,
    'y': position.y+y
  });
}

function readPosition(data) {
  position=data.val();
  balloon.x=position.x;
  balloon.y=position.y;
}

function showError() {
  console.log("Error");
}