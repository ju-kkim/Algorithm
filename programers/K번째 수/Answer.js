function solution(array, commands) {
    const answer = [];
    commands.forEach(element => {
        const i = element[0] - 1;
        const j = element[1];
        const k = element[2] - 1;

        const target = array.slice(i, j).sort((a,b)=>a-b);
        answer.push(target[k])
    });
    console.log(answer)
    return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4] ;
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

solution(array, commands)