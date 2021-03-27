class Pendelumn {
    constructor(x,y){
        this.size=25;
        this.body=Bodies.circle(x,y,this.size,{restitution:1, friction:0, density:7.8});//{restitution:0.3, friction:0.5, density:0.4}
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipse(0,0,this.size);
        pop();
    }
}