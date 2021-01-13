class Rope{
constructor(bodyA , pointB){
var options = {
    bodyA:bodyA,
    pointB:pointB,
    stiffness:1.2,
    length:250

    
}
this.pointB = pointB
this.body =  Constraint.create(options)
World.add(world , this.body)


}
display(){
   // var pos = this.body.position
   strokeWeight(3)
   stroke("yellow")
line(this.pointB.x,this.pointB.y,this.body.bodyA.position.x,this.body.bodyA.position.y)


}

}