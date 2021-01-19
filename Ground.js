class Ground {
    constructor(x, y, width, height) {
      var optionsground = {
          'isStatic':true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, optionsground);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var groundpos =this.body.position;
      
      push();
      translate(groundpos.x, groundpos.y);
      
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white")
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };