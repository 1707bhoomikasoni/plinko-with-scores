class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic:true
        }
    this.body=Bodies.circle(x,y,10,options)
    
    World.add(world,this.body)
    }
display(){
    var pos=this.body.position
    var angle=this.body.andle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
   imageMode(CENTER)
    noStroke()
    fill("white")
    ellipseMode(RADIUS)
    ellipse(0,0,8,8)
    pop()
}

}