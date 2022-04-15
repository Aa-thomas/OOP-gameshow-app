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
        
        this.activePhrase = this.getRandomPhrase();
        const newPhrase = new Phrase(this.activePhrase.phrase);
        newPhrase.addPhraseToDisplay();
    };
}