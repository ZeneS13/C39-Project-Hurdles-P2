class Athlete{
    constructor(x,y){
        this.r = y
        this.x = x;
        this.y = height-this.r;
        this.vy = 0;
        this.gravity = 3;
    }

    jump(){
      this.vy = -30;
      console.log("jump");
    }

    move(){
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y,0,height-this.r);
     }

    display(){
        image(athletes[frameCount%athletes.length],this.x,this.y,200,290);
    }
}