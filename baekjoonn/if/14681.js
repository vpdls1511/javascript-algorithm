const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const solution = (data) => {
    const num = data.toString().split(',')
    const n = parseInt(num[0])
    const m = parseInt(num[1])

    if(n > 0 && m > 0){
        return 1
    }else if( n < 0 && m > 0){
        return 2
    }else if( n < 0 && m < 0){
        return 3
    }else if( n > 0 && m < 0){
        return 4
    }
}

const input = [];
rl.on('line' , line => {
    input.push(line)
}).on('close', ()=>{
    console.log(solution(input))
    process.exit()
})
