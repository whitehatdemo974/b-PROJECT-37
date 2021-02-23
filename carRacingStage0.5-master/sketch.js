var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var quiz, question, contestant;
var database;
var allPlayers



function setup(){
  canvas = createCanvas(800,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  if (playerCount==4) {
    game.update(1);
  }
  if (gameState==1) {
    clear();
    game.play();
  }
}
