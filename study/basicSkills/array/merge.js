let input = require("fs")
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../../input.txt')
  .toString()
  .trim()
  .split("\n").map(elem => elem.split(' ').map(v => parseInt(v)))

function mergeArray(num1arr , m , num2arr, n){
  let num1idx = m - 1;
  let num2idx = n - 1;
  let widx = num1arr.length - 1;
  if(num1arr.length < 0){
    return -1;
  }
  while(num1idx <= widx && num2idx <= widx){
    if( num1arr[num1idx] <= num2arr[num2idx] ){
      num1arr[widx--] = num2arr[num2idx--];
    }else{
      num1arr[widx--] = num1arr[num1idx--];
    }
    if(widx < 0) return
    console.log(num1arr)
  }
}

input[2].sort((a,b) => {
  return a - b
})
mergeArray(
  input[0],
  input[1],
  input[2],
  input[3],
)