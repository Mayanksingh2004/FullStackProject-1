var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keydown(function(){
    if(!started){
        nextSequence();
        started = true;
        $("#level-title").text("Level "+level);
    }
});

$(".btn").on("click",function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAwnser(userClickedPattern.length-1);
});

function nextSequence(){
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    ++level;
    $("#level-title").text("Level "+level);
}

function playSound(color){
    new Audio("sounds/"+color+".mp3").play();
}

function animatePress(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed"); 
    },150);
}

function checkAwnser(currentLevel){
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        console.log("Correct");
        if(gamePattern.length == userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }else{
        console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    started = false;
    gamePattern = [];
}