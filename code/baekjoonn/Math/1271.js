const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const solution = (data) => {
    let money = data[0].split(' ')

    console.log(Math.pow(10,1000))
    console.log(money[0] / money[1])
    console.log(money[0] % money[1])
}

const input = [];
rl.on('line' , line => {
    input.push(line)
}).on('close', ()=>{
    solution(input)
    process.exit()
})
