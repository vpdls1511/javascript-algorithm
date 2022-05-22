let input = require("fs")
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
  .toString()
  .trim()
  .split("\n").map(v => parseInt(v));

function fibo(num){
  if( num === 1){
    return 1
  }else if(num < 1){
    return 0
  }else{
    return fibo(num-1) + fibo(num-2);
  }
}

console.log(fibo(input[0]))
