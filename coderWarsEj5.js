const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Exameples:
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

run:
nodemon coderWarsEj5.js
*/

const order = (words) => {
    let wordsInput = words.split(` `);
    let outArr = [];
    let outStr = ``;

    wordsInput.forEach(
        caracter => {
            for (let i = 0; i <= caracter.length - 1; i++) {
                if (!isNaN(caracter[i])) {
                    outArr[caracter[i]] = caracter;
                }
            }
        }
    )

    for (let i = 1; i <= outArr.length - 1; i++) {
        if (i < outArr.length - 1) {
            outStr += outArr[i] + ` `;
        } else {
            outStr += outArr[i];
        }
    }

    return outStr;
};

console.log(order(`4of Fo1r pe6ople g3ood th5e the2`));