class CannonBall 
{
  constructor(x, y) 
  {
    var options = 
    {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }

  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }

  shoot()
  {
    var angle1 = cannon.angle-28;
    angle1 = angle1*(3.14/180)
    //converting degree to radian
    var velocity = p5.Vector.fromAngle(angle1)
    velocity.mult(.5);
    Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})
    Matter.Body.setStatic(this.body,false)
  }
}
