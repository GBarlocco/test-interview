const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/* Ejercicio6
    ¿Cuánto es el x % de y número?

    Ejemplo:
    tantoPorCiento (20,100) --> 20
    tantoPorCiento (43,897) --> 385.71

run:
nodemon ej6.js
*/
const tantoPorCiento = (porcentaje, numero) => {
    return `El ${porcentaje} % de ${numero} es: ${porcentaje/100 * numero}`;

}

console.log(tantoPorCiento(43,897));