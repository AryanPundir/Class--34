class Ball{
    constructor(x,y,weidth,height,angle){
        var options={
            density:1,
            frictionAir:0.005,
            isStatic : false

        }
this.body = Bodies.rectangle(x,y,weidth,height,options)
this.weidth = weidth
this.height = height
World.add(world,this.body)


    }

    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill("white")
        ellipse(0,0,this.weidth,this.height)
        pop();
    }
}