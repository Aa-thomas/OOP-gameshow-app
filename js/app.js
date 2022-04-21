/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = null;

/*
 * 'Start game' button event listener
 */
const startGameButton = document.getElementById('btn__reset');
startGameButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

/** 
 * Onscreen keyboard button event listeners
 */
const onScreenButtons = document.querySelectorAll('button.key')
onScreenButtons.forEach( button => button.addEventListener('click', (e) => {
    game.handleInteraction(e.target);
} ))

/** 
 * Physical keyboard button event listeners
 */
document.addEventListener( 'keyup', (e) => {
    let keyBoardButtons =  Array.from(onScreenButtons)
    keyBoardButtons.filter( button => button.textContent === e.key )
        .forEach( button => button.click() );
})


