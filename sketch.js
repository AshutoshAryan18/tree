
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var boy;
var stone;
var mango;
var tree;

function preload()
{
	boyImage=loadImage("boy.png");


}

function setup() {
	createCanvas(1000, 500);

	boy=createSprite(150,420,10,50);
	boy.addImage(boyImage);
	boy.scale=0.1


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,30);
	tree = new Tree(860,270,300,450);
	stone = new Stone(100,400,50,80);
	mango1 = new Mango(900,210,30,30);
	mango2 = new  Mango(900,120,30,30);
	mango3 = new  Mango(800,150,30,30);
	mango4 = new  Mango(770,250,30,30);
	mango5 = new  Mango(840,200,30,30);
	mango6 = new  Mango(950,200,30,30);
	shot = new Slingshot(boy.body,{x:100,y:400});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  shot.display();
  
  drawSprites();
 
}



