/*
https://www.acmicpc.net/problem/1076
*/

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n');

const table = {
    'black' : ['0', 1],
    'brown' : ['1', 10],
    'red' : ['2', 100],
    'orange' : ['3', 1000],
    'yellow' : ['4', 10000],
    'green' : ['5', 100000],
    'blue' : ['6', 1000000],
    'violet' : ['7', 10000000],
    'grey' : ['8', 100000000],
    'white' : ['9', 1000000000]
}

const info = input.map((color, idx, arr) => {
    if(idx === arr.length -1) {
        return table[color][1];
    }
    return table[color][0]
})

console.log((info[0] + info[1]) * info[2])