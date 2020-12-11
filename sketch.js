const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ground_option={
    isStatic:true
  }

  var ball_option={
    restitution:2.0
  }

ground=Bodies.rectangle(200,370,400,50,ground_option);
World.add(world, ground);

console.log(ground.position.x);

ball=Bodies.circle(200,100,0.2,ball_option);
World.add(world, ball);
  
}

function draw() {
  background(0);
  Engine.update(engine);
   
  rectMode(CENTER); 
  rect(ground.position.x, ground.position.y, 400, 8);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20)
  drawSprites();
}
