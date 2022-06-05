const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/* Ejercicio2
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
La frase y la palabra deden ser parametros de una función

run:
nodemon ej2.js
*/

const phrase = `Hola como Hola estas ? Hola como Hola Hola`;
const word = `como`;

const coincidence = (phrase, word) => {
    let cnt = 0;
    let same = true;
    
    const phraseToArray = phrase.split(` `);
    phraseToArray.forEach(
        phrase => {
            for (let i = 0; i <= phrase.length; i++) {
                if (word[i] == phrase[i] && word.length == phrase.length) {
                    (i == word.length && same ? cnt++ : null);
                } else {
                    same = false;
                }
            }
            same = true;
        }
    );
    return cnt;
};

console.log(`La palabra ${word} aparece ${coincidence(phrase, word)} veces en la frase ${phrase}`);

