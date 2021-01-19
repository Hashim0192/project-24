class Bin {
    constructor(x, y, width, height) {
      var optionsbin = {
         'isStatic': true,
          'restitution':0,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, optionsbin);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var binpos =this.body.position;
      
      push();
      translate(binpos.x, binpos.y);
     
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white")
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };