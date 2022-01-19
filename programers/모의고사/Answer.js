function solution(answers) {
    const answer = [];
    const people = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    const score = [0,0,0]
    people.forEach( (pAnswer, pIdx) => {
        for(let idx = 0; idx < answers.length; idx++) {
            if(pAnswer[idx % pAnswer.length] === answers[idx]){
                score[pIdx] += 1;
            }
        }
    })
    const max = Math.max(...score)
    for(let index = 0; index < score.length; index++){
        if(score[index] === max) {
            answer.push(index+1)
        };
    }
    return answer;
}
solution([1,2,3,4,5])
// solution([1,3,2,4,2])