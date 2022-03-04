function solution(a, b) {
    const answer = a.map((num, idx) => num * b[idx]).reduce((prev, cur) => prev + cur);
    return answer;
}
