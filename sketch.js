const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig,log;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,330);
    box2 = new Box(800,330);
    box3 = new Box(600,220);
    box4 = new Box(800,220);
    box5 = new Box(700,120);

    pig = new Pig(700,340);
    pig2= new Pig(700,220);
    log=new Log(700,290,300,PI/2);// PI is equivalent to 180 degrees.
    log2=new Log(700,200,300,PI/2)
    log3=new Log(650,100,150,PI/7)
    log4=new Log(750,100,150,-PI/7)
    ground = new Ground(600,height,1200,20);
    bird=new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig.display();
    pig2.display();     
    log.display();
    log2.display();
    log3.display();
    log4.display();
    ground.display();
    bird.display();
}