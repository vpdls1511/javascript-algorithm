const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const solution = (data) => {
    const num = parseInt(data[0])
    if(num % 4 === 0 && num%100 !== 0 || num%400 !== 0){
        return 1;
    }else{
        return 0;
    }
}

const input = [];
rl.on('line' , line => {
    input.push(line)
}).on('close', ()=>{
    console.log(solution(input));

    process.exit();
})

/*
*/
