
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg;
var player,plrImg;
var obsImg;

function preload(){
	bgImg=loadImage("Background.png")
	plrImg=loadImage("Player.png")
	obsImg=loadImage("Obstacle.png")
}

function setup() {
	createCanvas(1500, 800);

	engine = Engine.create();
	world = engine.world;

	bg=createSprite(750,400,20,20)
	bg.addImage("bg",bgImg)
	bg.velocityX=-25
	
	player=createSprite(400,400)
	player.addImage("plr",plrImg)
	player.scale=0.5

	
	 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  
  if (bg.x<0) {
	bg.x = bg.width/2
}
spawnObstacles();


  drawSprites();

}

function spawnObstacles(){
  
		if(frameCount % 30===0){

	   var  obs=createSprite(1400,200)
	   obs.y = Math.round(random(10,790));

		obs.addImage("owl",obsImg);
		obs.velocityX=-25
		obs.scale=0.3;
		obs.lifetime=200;


		}  
}



