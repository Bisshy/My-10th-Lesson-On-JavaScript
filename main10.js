// //Dice Roll Game;

// let playRoll = confirm("Will you like to roll a dice");

// if (playRoll){
//     //play
//     let playerRollNumber = confirm("Please, click ok to roll the dice.")

//     if (playerRollNumber){
//             let playerOne = playerRollNumber;
//             playerOne = Math.floor(Math.random()*6+1);
//             let computerRollNumber = Math.floor(Math.random()*6 +1)

//             let result = playerOne === computerRollNumber ?  ` player: ${playerOne}\n computer: ${computerRollNumber}\nTie game` : playerOne > computerRollNumber ? `player: ${playerOne}\nComputer: ${computerRollNumber}\nPlayer wins`: `player: ${playerOne}\nComputer: ${computerRollNumber}\n you were steam rolled!`

//             alert(result);

//             let rollAgain = confirm("Do you want to roll again")
//             rollAgain ? location.reload(): alert("ok, thanks for rolling")
       
//         }else{
//             alert("I, guess you changed your mind, maybe next time")
//         }

//     }else{
//         alert("Maybe next time")
//     }
  