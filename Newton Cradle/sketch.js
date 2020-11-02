
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1100,550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(370,430,60);
	bob2=new Bob(430,430,60);
	bob3=new Bob(490,430,60);
	bob4=new Bob(550,430,60);
	bob5=new Bob(610,430,60);
	rope1=new Sling(bob1.body,ground.Body,{x:370,y:100});
	rope2=new Sling(bob2.body,ground.body,{x:430,y:100});
	rope3=new Sling(bob3.body,ground.body,{x:490,y:100});
	rope4=new Sling(bob4.body,ground.body,{x:550,y:100});
	rope5=new Sling(bob5.body,ground.body,{x:610,y:100});



	ground=new Roof(490,100,350,60);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(192,192,192);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 keyPressed();
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob5.body,bob5.body.position,{x:10,y:-5})
}
}



