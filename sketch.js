const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,paperball,bottomDustBin,launcher;

function setup() 
{
  createCanvas(1300,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(550,475,1500,10);
  paperball = new Paper(200,200,70); 
  //leftDustbin = new Dustbin(975,425,20,90);	
  bottomDustbin = new Dustbin(1025,450,120,120);
  //rightDustbin = new Dustbin(1125,425,20,90);

  launcher = new Launcher(paperball.body,{x:200,y:200});

}

function draw() 
{	
  background("white");
  Engine.update(engine);

  ground.display();
  paperball.display();
  //leftDustbin.display();
  bottomDustbin.display();
  launcher.display();
  //rightDustbin.display();

  drawSprites();
}

/*function keyPressed()
{
  if(keyCode == UP_ARROW)
  {
  	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:125,y:-125});
  }
}*/

function mouseDragged()
{
  Matter.Body.setPosition(paperball.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  launcher.fly();
}



