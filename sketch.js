
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;
var paperimg;

function preload(){
paperimg=loadImage("paper.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper=new Paper(150,10,20);

	groundObject=new ground(width/2,670,width,20);
	
	dustbinObj=new dustbin(1200,650);
	console.log(dustbinObj.position)
	

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(230);
 
  

  groundObject.display();
  paper.display();
  dustbinObj.display();

  keyPressed();
  
  
}

function keyPressed() { 
	if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-13});
	}
		
}

