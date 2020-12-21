
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, dustbin,ground, dustbin2, dustbin3


function setup() {
	createCanvas(600, 400);
    engine = Engine.create();
	world = engine.world;

  ball= new Paper(100,100,20,20) 
  dustbin= new Dustbin(500,280,70,30)
  ground= new Ground(300,300,600,20)
  dustbin2= new Dustbin(450,250,30,80)
  dustbin3= new Dustbin(550,250,30,80)

  function keyPressed(){
    if (keyCode===UP_ARROW){
      Matter.Body. applyForce(ballObject.body, ballObject.body.position)
    }
  }
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display()
  dustbin.display()
  dustbin2.display()
  dustbin3.display()
  ground.display()
  
  drawSprites();
 
}



