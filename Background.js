class Background{
    constructor(a,b,c,d){
        var order1={
            isStatic: true
        }
        this.box = Bodies.rectangle(a,b,c,d,order1);
        World.add(world,this.box);
        
        this.star=loadImage("background.jpg")
        

        this.width=c 
        this.height=d
    }
    display(){
        imageMode(CENTER);
        image(this.star,this.box.position.x, this.box.position.y, this.width, this.height);
    }


}
