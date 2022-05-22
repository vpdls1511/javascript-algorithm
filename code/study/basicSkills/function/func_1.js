const solution = (arr) => {
    let answer = 0;
    for(let i of arr) answer += i
    return answer
}

const solution2 = (arr) => {
    let answer = [...new Set(arr)]
    return answer.sort()
}

const a = [ 1 , 10 , 20 , 3 , 10 ];
const b = [ 1 , 14 , 54 , 1 , 4 , 54 , 1 ];

const a2 = [ 1 , 2 , 2 , 4 , 5 , 2 , 6 ];
const b2 = [ 1 , 2 , 3 , 6 , 2 , 7 , 4 ];

console.log(solution(a))
console.log(solution(b))
console.log(solution2(a2))
console.log(solution2(b2))

