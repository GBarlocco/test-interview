const express = require(`express`);
const { Router } = express;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log(`Servidor HHTP escuchando puerto ${PORT}`));

server.on(`error`, err => console.log(`error en el servidor ${err}`));

/* coderWarsEj1:
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any 
elements with the same value next to each other and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

run:
nodemon coderWarsEj1.js
*/



const uniqueInOrder = (iterable) => {
    let arrOut = [];

    for (let i = 0; i <= iterable.length - 1; i++) {
        (i == 0 ? arrOut.push(iterable[i]): null);
        (i > 0 ? (iterable[i - 1] != iterable[i] ? arrOut.push(iterable[i]): null): null);
    }
    return arrOut;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));

