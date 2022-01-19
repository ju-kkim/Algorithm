function solution(s) {
    let answer = '';
    let middleIndex;

    if(s.length % 2 == 0){
        const middleIndex2 = s.length / 2;
        middleIndex = (s.length / 2) - 1
        answer = s[middleIndex]+s[middleIndex2];
    }else {
        middleIndex = Math.round((s.length / 2) - 1) ;

        answer = s[middleIndex]
    }
    return answer;
}