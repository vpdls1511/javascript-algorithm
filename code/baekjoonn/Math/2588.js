const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const solution = (data) => {
    const num = data.toString().split(' ')

    const n = parseInt(num[0])
    const m = parseInt(num[1])

    if(n > m){
        return '>'
    }else if(n === m){
        return '=='
    }else if( n < m){
        return '<'
    }
}

const input = [];
rl.on('line' , line => {
    input.push(line)
}).on('close', ()=>{
    console.log(solution(input));

    process.exit();
})
