const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

let engine;
let world;
var ball;
var chain;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  

  ball=Bodies.circle(400,600,50,{restitution:0});
  console.log(ball);
  World.add(world,ball);
  var con_options={
    bodyA:ball,
    pointA: {x:-50,y:0},
    pointB:{
      x:400,
      y:50
    },
    
    length:200,
    stiffness:0.001
    
  }
  chain= Constraint.create(con_options);
  console.log(chain)
  World.add(world,chain);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  push ();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
  stroke ( "red");
  strokeWeight(4);
  var x=chain.bodyA.position.x+chain.pointA.x;
  var y=chain.bodyA.position.y+chain.pointA.y;
  line (x,y,chain.pointB.x,chain.pointB.y)
  //line(x1,y1,x2,y2)
  pop ();
}

