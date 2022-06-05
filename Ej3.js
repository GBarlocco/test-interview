const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/* Ejercicio3
Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar métodos propios del lenguaje,
solo estructura de control.

run:
nodemon ej3.js
*/

const strInput = `gaston`;
let strReverse = ``;

for (let i = strInput.length - 1; i >= 0; i--) {
    strReverse += strInput[i];
};
console.log(`La palabra ${strInput} al reverso es: ${strReverse}`);

