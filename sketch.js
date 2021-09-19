var sea,seaImage,Edges;
var ship,ship_Moving;

function preload(){
 ship_Moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(1500,800);
 
  sea = createSprite(200,200,400,400);
  sea.velocityX=-2;
 sea.addImage(seaImage);

 ship = createSprite(550,410,50,50);
 ship.addAnimation("moving",ship_Moving);

}
function draw() {
 
  background("lightBlue");
  
  if(sea.x < 0){
   sea.x = sea.width/2;
  }
   
drawSprites();
}