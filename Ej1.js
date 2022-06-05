const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/* Ejercicio1
Dada una cadena de texto, comprobar si es un palindromo o no. Los palíndromos son palabras que se leen igual aun estando invertidas.
Ejemplo: ana, bob, otto, allivessevilla.

run:
nodemon ej1.js
*/

const strInput = `ana`;

const strInputArr = strInput.split(``);

const strInputArrR = strInput.split(``);
const strInputArrReverse = strInputArrR.reverse();

let isPalindromo = true;

for (let i = 0; i <= strInputArr.length - 1; i++) {
    if (strInputArr[i] != strInputArrReverse[i]) {
        isPalindromo = false;
    }
};
console.log(`¿La palabra ${strInput} es palindromo?: ${isPalindromo}`);