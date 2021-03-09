const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, dustbin, ground; 


function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100, 350); 
	ground = new Ground(700, 650, 1400, 20);
	//Ground is similar to a wall, so I am making it with the Wall class. 
	dustbin = new Dustbin(1200, 560, 20, 162)

	Engine.run(engine);
  
}
function keyPressed() {
	var speed = {x:350, y:-140}
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, speed)
	}
}

function draw() {
  rectMode(CENTER);
  background(255);
  
 // keyPressed(); 
  ball.display();
  ground.display();
  fill('red');
  dustbin.display()
  fill('gray'); 
  drawSprites();
 
}


