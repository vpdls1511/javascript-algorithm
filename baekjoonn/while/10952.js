const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const solution = (line) => {
    const data = line;
    let i = -1;
    let n , m;
    while(n !== 0 && m !== 0){
        i++
        n = parseInt(data[i][0]);
        m = parseInt(data[i][2]);
        if(n+m !== 0) console.log(`${n+m}`);
    }
}

const input = [];
rl.on('line' , line => {
    input.push(line)
}).on('close', ()=>{
    solution(input);
    process.exit();
})
