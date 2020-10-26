class Form{
    constructor(){
       this.inst = createElement('h1');
       this.inst.html("ENTER YOUR DETAILS");

       this.name = createInput('CodeName');

       this.submit = createButton('SUBMIT');

       this.reset = createButton("RESET");

    }

    hide(){
        this.inst.hide();
        this.name.hide();
        this.submit.hide();
    }

    display(){
        
        this.inst.position(displayWidth/4,displayHeight/4);
        this.name.position(displayWidth/4,displayHeight/3);
        this.submit.position(displayWidth/4,displayHeight/2.5);
        this.reset.position(displayWidth,500);

        this.submit.mousePressed(() => {
            this.name.hide();
            this.submit.hide();

            playerCount += 1;
            CurrentPos +=230;
         
            player.name = this.name.value();
            player.Ypos = CurrentPos;
            player.Ppos = CurrentPos;
            player.index = playerCount;
            player.update();

            player.updateCount(playerCount); 
            player.updatePos(CurrentPos);
            this.inst.html("let's warm up " + player.name);
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            player.updatePos(100);
            player.deletePlayerInfo();
            Player.updatePlayersAtEnd(0);
        })

    }
}