
//Welcome to my Project ! ummm nothing to say much but if u press up arow while playing , and it stucks up plz use down arrow also :) thanks you ;D




class Bob {
    constructor(x,y,r){
        var options={
            isStatic:false,
            friction:0.4,
            density:3,
           restitution:1.2,
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle)
        

        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r)
        pop ()
    }
}