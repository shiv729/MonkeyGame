
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var score=0;
var scoreb=0;
function preload(){
  
  
  monkey_run =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey= createSprite(200,410,20,20);
  monkey.addAnimation("monkey",monkey_run);
  monkey.scale=0.3;
  
  ground= createSprite(width/2,height-100,width*2,10);
  ground.velocityX=-6;
  ground.shapeColor="brown";
  
  bananaGroup = createGroup();
  rockGroup = createGroup();
  


 
}


function draw() {
  background("white");
  scoringSystem();
 
  bananas();
  rocks();
  text("bananas collected: "+scoreb, 490,100);
  if(keyDown("space")){
    monkey.velocityY=-8;
  }
  monkey.velocityY=monkey.velocityY+0.2;
  monkey.collide(ground);
  if(ground.x<0){
    ground.x=width/2;
  }
  if(monkey.isTouching(rockGroup)){
    scoreb=0;
    rockGroup.destroyEach();
    bananaGroup.destroyEach();
        rockGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
   
  }
  if(monkey.isTouching(bananaGroup)){
    banana.destroy()
    scoreb=scoreb+1
  }


  drawSprites();

  
}
function bananas(){
  if(frameCount%75===0){ 
    var y=Math.round(random(130,300));
    banana=createSprite(620,y,15,15)
    banana.velocityX=-4;
    banana.addImage(bananaImage);
    banana.scale=0.2;
      banana.lifetime=400;
    bananaGroup.add(banana);
  } 
}

function rocks(){
  if(frameCount%100===0){
  ob=createSprite(width+20,height-120,10,10);
  ob.addImage(obstaceImage);
    ob.velocityX=-4;
    ob.scale=0.1;
    monkey.depth=ob.depth;
    rockGroup.add(ob);
    
  ob.lifetime=400;
  }

}


function scoringSystem(){
   
   var survivalTime = 0;
   stroke("white");
   textSize(10);
   fill("white");
   
   stroke("black");
   textSize(10);
   fill("black");
   survivalTime = Math.ceil(frameCount/frameRate());
   text("survival Time: "+ survivalTime,500,50);  
 }



