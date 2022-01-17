let input = require("fs")
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
  .toString()
  .trim()
  .split(" ");

let num = parseInt(input[0])
let DP = new Array(num+1).fill(0)

for(let idx = 2 ; idx <= num ; idx++){
  DP[idx] = DP[idx - 1] + 1
  if(idx%2 === 0) DP[idx] = Math.min(DP[idx] , DP[idx/2]+1)
  if(idx%3 === 0) DP[idx] = Math.min(DP[idx] , DP[idx/3]+1)
}
console.log(DP[num])