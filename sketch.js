var plinkos=[]
 var particles=[]
 var gameState="PLAY"

 var count=0;
 var score=0;
 var turn=0;

var ground1,ground2,ground3,ground4,ground5;
var ground6,ground7,ground8,ground9;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 

function setup() {
	createCanvas(570, 700);
  
  engine = Engine.create();
	world = engine.world;

	for(var j = 75; j<=width; j=j+50)
  {
   plinkos.push(new Plinko(j,75))
  }

  for(var j = 50; j <=width-10; j=j+50)
  {
   plinkos.push(new Plinko(j,175))
  }

  for(var j=75; j <=width; j=j+50)
  {
   plinkos.push(new Plinko(j,275))
  }

  for(var j = 50; j <=width-10; j=j+50)
  {
   plinkos.push(new Plinko(j,375))
  }

  Engine.run(engine);
  ground1=new Ground(550,690,1500,10)
  ground2=new Ground(0,585,10,200)
  ground3=new Ground(80,585,10,200)
  ground4=new Ground(160,585,10,200)
  ground5=new Ground(240,585,10,200)
  ground6=new Ground(320,585,10,200)
  ground7=new Ground(400,585,10,200)
  ground8=new Ground(480,585,10,200)
  ground9=new Ground(565,585,10,200)

  
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  drawSprites();
  mousePressed()

  if(frameCount%60){
turn=turn+1
  }
  if(frameCount%120){
    turn=turn+2
      }
      if(frameCount%180){
        turn=turn+3

          }
  
 textSize(26)
 fill("white")
  text("SCORE: "+score,10,40)
  fill("gold")
  text("100",420,500)
  text("100",340,500)
  text("500",260,500)
  text("500",180,500)
  text("100",100,500)
  text("500",20,500)
  text("500",500,500)
 
  for (var i = 0; i < plinkos.length; i++){
  plinkos[i].display()
  }


if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10 ,width/2+10),10,10))
}

for(var j=0; j < particles.length; j++){
  if(particles[j]!=null) 
  {
    particles[j].display()
    if(particles[j].body.position.y>600)
    {
     if(particles[j].body.position.x<300)
     {
     score=score+500;
     particles[j]=null;
     if(count>=5){
     gameState="END"
     }
     }
    }
  }
  if(particles[j]!=null) 
  {
    particles[j].display()
    if(particles[j].body.position.y>600)
    {
     if(particles[j].body.position.x<100)
     {
     score=score+100;

     particles[j]=null;
     if(count>=5){
     gameState="END"
     }
     }
    }
  }
  if(particles[j]!=null) 
  {
    particles[j].display()
    if(particles[j].body.position.y>600)
    {
     if(particles[j].body.position.x<500)
     {
     score=score+100;
     particles[j]=null;
     if(count>=5){
     gameState="END"
     }
     }
    }
  }

  if(particles[j]!=null) 
  {
    particles[j].display()
    if(particles[j].body.position.y>600)
    {
     if(particles[j].body.position.x<0)
     {
     score=score+500;

     particles[j]=null;
     if(count>=5){
     gameState="END"
     }
     }
    }
  }
}


ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  ground5.display()
  ground6.display()
  ground7.display()
  ground8.display()
  ground9.display()
  
  fill("red")
  textSize(90)
  
  if(gameState==="END"){
    text("GAMEOVER",45,350)
    score=score+0
  }

}

function mousePressed(){
  if(gameState!=="END"){
    count++;
   particle=new Particle(mouseX,10,10,10)
  }
}
