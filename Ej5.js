const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/* Ejercicio5
    dado un número, devolver su tabla de multiplicar completa

run:
nodemon ej5.js
*/

const tablaMult = (num) => {
    for (let i = 1; i <= 10; i++) { console.log(`${i} * ${num} = ${i * num}`) };
}
tablaMult(3);