class Ground{
    constructor(x,y,width,height){
     var groundOption={
         isStatic:true
     }
     this.body = Bodies.rectangle(x,y,width,height,groundOption );
     this.width=width
     this.h=height
     World.add(world,this.body);
     
    }
     display(){
     rectMode(CENTER)   
     fill("white")
     rect(this.body.position.x,this.body.position.y,this.width,this.h) 
     }


    }