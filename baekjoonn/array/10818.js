const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = []
rl.on('line', function (line) {
    input.push(line)
}).on('close', function () {
    solution(input)
    process.exit();
});

function solution(line) {
    const arr = line.toString().split(',').map(x => Number(x));
    let max = arr[0] , min = arr[0];
    for(let i = 0 ; i < Number(lineData[0]) ; i++){
        max = max < arr[i] ? arr[i] : max;
        min = min > arr[i] ? arr[i] : min;
    }

    console.log(`${min} ${max}`);
    return 0;
}
