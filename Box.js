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
    
    stroke("black");
    strokeWeight(2);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }

};
