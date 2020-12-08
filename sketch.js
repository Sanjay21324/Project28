
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1;
var stone1;
var slingshot;
var tree;
var mango1, mango2, mango3, mango4, mango5;


function preload()
{

}
	
	

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

 boy1 = new Boy(300,500,100,100);
 
 tree = new Tree(600,500,500,500);

 slingshot = new SlingShot(Stone.body,{x:200, y:100});

 var mango1 = new Mango(400,300,20,20);

 var mango2 = new Mango(500,400,20,20);

 var mango3 = new Mango(430,400,20,20);

 var mango4 = new Mango(200,300,20,20);


 var mango5 = new Mango(300,500,20,20);


 stone1 = new Stone(100,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

boy1.display();
slingshot.display();
stone1.display();

  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x: mouseX, Y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x:235, y:420})
		launcherObject.attach(stone1.body);
	}
}


function detectollision(Lmango,Lstone){
	mangoBody.position = lmango.Body.Position
	stoneBody.position = lstone.Body.Position


	var distance=dist(mangoBodyPosition.x, mangoBodyPosition.y , stoneBodyPosition.x, stoneBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
   {
	   Matter.Body.setStatic(lmango.body,false);
   }
}








