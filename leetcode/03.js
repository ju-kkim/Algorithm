// Palindrome Number

/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.
For example, 121 is palindrome while 123 is not.
*/

var isPalindrome = function(x) {
    if(Math.sign(x) === -1) {
        return false
    }
    const reverseNum =  parseInt(x.toString().split('').reverse().join(''))
    return x === reverseNum ? true : false
}; 