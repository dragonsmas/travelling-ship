var seaImg, shipImg;
var boat, sea

function preload(){
  shipImg = loadAnimation("ship-1.png","ship-2.png");
  seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);

  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale = 0.3;

  boat = createSprite(130,200,30,30);
  boat.addAnimation("moving ship",shipImg);
  boat.scale = 0.25;
}

function draw() {
  sea.velocityX = -3
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  
  drawSprites();
}