const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/* udemy:
Task
Dado un número entero, invertirlo y devolver el numero entero.

Examples

run:
nodemon Ej8.js
*/

const invertir = (num) => {
    let numInv = num + ``;
    numInv = numInv[1] + numInv[0];
    return Number(numInv);
}

console.log(invertir(12));