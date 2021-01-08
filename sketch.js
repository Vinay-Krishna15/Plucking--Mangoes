
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone,boy,boyI;
var ground;
var mango1,mango2;
function preload()
{
//boyI=loadImage("Image/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	boy = createSprite(300,300,10,10);
	//boy.addImage(boyI);
	//boy.scale=0.4;
	//Create the Bodies Here.
	//stone = new Stone(400,350,20,20);
	ground = new Ground(400,670,800,10)
	mango1 = new Mango(200,300,5)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  Engine.update(engine);
  //stone.display();
  ground.display();
  mango1.display();
  /*detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  drawSprites();*/
 
}

function detectollision(lstone,lmango){
	var mangoBodyPosition,stoneBodyPosition;

	//mangoBodyPosition=lmango.body.position
	//stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y , mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);

	}
}

