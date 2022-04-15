/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const phraseToDisplay = this.phrase.split('');
        
        phraseToDisplay.forEach( letter => {
            let letterPlaceHolder = `<li class="hide letter ${letter}">${letter}</li>`;
            if (letter === ' ') {
                letterPlaceHolder = `<li class="space"> </li>`;   
            }
            document.querySelector('ul').insertAdjacentHTML('beforeend', letterPlaceHolder);
        });
    }

    checkLetter() {

    }

    showMatchedLetter() {

    }
}


