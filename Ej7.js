const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/* Ejercicio7
    Dado dos números, devolver cuantos números impares hay entre ellos.
    
run:
nodemon ej7.js
*/

const impar = (num1, num2) => {
    let cnt = 0;
    for (let i = num1; i < num2; i++) {(i % 2 != 0 ? cnt++ : null);}
    return cnt;
}

console.log(impar(1, 100));