let input = require("fs")
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
  .toString()
  .trim()
  .split("\n").map(v => parseInt(v));

const money = (num) => {
  let a = 0;
  let b = 0;
  a = parseInt(parseInt(num) / 5);
  b = num % 5;
  if(a % 5 !== 0){
    while(b % 2 !== 0){
      a -= 1;
      b += 5;
    }
    b = b/2;
  }
  return a+b;
}

console.log(money(input[0]))