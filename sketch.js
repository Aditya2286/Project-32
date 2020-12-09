const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;

var block17,block18,block19,block20,block21,block22,block23,block24,block25;

var stand1,stand2;

var polygon,polygonImg;

function preload(){
    polygonImg=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(950,350);
    engine = Engine.create();
    world = engine.world;
    

    stand1= new Ground(450,320,250,10);

    stand2=new Ground(770,200,200,10);

    //bottomStage of stand1
    block1= new Box(360,270,30,40);

    block2= new Box(390,270,30,40);

    block3= new Box(420,270,30,40);

    block4= new Box(450,270,30,40);

    block5= new Box(480,270,30,40);

    block6= new Box(510,270,30,40);

    block7= new Box(540,270,30,40);

    //second bottomStage of stand1
    block8= new Box(390,230,30,40);

    block9= new Box(420,230,30,40);

    block10= new Box(450,230,30,40);

    block11= new Box(480,230,30,40);

    block12= new Box(510,230,30,40);

    //secondStage of stand1
    block13= new Box(420,190,30,40);

    block14= new Box(450,190,30,40);

    block15= new Box(480,190,30,40);

    //topStage of stand1
    block16= new Box(450,150,30,40);

    //bottomStage of stand2
    block17= new Box(710,150,30,40);

    block18= new Box(740,150,30,40);

    block19= new Box(770,150,30,40);

    block20= new Box(800,150,30,40);

    block21= new Box(830,150,30,40);

    //secondStage of stand2
    block22= new Box(740,110,30,40);

    block23= new Box(770,110,30,40);

    block24= new Box(800,110,30,40);

    //topStage of stand2
    block25= new Box(770,70,30,40);

    //Creating the polygon and sling
    polygon= Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot= new SlingShot(this.polygon,{x:100,y:200});

    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);

}

function draw(){
    background(44, 34, 34);
    Engine.update(engine);
    rectMode(CENTER);

    stand1.display();
    stand2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    slingShot.display();

    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}