const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const solution = (line) => {
    const data = line;

    for(let i = 0 ; i < parseInt(data[0]) ; i++){
        let n = parseInt(data[i+1][0]);
        let m = parseInt(data[i+1][2]);
        console.log(n+m);
    }
}

const input = [];
rl.on('line' , line => {
    input.push(line)
}).on('close', ()=>{
    solution(input);
    process.exit();
})
