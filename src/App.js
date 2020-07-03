import React, {useState} from 'react';
import './App.css';

function App() {
    const [vies, setVie] = useState(5)
    const allWords = ["HEROS", "POUVOIR", "MUTANT", "CATASTROPHE", "COSMIQUE", "ENTITE", "XENOMORPHE"]
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let oneWord = Math.floor(Math.random() * allWords.length)
    oneWord = allWords[oneWord]
    const word = oneWord.split('')

    function writeStars(vies) {
        const stars = []
        for (let i = 0; i < vies; i++) {
            stars.push("*")
        }
        return stars
    }

    function less() {

    }

    function createHiddenWords() {
        const hiddenWord = []
        for (let i = 0; i < word.length; i++) {
            hiddenWord.push(" _ ")
        }
        return hiddenWord
    }

    function createButton() {
        const button = []
        for (let i = 0; i < alphabet.length; i++) {
            button.push(<button className="letter" value={alphabet[i]} onClick={disableButton}>{alphabet[i]}</button>)
        }
        return button
    }

    function disableButton(e){
        const button = e.target
        button.disabled=true;
    }

    

    return (
        <div className="App">
            <header className="App-header">
                <p className="vie">Vies : {writeStars(5)}</p>
                <div className="word">
                    {createHiddenWords()}
                </div>
                <div className="letter">
                    {createButton()}
                </div>
            </header>
        </div>
    );
}

export default App;
