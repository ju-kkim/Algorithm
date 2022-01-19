// 두 개 뽑아서 더하기
function solution(numbers) {
    var answer = [];    
    var numArray = [];
    numbers.forEach((item,index,array) => {
        for(let otherIdx = index+1; otherIdx < array.length; otherIdx++){
            numArray.push(item+array[otherIdx])
        }
    })
    
    answer = numArray.filter((item, index) => {
        return numArray.indexOf(item) === index;
    }).sort((a,b) => a - b)
    
    return answer;
}
