const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/*
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, 
and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, 
since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. 
Luckily, Alice and Bob are able to encode the motif as a number. 
Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].


deleteNth([20,37,20,21], 1), [20,37,21]
deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2]

run:
nodemon coderWarsEj4.js
*/

const deleteNth = (arr, n) => {
    let max = Number.MIN_VALUE;
    let arrCount = [];
    let arrOut = [];

    //Calculo el màximo
    arr.forEach(
        number => {
            (number > max ? max = number : null);
        }
    )
    //Creo un array hasta el número màs grande, lo cargo con 0. Lo utilizaré como contador general de cada valor.
    for (let i = 0; i <= max; i++) { arrCount[i] = 0; }

    //En base al número "n" cargo el array creado anteriormente con la cantidad de veces que puedo imprimir.
    for (let i = 0; i <= arr.length - 1; i++) {(arrCount[arr[i]] < n ? arrCount[arr[i]]++ : null)}

    arr.forEach(number => { (arrCount[number] > n ? arrCount[number] = n : null); });

    arr.forEach(
        number => {
            if (arrCount[number] > 0) {
                arrOut.push(number);
                arrCount[number]--;
            }
        }
    );
    return arrOut;
}

console.log(deleteNth([20, 37, 20, 21], 1));