const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/* coderWarsEj:
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
[5, 3, 2, 8, 1, 4] => [1, 3, 2, 8, 5, 4]
[5, 3, 1, 8, 0] => [1, 3, 5, 8, 0]

run:
nodemon coderWarsEj.js
*/

const sortArray = (arr) => {
    let arrOdd = [];
    let arrOut = [];
    let cnt = 0;

    const getOdd = () => {
        let numOdd = arrOdd[cnt];
        console.log(numOdd);
        cnt++;
        return numOdd;
    }

    for (number of arr) {
        (number % 2 != 0 ? arrOdd.push(number) : null);
    }
    arrOdd.sort();

    for (number of arr) {
        (number % 2 == 0 ? arrOut.push(number) : arrOut.push(getOdd()));
    }

    return arrOut;
}


console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));