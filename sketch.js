
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var bin,bin2;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(130,20,50);
	bin= new Bin(700,595,30,150);
	bin2= new Bin(780,655,130,30);
	bin3= new Bin(830,595,30,150);
	ground = new Ground(400,680,1410,20);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  background(0);
  
paper.display();
bin.display();
bin2.display();
bin3.display();
ground.display();


 

 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
       Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-105})
	}
}


