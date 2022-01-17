let input = require("fs")
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
  .toString()
  .trim()
  .split("\n").map(v => parseInt(v));

let arr = new Array( input[0] , 2 )

console.log(arr)