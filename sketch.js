

var girlimg,girl;
var road;

function preload() {
  roadimg = loadImage("images/road.jpg");
  girlimg =loadAnimation("images/running3.png","images/running1.png","images/running2.png");
  girlimg1 = loadImage("images/standing.png");
  
 }

function setup() {
  createCanvas(800,400);

  road = createSprite(400,200,10,10);
  road.addImage("road",roadimg);
  girl = createSprite(400, 200, 50, 50);
  girl.addImage("girl",girlimg1);
  girl.scale=0.5;


  
}

function draw() {
  background(255,255,255);  


if(keyDown(UP_ARROW)){
  girl.y-=3;
  //girl.x = girl.x-3
}
if(keyDown(DOWN_ARROW)){
  girl.y+=3;
}
if(keyDown(LEFT_ARROW)){
  girl.x-=3;
}
if(keyDown(RIGHT_ARROW)){
  girl.x+=3;
}




  drawSprites();
}

