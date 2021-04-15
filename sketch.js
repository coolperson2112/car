var hypnoticBall, database;
var position;
var gamestate = 0
var player,form,game,playerCount

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  
}

function draw(){
  background("white");
  
   
  
}


function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
