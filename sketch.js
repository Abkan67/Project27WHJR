
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const pendelumns = []
const chains = []
let roof;
function preload() {
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

  roof = new Ground(350,100,300,30);
	for (i=0; i<5; i++) {
		dist = i*50+250;
		var pend = new Pendelumn(dist, 300);
		pendelumns.push(pend);
		chains.push(new Constraints(pend.body, roof.body, {x:i*50-100, y:0}))
	}

  window.addEventListener("keydown", ()=>{
	  Matter.Body.applyForce(pendelumns[0].body, {x:pendelumns[0].body.position.x,y:300}, {x:-50, y:0})})
}


function draw() {
  rectMode(CENTER);
	Engine.run(engine);
  background(0);
  push();
  fill("brown");
  rectMode(CENTER);
  rect(450,100,800,100);
  pop();
  pendelumns.forEach((pend, i)=>{pend.display();})
  chains.forEach((chain, i)=>{chain.display();})
 
}



