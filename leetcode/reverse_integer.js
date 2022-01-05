//  Reverse Integer

/*
Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

ex)
Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21

Input: x = 0
Output: 0
*/

var reverse = function(x) {
    const numArray = x.toString().split('').reverse().join('')
    const result = parseInt(numArray) * Math.sign(x)
    if(Math.pow(-2,31) <= result && result <= Math.pow(2,31) - 1) {
        return result
    }
    return 0
};
