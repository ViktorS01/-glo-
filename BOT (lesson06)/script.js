'use strict';

const startBot = function (){
    let randomNumber = Math.floor(Math.random() * Math.floor(100)) + 1;
    let attempts = 10;
    let flag = 0;

    console.log(randomNumber);

    let whatIsNum = function (numberUser){

        const gameOver = function(){
            flag = confirm(("Game over! Want to train again?"));
            if (flag == 1){
                startBot();
            }
        };

        if (numberUser == null){
            alert("Game over!");
        }

        else if (isNaN(numberUser)){
            whatIsNum (prompt("Give a number."));
        }

        else if (numberUser > randomNumber){
            if (attempts <= 1){
                gameOver();
            }
            attempts --;
            whatIsNum (prompt(`Enigmatic number less, attempts left ... ${attempts}`, "Try again."));
        }
        else if (numberUser < randomNumber){
            if (attempts <= 1){
                gameOver();
            }
            attempts--;
            whatIsNum (prompt(`Enigmatic number more, attempts left ... ${attempts}`, "Try again."));
        }
        else if (numberUser == randomNumber){
            flag = confirm(("Good! You win! Want to try again?"));
            if (flag == 1){
                startBot();
            }
        }
    };

    return whatIsNum (prompt("Guess a number from 1 to 100"));
};

startBot ();