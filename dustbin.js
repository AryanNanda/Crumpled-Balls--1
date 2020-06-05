class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(700,680,200,20,options);
      this.body1 = Bodies.rectangle(610,620,20,100, options);
      this.body2 = Bodies.rectangle(790,620,20,100, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      World.add(world, this.body1);
      World.add(world, this.body2);
    }
    display(){
      rectMode(CENTER);
      fill(255);
      stroke(0,255,0)
      strokeWeight(5)
      rect(this.body.position.x,this.body.position.y,200,20);
      rect(this.body1.position.x,this.body1.position.y,20,100);
      rect(this.body2.position.x,this.body2.position.y,20,100);
     
    }
  };