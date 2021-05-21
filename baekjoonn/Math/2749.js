const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const fibo = (n) => {
    console.log(n)
    if(n < BigInt(2)){
        return BigInt(n)
    }else{
        return BigInt(fibo(n-1n)) + BigInt(fibo(n-2n))
    }
}

const solution = (data) => {
    data = BigInt(data)
    console.log( fibo(data) )
}

const input = [];
rl.on('line' , line => {

    input.push(line)
}).on('close', ()=>{
    solution(input)
    process.exit()
})
