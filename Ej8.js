const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/* Ejercicio8
    Dado un número entero, invviertelo y devuleve de nuevo el entero.

    Ejemplo:    
        invertirNumero(67) --> 76
    
run:
nodemon ej8.js
*/
