const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/* coderWarsEj2:
Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

run:
nodemon coderWarsEj2.js
*/

const addBinary = (a, b) => {
    let result = a+b;
    return result.toString(2);
}

console.log(addBinary(1,4));
