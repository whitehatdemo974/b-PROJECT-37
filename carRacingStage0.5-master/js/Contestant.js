class Contestant {
  constructor(){
    this.index=null;
    this.answer=0;
    this.name=null;
  }

  getCount(){
    var playerCountRef = database.ref('contestantCount');
    playerCountRef.on("value",function(data){
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    var playerIndex = "contestants/contestant" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      answer:this.answer
    });
  }
  static getPlayerInfo(){
    var playerInfo=database.ref('contestants');
    playerInfo.on("value",(data)=>{
      allPlayers=data.val();
    })
  }
}
