// Roman to Integer

/*
Given a roman numeral, convert it to an integer.

ex)
Input: s = "III"
Output: 3

Input: s = "IV"
Output: 4

Input: s = "IX"
Output: 9

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

var romanToInt = function(s) {
    const characters = {
        I : 1,
        V :	5,
        X :	10,
        L :	50,
        C :	100,
        D :	500,
        M :	1000
    }

    const romaArray = s.split('');
    const numArray = romaArray.map(romaNum => {
        return characters[romaNum]
    })

    let finalNum = []
    for(let i = 0; i < numArray.length; i++){
        const current = numArray[i];
        const next = numArray[i +1]
        if(current < next){
            finalNum.push(next - current)
            i += 1;
            continue
        }
        finalNum.push(current);
    }

    const reducer = (prev, cur) => prev + cur;
    const result = finalNum.reduce(reducer)
    return result
};
