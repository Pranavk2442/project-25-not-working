class Paper {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body=Bodies.circle(x,y,radius,options);
        this.radius=30;
       // this.image=loadImage("paper.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER)
        ellipse(0,0,this.radius);
        pop();
    }
}