class Box {
  constructor(x, y, width, height){
    var opitions = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,opitions);
    World.add(world,this.body);
  }

  display(){
    var pos =this.body.position;
    push();
    rectMode(CENTER);
    fill("red");
    stroke("black");
    strokeWeight(2);
    block1,block2,block3,block4,block5,block6,block7;
  
    fill("lightblue");
    stroke("black");
    strokeWeight(2);
    block8,block9,block10,block11,block12;
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }

};
