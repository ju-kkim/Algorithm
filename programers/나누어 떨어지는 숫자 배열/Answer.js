// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    var answer = [];
    
    arr.forEach((element) => {
        if(element % divisor === 0 ) {
            answer.push(element)
        }
    })
    
    answer.length === 0 ? answer.push(-1) : answer.sort((a,b) => a - b)
    
    return answer;
}
