let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')


function solution(number){
    let num = number
    let cnt = 99
    if(num < 100) return num;
    if(num >= 1000) num = 999;

    for(let i = 100 ; i <= num ; i++){
        const x = parseInt(i / 100)
        const y = parseInt((i / 10) % 10)
        const z = parseInt(i % 10)
        if(x-y === y-z) cnt++
    }

    return cnt
}

console.log(solution(parseInt(input[0])))