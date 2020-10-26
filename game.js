class Game{
    constructor(){
        this.y = 10;
        this.vy = 0;
        this.gravity = 10;
        this.jump = false;
   }

   getState(){
       var gameStateRef = database.ref('gameState');
       gameStateRef.on("value", function(data){
           gameState = data.val();
       });
   }

   update(state){
       database.ref('/').update({
           gameState: state
       });
   }

   async start(){
       if(gameState === 0){
           player = new Player(0,0);
           var playerCountRef = await database.ref('playerCount').once("value");
           if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
              player.getPos();
           }
           form = new Form();
           form.display();
       }
    for(var i = 0; i < 4; i++){
      ath1 = new Player(200,this.y);
      aths.push(ath1);
      this.y += 5
    }

    frames = athCNates.frames;
      for(var i = 0; i < frames.length; i++){
       let pos = frames[i].position;
       let img = ath1Img.get(pos.x,pos.y,pos.w,pos.h);
     athletes.push(img);
    }

    var hpos = 440; 
     for(var i = 0; i < 4; i++){
        hurdles.push(new Hurdle(hpos));
        hpos += 230;
     } 
}

   play(){
     form.hide();
     Player.getPlayerInfo();
     Player.getCurrPlayerInfo(player.index);
     player.getPlayersAtEnd();

     if(allPlayers !== undefined){
         background(255,10,0);
         imageMode(CORNER);
         image(bgImg,1000,displayHeight/2-80,displayWidth*5,displayHeight);

        for(ath of aths){
            ath.display();
        }

        for(var h of hurdles){
            h.display();
        }

       if(aths[player.index-1].hits(hurdles[player.index-1])){
         console.log("gameOver!!");
         player.status = "dead";
         player.update();
       }

        if(keyIsDown(RIGHT_ARROW) && player.index !== null && currPlayer.Status == "live"){
            player.distance -= 30;
            player.update();
            
        }else if(keyIsDown(UP_ARROW)/* && player.index !== null*/ && currPlayer.Status == "live"){
            player.Ypos = currPlayer.YPos - 40;
            player.distance -= 50;
            this.jump = true;
            player.update();
        }
       
        if(player.distance < -7000){
            gameState = 2;
            player.rank += 1;
            Player.updatePlayersAtEnd(player.rank);
        }

        if(this.jump === true){
            
            if(currPlayer.YPos < currPlayer.PPos)
            {            
                player.Ypos = currPlayer.YPos + this.gravity;
                player.update();
            }else
            {
                this.jump = false;
            }
        }

        this.show();     
       
    }
    
   }
  
   show(){
    var index = 0;
    var x;
   
     for(var plr in allPlayers){
         index += 1;
         
         x = displayWidth - allPlayers[plr].distance;
         this.y = allPlayers[plr].YPos;
              
          aths[index-1].x = x;
          aths[index-1].y = this.y ;
          if(index === player.index){
          camera.position.x = aths[index-1].x;
          camera.position.y = displayHeight/1.1;
        } 
        
     }

   }
   end(){
    console.log(player.rank);
   }
}

 // for(ath of aths){
        //   for(var h of hurdles){
        //     h.display();
        //     //h.move();

        //     if(ath.hits(h)){
        //       console.log("gameOver!!");
        //       player.status = "dead";
        //       player.update();
        //     }
        //   }
        // }