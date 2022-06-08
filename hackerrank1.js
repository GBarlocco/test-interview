const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/* hackerrank1:
Task
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
though answers with absolute error of up to  are acceptable.


Example:
arr = [1,1,0,-1,-1]

out = 
0,400000
0,400000
0,200000


run:
nodemon hackerrank1.js
*/

const plusMinus = (arr) => {
    // Write your code here
    const totalData = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let num of arr) {
        (num > 0 ? positive++ : null);
        (num < 0 ? negative++ : null);
        (num == 0 ? zero++ : null);
    }

    console.log(`${(positive / totalData).toFixed(6)}`);
    console.log(`${(negative / totalData).toFixed(6)}`);
    console.log(`${(zero / totalData).toFixed(6)}`);
}


plusMinus([1, 1, 0, -1, -1]);