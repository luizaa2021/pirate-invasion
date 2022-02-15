class CannonBall{

constructor(x,y){

this.raio = 30;
var ball_options={
    isStatic:true
}


this.body= Bodies.circle(x,y,this.raio, ball_options);

this.image= loadImage("assets/cannonball.png")
World.add(world,this.body);

}
display(){
    push();
    imageMode(CENTER);
    image(this.image,this.body.position.x, this.body.position.y, this.raio, this.raio);
    pop();
}

shoot(){

    Body.setStatic(this.body, false);
    Body.setVelocity(this.body,{x:10 , y:-5 })



}


}