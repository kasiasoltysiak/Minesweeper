const scoreCounter = document.querySelector('.score-counter');
const grid = document.querySelector ('.grid');
const endGameScreen = document.querySelector ('.end-game-screen');
const endGameText = document.querySelector ('.end-game-text');
const playAgainButton = document.querySelector ('.play-again');

const totalCells = 100;
const totalBombs = 10;
const maxScore = totalCells - totalBombs;
const bombsList = [];

let score = 0;

// Generate a list of unique bombs
while (bombsList.length < totalBombs) {
   // Generate a random number
   const randomNumber = Math.floor(Math.random() * totalCells) + 1;
 
   // Add the number to the list if not already included
   if (!bombsList.includes(randomNumber)) {
     bombsList.push(randomNumber);
   }
 }

function updateScore () {
   score++;
   scoreCounter.innerText = score.toString().padStart( 5, '0');

   if (score === maxScore) {
      endGame(true);
   }
}


for (let i = 1; i <= 100; i++) {
 const cell = document.createElement ('div');
 cell.classList.add ('cell');

 
   cell.addEventListener('click', function () {

         if (bombsList.includes(i)) {
            cell.classList.add('cell-bomb');
            endGame(false);
         }

         else {
            cell.classList.add('cell-clicked');
            updateScore();
         }
      
   });
   
 
 grid.appendChild(cell);
}


function endGame(win) {
   revealAllBombs();
   if (win) {
      endGameText.innerHTML = `YOU</br>WON`;
      endGameScreen.classList.add('win');
   }  
   endGameScreen.classList.remove(`hidden`);
   
}

playAgainButton.addEventListener('click', function (){
   window.location.reload();
}) 

function revealAllBombs() {
   const cells = document.querySelectorAll('.cell'); 
   
   for (let i = 0; i <= 99; i++){
      if (bombsList.includes(i)) {
         const cell =  cells[i];
         cell.classList.add('cell-bomb');
      }  
   }
}