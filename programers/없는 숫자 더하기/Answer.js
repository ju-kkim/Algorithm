function solution(numbers) {
    const numbersSum = numbers.reduce((prev, cur) => prev + cur);
    const answer = 45 - numbersSum;
    return answer;
}
