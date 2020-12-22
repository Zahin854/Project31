var particles=[];
var plinkos=[];
var walls=[];
var divisionHeight=300;
var ground
var width=width

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground= new Ground(240,790,480,10)
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10))
  }
}
for(var k=0;k<=width;k=k+80){
  walls.push(new Divisions(k,height,divisionHeight/2,10,divisionHeight))
}
for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75))
}
for(var j=15;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175))
}

for(var j=0;j<=particles.length;j++){
  particles[j].display();
}
for(var k=0;k<=walls.length;k++){
  walls[k].display();
}
function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display();
  plinkos.display();
 particles.display();
  walls.display();

}
