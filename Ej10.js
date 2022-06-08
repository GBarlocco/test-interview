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
Dado un número, mostrar una escalera con escalones de "[-]" usando el número para los niveles de la escalera

Examples
escalera(4)
[-]
[-][-]
[-][-][-]
[-][-][-][-]

run:
nodemon udemy10.js
*/

const escalera = (num) => {
    let patron = `[-]`;

    for (let i = 0; i <= num; i++) {
        let out = ``;
        for (let j = 0; j < i; j++) {
            out += patron;
        }
        console.log(out);
    }
}

(escalera(10));