let input = require("fs")
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
  .toString()
  .trim()
  .split(" ");

let num = parseInt(input[0]);

let i = 1;

while(num > i){
  num -= i;
  i++
}

if(i%2===0){
  console.log(`${num}/${i+1-num}`)
}else{
  console.log(`${i+1-num}/${num}`)
}