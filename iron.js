class IRON{
    constructor(x,y,w,h){
        var options={
            restitution:0.8,
            friction:3,
            density:30
        }
       this.body=Bodies.rectangle(x,y,w,h,options);
       World.add(world,this.body);
       this.w=w;
       this.h=h;

    }
    display(){
        fill("green");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
    
} 