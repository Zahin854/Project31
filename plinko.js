class Plinko{
	constructor(x,y,r)
	{

		var options={
			isStatic:true,
			restitution:0.3,
			density:1.2

			
			}
		this.r=r
        this.body=Bodies.circle(x,y,this.r, options)
        this.color=color(255,0,0)
		World.add(world, this.body);
		
	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}