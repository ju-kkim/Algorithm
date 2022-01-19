// 크레인 인형뽑기 게임
function solution(board, moves) {
    var answer = 0;
    const resultStack = []
    moves.forEach(move => {
        for(let index =0; index < board.length; index++){
            
            if(board[index][move-1] === 0 ){
                continue
            }
            if(board[index][move-1] > 0) {
                if(board[index][move-1]  === resultStack[resultStack.length - 1]){
                    answer += 2;
                    resultStack.pop();
                }else {
                    resultStack.push(board[index][move-1])
                }
                board[index][move-1] = 0
                break
                
            }
        }
    });
    return answer;
}


const boardArray = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
];
const movesArray = [1,5,3,5,1,2,1,4]	

console.log(solution(boardArray, movesArray))
