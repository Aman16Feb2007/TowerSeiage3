class Connection{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 5
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);
        }

        attach(abc){
            this.sling.bodyA = abc
        }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
        var posa = this.sling.bodyA.position;
        var posb = this.pointB;
        line(posa.x, posa.y, posb.x, posb.y);
        }
    }
    
}