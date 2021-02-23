class Quiz {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCount=await database.ref('contestantCount').once("value");
      if (contestantCount.exists()){
      contestantCount=contestantCount.val();
      contestant.getCount();
      }
      
      question = new Question()
      question.display();
    }
  }
  
}
