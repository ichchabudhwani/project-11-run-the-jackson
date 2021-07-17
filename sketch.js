var runnerimage;

function preload(){
  //pre-load images
  pathing = loadImage("path.png");
  runnerimage= loadAnimation("Runner-1.png","Runner-2.png")
  coinimage= loadImage("coin.png") 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 path = createSprite(200,200);
path.addImage(pathing);
 path.velocityY=5;

 path.y=path.height/30;
 // creating runner
 runner = createSprite(180,340,50,170);
runner.addAnimation("runner",runnerimage);
runner.scale=0.1;

coin1=createSprite(200,100,80,90);
coin1.addImage("coins",coinimage);
coin1.scale=0.3;
coin2=createSprite(300,200,80,90);
coin2.addImage("coins",coinimage);
coin2.scale=0.3;
coin3=createSprite(100,150,80,90);
coin3.addImage("coins",coinimage);
coin3.scale=0.3;
boundary1=createSprite(60,200,20,500);
boundary2=createSprite(340,200,20,500);
boundary1.visible=false;
boundary2.visible=false;
}

function draw() {
  background("black");
  if (keyDown("space")&& runner.y >= 362) {
   runner.velocityY = 10; 
  }
  path.velocityY=5
 runner.x=World.mouseX;
 path.velocityY=5
 runner.y=World.mouseY;
 if(runner.collide(boundary1)){
  runner.x=100;



 }
 if(runner.collide(boundary2)){
  runner.x=310;
}

  if (path.y > 400) {
    path.y=height/2;  
  }
 
drawSprites();
}
