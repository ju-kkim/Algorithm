//14. Longest Common Prefix

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

ex)
Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
*/

var longestCommonPrefix = function(strs) {
    const min = Math.min(...strs.map(ele => ele.length));
    let prefix = strs[0].slice(0, min);
    
    strs.forEach(ele => {
        for(let idx = 0; idx < min; idx++) {
            if(prefix[idx] !== ele[idx]) {
                prefix = prefix.slice(0, idx);
                break
            }
        }
    })
    return prefix
};