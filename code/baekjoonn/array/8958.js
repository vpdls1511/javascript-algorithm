let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i <= Number(input[0]) ; i++){
    let point = 1;
    let ans = 0;
    for(let j = 0 ; j < input[i].length ; j++){
        if(input[i][j] === 'O'){
            ans += point;
            point ++
        }else{
            point = 1;
        }
    }
    console.log(ans)
}