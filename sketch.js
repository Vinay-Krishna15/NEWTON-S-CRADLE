
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5,bobDiameter;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Roof(400,80,400,30);

	bob1 = new Bob(200,200,20);
	//Create the Bodies Here.
	//rope1 = new Rope(bob1.body,ground.body,bob1*2,200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  Engine.update(engine) 
  ground.display(); 
  
 // rope1.display();
  bob1.display();
  drawSprites();
 
}



