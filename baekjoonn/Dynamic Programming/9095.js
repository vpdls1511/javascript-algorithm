let input = require("fs")
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
  .toString()
  .trim()
  .split("\n").map(v => parseInt(v));

const arr = [ 0, 1, 2, 4 ]

for(let i = 1; i < input.length ; i++){
  getCnt(input[i])
  console.log(arr[input[i]])
}

function getCnt(num){
  for(let i = arr.length ; i <= num ; i++){
    arr.push( arr[i - 1] + arr[i - 2] + arr[i - 3] )
  }
  return num
}
