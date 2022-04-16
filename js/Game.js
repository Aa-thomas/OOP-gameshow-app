/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0,
        this.phrases = [
            { phrase: 'Life is like a box of chocolates' },
            { phrase: 'May the force be with you' },
            { phrase: 'What goes around comes around' },
            { phrase: 'Hasta la vista baby' },
            { phrase: 'Practice makes perfect' }
        ]
        this.activePhrase = null;

    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const startScreen = document.getElementById('overlay');
        startScreen.style.display = 'none';
        
        let randomPhrase = this.getRandomPhrase().phrase
        this.activePhrase = new Phrase(randomPhrase);
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('li.hide');
        return hiddenLetters.length > 0 ? false : true ;
    }


    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        if  (this.activePhrase.checkLetter() === false ) {
            this.missed++
            document.querySelector('img[src="images/liveHeart.png"').setAttribute('src', 'images/lostHeart.png');
            if (this.missed > 4) {
                this.gameOver();
            }
        }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const startScreen = document.getElementById('overlay');
        const gameOverMessage = document.getElementById('game-over-message');
        startScreen.style.display = 'block';
        gameWon = this.checkForWin();

        if ( gameWon ) {
            startScreen.className = 'win';
            gameOverMessage.textContent = 'You Win!';
        } else {
            startScreen.className = 'lose';
            gameOverMessage.textContent = 'You Lose!';
        }    
    }
    

}