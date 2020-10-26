class Hurdle{
    constructor(y){
        this.x = displayWidth*5;
        this.y = y;
    }

    move(){
        this.x -= 5;
    }

    display(){

        imageMode(CENTER);
        image(hurdleImg,this.x,this.y,50,50);
    }
}