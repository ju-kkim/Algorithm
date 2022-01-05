var fs = require('fs');
var input = fs.readFileSync('Baekjoon/1000_add_integer/test.txt').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);