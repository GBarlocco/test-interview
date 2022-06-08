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
Dados dos arrays, devolver array con solo los elementos coumunes entre ambos.

Examples
elementosComunes([4,5,6,7],[7,8,9,7,5]);

run:
nodemon Ej9.js
*/

const elementosComunes = (arr1, arr2) => {
    let arrOut = [];

    for (num1 of arr1) {
        for (num2 of arr2) {
            (num1 == num2 && !arrOut.includes(num1) ? arrOut.push(num1) : null);
        }
    }
    return arrOut;
}

console.log(elementosComunes([4, 5, 6, 7, 7], [7, 8, 9, 7, 5]));