const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/* Ejercicio4
Dibujar un cuadrado hueco con asteriscos

Ejemplo: cuadrado(4)
****
*  *
*  *
****

Ejemplo: cuadrado(5)
*****
*   *
*   *
*   *
*****

Ejemplo: cuadrado(3)
***
* *
***

run:
nodemon ej4.js
*/

const cuadrado = (num) => {
    let arr = [`a`,`b`,`a`,`b`];
    console.log(arr.length-2);

};


cuadrado(2);