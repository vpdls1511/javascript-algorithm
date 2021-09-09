const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const solution = (data) => {
    const num = data.toString().split(',')
    let ans = 0;
    for(let i = num[1].length ; i > 0  ; i--){
        console.log( parseInt(num[0]) * parseInt(num[1][i-1]) )
    }
    return parseInt(num[0]) * parseInt(num[1])
}

const input = [];
rl.on('line' , line => {
    input.push(line)
}).on('close', ()=>{
    console.log(solution(input));

    process.exit();
})
