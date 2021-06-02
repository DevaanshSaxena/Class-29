class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB
        this.catapult=loadImage("sprites/sling1.png")
        this.catapult2=loadImage("sprites/sling2.png")
        this.rubberband=loadImage("sprites/sling3.png")

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        stroke(48, 24, 0);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.catapult,280,20)
        image(this.catapult2,250,20)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x-15, pointA.y-5, pointB.x, pointB.y);
            line(pointA.x-15, pointA.y-5, pointB.x+25, pointB.y);
            image(this.rubberband,pointA.x-20,pointA.y-15, 10, 20)


        }
    }
    
}