class Player{
    constructor(x,y){
        this.index = null;
        this.distance = 0;
        this.name = null;

        this.Ypos = 0;
        this.Ppos = 0;
        this.status = "live";

        this.r = y
        this.x = x;
        this.y = height-this.r;
        this.vy = 0;
        this.gravity = 5;

        this.rank = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) =>{
            playerCount = data.val()
        })
    }

    getPos(){
        var playerPosRef = database.ref('CurrPos');
        playerPosRef.on("value", (data) =>{
            CurrentPos = data.val()
           })
    }
    updateCount(count){
      database.ref('/').update({
          playerCount: count
      })
    }
    updatePos(cpos){
        database.ref('/').update({
            CurrPos: cpos
        })
      }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            YPos: this.Ypos,
            PPos: this.Ppos,
            Status: this.status
         })
    }

   static getCurrPlayerInfo(PIndex){
        var playerIndex = "players/player" + PIndex;
        var playerInfoRef = database.ref(playerIndex);
        playerInfoRef.on("value",(data) =>{
            currPlayer = data.val();
        })
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data) =>{
            allPlayers = data.val();
        })
    }

    deletePlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.remove();
    }
     deleteCurrPlayerInfo(PIndex){
        var playerIndex = "players/player" + PIndex;
        var playerInfoRef = database.ref(playerIndex);
        playerInfoRef.remove();
    }

    getPlayersAtEnd(){
        var playersAtEndRef = database.ref('playersAtEnd');
        playersAtEndRef.on("value", (data)=>{
            this.rank = data.val();
        })
     }

    static updatePlayersAtEnd(rank){
         database.ref('/').update({
             playersAtEnd: rank
         })
     }

    jump(){
        if(this.y === height-this.r){
            this.vy = -30;
        } 
      }
  
      move(){
          this.y += this.vy;
          this.vy += this.gravity;
       }

       hits(hurdles){
        return collideRectRect(this.x,this.y,150,150,hurdles.x,hurdles.y,50,50);
    }
  
      display(){
          image(athletes[frameCount%athletes.length],this.x,this.y,200,290);
      }
}