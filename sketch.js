const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var music

function preload(){
    music = loadSound("joyMusic.mp3")
}
function setup(){
    var canvas = createCanvas(1100,800);
    engine = Engine.create();
    world = engine.world;
  
    music.play()

    b  =new Background(550,400,1100,800)
    f  =new Fairy(150,640)
    s  =new Star (980,50,100,100)
    s1 =new Star(1050,90,50,50)
    s2 =new Star (1000,300,40,40)
    s3 =new Star (300,380,40,40)
    s4 =new Star (100,80,40,40)
}

function draw(){
    background(0);
    Engine.update(engine);
    

 

     b.display()
     f.display()
     s.display()
     s1.display()
     s2.display()
     s3.display()
     s4.display()

     
       if (s.y>470&&s.Body.position.y>470){
        Matter.Body.setStatic(s.Body,false);
    
       }
    
    
     text(mouseX+"  "+mouseY,mouseX,mouseY)
     
     textSize(24);
     fill("white");
     text("To move the fairy use 'Right arrow' and to make the star fall use 'Left arrow'",150,310)
}
function keyPressed(){
    if(keyCode === 39)
    { f.moveRight()
     
     }
   
    if(keyCode === 37)
    { s.fall()     
    }
     


}
 

   

