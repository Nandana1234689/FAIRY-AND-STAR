class Fairy{
  constructor(a,b){
    var order1={
        isStatic: true
    }
   this.ground = Bodies.rectangle(a,b,300,400,order1);
    World.add(world,this.ground);
    this.fairy=loadImage ("fairy.png")
    
}
display(){
    imageMode(CENTER);
    image(this.fairy,this.ground.position.x,this.ground.position.y,300,400);
    
}
moveRight()
{ this.ground.position.x=this.ground.position.x+50 }

}

