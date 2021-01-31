const Engine = Matter.Emgine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var dog,happydog;
var foodS,foodStock;
var bg_image;

function preload()
{

}

function setup() {
	createCanvas(500,500);
  engine=Engine.create;
  world = engine.world;

  happydog=new happyDog(500,height,1200,20)


}


function draw() {  
background("green");
Engine.update(engine);

happydog.display();
  

}



