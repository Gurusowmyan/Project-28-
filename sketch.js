
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobDiameter = 40;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1 = new Bob(400,200,40);
bobObject2 = new Bob(440,200,40);
bobObject3 = new Bob(480,200,40);
bobObject4 = new Bob(520,200,40);
bobObject5 = new Bob(560,200,40);

roofObject = new Roof(480,50,200,10);

	Engine.run(engine);
 rope1 =new Rope(bobObject1.body,roofObject.body,bobDiameter*2,0);
 rope2 =new Rope(bobObject2.body,roofObject.body,bobDiameter*2,0);
 rope3 =new Rope(bobObject3.body,roofObject.body,bobDiameter*2,0);
 rope4 =new Rope(bobObject4.body,roofObject.body,bobDiameter*2,0);
 rope5 =new Rope(bobObject5.body,roofObject.body,bobDiameter*2,0);



}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 roofObject.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}



