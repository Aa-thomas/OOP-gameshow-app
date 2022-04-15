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

    /**
    * Checks if passed letter is in phrase
    * @param (string) guessedletter - Letter to check
    */
    checkLetter(guessedLetter) {
        const phraseToCheck = this.phrase.split('');
        let test = phraseToCheck.filter(letter => letter === guessedLetter);
        if ( test.length > 0 ) {
            return true 
        } else {
            return false
        }
    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const correctLetterClassName = `li[class="hide letter ${letter}"]`
        const matchedLetters = document.querySelectorAll(correctLetterClassName);
        matchedLetters.forEach(element => { 
            element.className = `show letter ${letter}`
        });
    }

}


