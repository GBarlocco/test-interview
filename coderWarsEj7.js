const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

Example:
let  string = "The quick brown fox jumps over the lazy dog." --> true

let  string = "This is not a pangram." --> false

run:
nodemon coderWarsEj7.js
*/

const isPangram = (string) => {
    let alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let stringUppercase = string.toUpperCase();
    let pangram = false;
    let cnt = 0;

    for (let letterAlphabet of alphabet) {
        let isInAlphabet = false;

        for (let i = 0; i <= stringUppercase.length - 1 && !isInAlphabet; i++) {
            let letterInput = stringUppercase[i];

            if (letterInput >= String.fromCharCode(65) && letterInput <= String.fromCharCode(90)) {
                if (letterInput == letterAlphabet) {
                    cnt++;
                    isInAlphabet = true;
                }
            }
        }
    }
    (cnt == 26 ? pangram = true : pangram = false);
    return pangram;
}

let string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string));
