const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for (let i = 1 ; i < input.length ; i++){
    const data = input[i].split(' ');
    let item = '';
    for(let j = 0 ; j < data[1].length ; j++){
        item += data[1][j].toString().repeat(Number(data[0]))
    }
    console.log(item)
}