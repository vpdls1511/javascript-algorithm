const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const solution = (data) => {
    const num = data.toString().split(' ');
    let hour = parseInt(num[0]);
    let min = parseInt(num[1]);

    if(min - 45 < 0){
        let time= min - 45;
        min = 60+time
        hour--
        if(hour < 0) hour = 23
    }else {
        min -= 45
    }
    return `${hour} ${min}`
}

const input = [];
rl.on('line' , line => {
    input.push(line)
}).on('close', ()=>{
    console.log(solution(input));

    process.exit();
})
