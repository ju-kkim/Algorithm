function solution(s) {
    let answer = '';
    const wordArr = s.split(' ');

    wordArr.forEach(word => {
        for(let idx = 0; idx < word.length; idx++) {
            if(idx % 2 === 0) {
                answer += word[idx].toUpperCase()
            }else {
                answer += word[idx].toLowerCase();
            }
        }
        answer += ' '
    });
    
    return answer.substring(0, answer.length - 1);
}