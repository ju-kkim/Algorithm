// 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
    var answer = [];
    const ranking = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6
    }
    const lostNum = lottos.filter((num) => {
        return num === 0
    })
    const lostCount = lostNum.length;
    
    const sameNum = lottos.filter((lottoNum)=> {
        let result;    
        win_nums.forEach((winNum) => {
            if(lottoNum === winNum) {
                result = lottoNum
            } 
        })
        return result
    })
    const min = sameNum.length;
    const max = lostCount + min;
    answer.push(ranking[max], ranking[min])
    return answer;
}


const lottos = [45, 4, 35, 20, 3, 9]
const win_nums = [20, 9, 3, 45, 4, 35]

console.log(solution(lottos, win_nums))

