var speedOfRod1 = 0;
var speedOfRod2 = 0;
var rodLength = 150;
var rodWidth = 20;
var ballRadius = 20 / 2;
var positionOfRod1 = 500;
var positionOfRod2 = 500;
var topPositionOfBall = 310;
var leftPositionOfBall = 450;
var topSpeedOfBall = 10;
var leftSpeedOfBall = 10;
var score1 = 0;
var score2 = 0;


// starting the ball
function startBall(){
    topPositionOfBall = 310;
    leftPositionOfBall = 450;

    if(Math.random() < 0.5){
        var side = 1;

    }else{
        var side = -1;
    }

    
}




// moving left and right
document.addEventListener('keydown', function(e){
    if(e.keyCode == 68 || e.which == 68){
        speedOfRod1 = 10;
    }

    if(e.keyCode == 65 || e.which == 65){
        speedOfRod1 = -10;
    }

    if(e.keyCode == 37 || e.which == 37){
        speedOfRod2 = -10;
    }

    if(e.keyCode == 39 || e.which == 39){
        speedOfRod2 = 10;
    }
})


// stoping when we left(chhode) the key
document.addEventListener('keyup', function(e){
    if(e.keyCode == 68 || e.which == 68){
        speedOfRod1 = 0;
    }

    if(e.keyCode == 65 || e.which == 65){
        speedOfRod1 = 0;
    }

    if(e.keyCode == 37 || e.which == 37){
        speedOfRod2 = 0;
    }

    if(e.keyCode == 39 || e.which == 39){
        speedOfRod2 = 0;
    }
})

window.setInterval(function show(){
    positionOfRod1 += speedOfRod1;
    positionOfRod2 += speedOfRod2;


    leftPositionOfBall += leftSpeedOfBall;
    topPositionOfBall += topSpeedOfBall;

    // stop when we reach at the end 
    // for rod 1
    if(positionOfRod1 <= 1){
        positionOfRod1 = 1;
    }
    // for rod 2
    if(positionOfRod2 <= 1){
        positionOfRod2 = 1;
    }

    // not leaving from rightmost side
    //  for rod 1
    if(positionOfRod1 >= 0.95 * window.innerWidth - rodLength){
        positionOfRod1 = 0.95 * window.innerWidth - rodLength;
    }
    
    // for rod 2
    if(positionOfRod2 >= 0.95 * window.innerWidth - rodLength){
        positionOfRod2 = 0.95 * window.innerWidth - rodLength;
    }



    // position of Rod
    document.getElementById('rod1').style.left = positionOfRod1 + 'px';
    document.getElementById('rod2').style.left = positionOfRod2 + 'px';



    // change the direction of ball on colliding
    if(leftPositionOfBall <= 5 || leftPositionOfBall >= 0.9 * window.innerWidth - ballRadius){
        leftSpeedOfBall = -leftSpeedOfBall;
    }

    if(topPositionOfBall <= rodWidth){
        if(leftPositionOfBall >= positionOfRod2 && leftPositionOfBall <= positionOfRod2 + rodLength){
            topSpeedOfBall = -topSpeedOfBall;
        }else{
            startBall();
            score2++;
        }
    }

    if(topPositionOfBall >= 0.9 * window.innerHeight - ballRadius - rodWidth){
        if(leftPositionOfBall >= positionOfRod1 && leftPositionOfBall <= positionOfRod1 + rodLength){
            topSpeedOfBall = -topSpeedOfBall;
        }else{
            startBall();
            score1++;
        }
    }

    // position of ball when we start the game
    document.getElementById('ball').style.top = topPositionOfBall + 'px';
    document.getElementById('ball').style.left = leftPositionOfBall + 'px';

    // update the score
    document.getElementById('score1').innerHTML = score1;
    document.getElementById('score2').innerHTML = score2;


}, 2000/60);

