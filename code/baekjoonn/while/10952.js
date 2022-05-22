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
    const lineData = line.toString().split(',')
    let i = 0;
    while(i < lineData.length){
        const data = lineData[i].toString().split(' ').map(x => Number(x))
        const n = data[0]
        const m = data[1]
        console.log(n+m)
        i++
    }
    return 0;
}
