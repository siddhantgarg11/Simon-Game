var start = false;
var color = ["green", "red", "yellow", "blue"];
var ar=[]
var i=0,level=0;
$(document).keydown(function() {
  if (!start) {
    ar=[]
    start = true;
    nextSequence();
  }
})


$(".btn").click(function() {
  var buttonId = $(this).attr("id"); // or (this.id)
  $("#"+buttonId).addClass("pressed");

  setTimeout(function(){
    $("#"+buttonId).removeClass("pressed");
  },100);
  if (start == true) {
    var audio = new Audio("sounds/" + buttonId + ".mp3");
    audio.play();
    if(buttonId==color[ar[i]]){
      console.log("IN",ar,level);
      if(i+1===level){
        console.log("check");
        i=0
        setTimeout(function(){
          nextSequence();
        },1000);
      }
      else{
        i+=1;
      }
    }
    else{
      gameOver();
    }
  }
  else{
    gameOver();
  }

})



function nextSequence() {
  num = Math.floor(Math.random() * 4);
  level+=1;
  $("#level-title").text("Level "+String(level));
  var audio = new Audio("sounds/" + color[num] + ".mp3");
  audio.play();
  $("#"+color[num]).fadeIn(100).fadeOut(100).fadeIn(100);
  ar.push(num);
}

function gameOver(){
  start=false;
  level=0;
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
  $("#level-title").text("Game Over, Press Any Key to Restart");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },100);
}
