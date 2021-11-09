var sea,ship;
var seaImg,shipImg;

function preload(){
seaImg = loadImage("sea.png")
shipImg = loadAnimation("ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Movendo o fundo
  sea=createSprite(400,200);
  sea.velocityX = -5;
  sea.scale=0.3;
  sea.addImage(seaImg)

  ship = createSprite(130,200,30,30);
  ship.scale =0.25;
  ship.addAnimation("navio",shipImg)
}

function draw() {
  background(0);
 if(sea.x<0){
  sea.x=sea.width/8

 }

  drawSprites();
}