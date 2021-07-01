class RUBBER{
	constructor(x,y){
		var options={
			restitution:0.5
		} 
		this.body=Bodies.circle(x,y,40,options);
		World.add(world,this.body);
		this.r=40;
	}
	display(){
		fill("blue");
    	ellipseMode(RADIUS)
		ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
	}
}