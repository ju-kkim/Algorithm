/*
https://www.acmicpc.net/problem/1076
*/

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n');

const table = {
    'black' : 0,
    'brown' : 1,
    'red' : 2,
    'orange' : 3,
    'yellow' : 4,
    'green' : 5,
    'blue' : 6,
    'violet' : 7,
    'grey' : 8,
    'white' : 9
}
const valueA = table[input[0]]
const valueB = table[input[1]]
const multiply = table[input[2]]

console.log(((valueA * 10) + valueB) * (10 ** multiply))
