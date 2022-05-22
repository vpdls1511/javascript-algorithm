let input = require("fs")
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
  .toString()
  .trim()
  .split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

if(c - b <= 0){
  console.log(-1)
} else {
  console.log( Math.floor(a/(c-b)) + 1 )
}