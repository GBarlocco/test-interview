const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/* hackerrank2:
Task
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example:
arr = [1,3,5,7,9]
min = 1+3+5+7 = 16
max = 3+5+7+9 =24

out = 16 24



run:
nodemon hackerrank2.js
*/

const miniMaxSum = (arr) => {
    const base = arr[1] + arr[2] + arr[3];
    const min = (arr[0] + base < base + arr[4] ? arr[0] + base : base + arr[4]);
    const max = (arr[0] + base > base + arr[4] ? arr[0] + base : base + arr[4]);
    console.log(`${min} ${max}`);
}

miniMaxSum([7, 69, 2, 221, 8974]);