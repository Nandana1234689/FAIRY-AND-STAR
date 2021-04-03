class Star {
    constructor(a,b,c,d){
        var order1={
            isStatic: true
        }
       this.ground = Bodies.rectangle(a,b,c,d,order1);
        World.add(world,this.ground);
        this.star=loadImage ("star.png")
        
     
        
        this.width=c 
        this.height=d
    }
    display(){
        imageMode(CENTER);
        image(this.star,this.ground.position.x,this.ground.position.y,this.width, this.height);
        
    }
fall(){
    this.ground.position.y=this.ground.position.y+250 }

}