const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const solution = (data) => {
    let text = data.toString().split(' ')

    let count = 0

    for(let i of text){
        if(i !== '' && i !== ' '){
            count++
        }
    }
    console.log(count)
}

const input = [];
rl.on('line' , line => {
    input.push(line)
}).on('close', ()=>{
    solution(input)
    process.exit()
})
