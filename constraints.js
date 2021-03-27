class Constraints {
    constructor(body1,body2, offSetB) {
        this.body1 = body1; this.body2=body2;
        this.chain = Constraint.create({
            bodyA: body1,
            bodyB: body2,
            pointB: offSetB,
            length: 200,
            stiffness: 0.05
        })
        World.add(world, this.chain);
    }
    display() {
    push();  
    stroke(255);
    strokeWeight(4);
    line(this.body1.position.x, this.body1.position.y, this.body2.x, this.body2.y);
    pop();
    }
    release() {
        this.chain.bodyA=null;
    }

}