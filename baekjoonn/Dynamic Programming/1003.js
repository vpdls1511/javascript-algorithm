let input = require("fs")
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
  .toString()
  .trim()
  .split("\n").map(v => parseInt(v));

let zeroCnt = [1 , 0 , 1]; // 0 나온 횟수
let oneCnt = [0 , 1 , 1] // 1 나온 횟수

for(let i = 3 ; i <= 40 ; i++){
  zeroCnt.push( zeroCnt[i-1] + zeroCnt[i-2] )
  oneCnt.push( oneCnt[i-1] + oneCnt[i-2] )
}

for (let i = 1 ; i < input.length ; i++){
  console.log(`${zeroCnt[input[i]]} ${oneCnt[input[i]]}`)
}