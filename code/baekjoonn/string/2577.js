const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const input = [];

rl.on('line' , line => {
    input.push(line.split('\n'))
}).on('close', ()=>{
    const inputData = input
    let cntNumber = [0,0,0,0,0,0,0,0,0,0];
    let result = 1;
    for(let i of inputData){
        i = parseInt(i)
        result *= i;
    }
    for(let i = 0 ; i<result.toString().length ; i++){
        if( result.toString()[i] == 0) cntNumber[0]++
        else if( result.toString()[i] == 1) cntNumber[1]++
        else if( result.toString()[i] == 2) cntNumber[2]++
        else if( result.toString()[i] == 3) cntNumber[3]++
        else if( result.toString()[i] == 4) cntNumber[4]++
        else if( result.toString()[i] == 5) cntNumber[5]++
        else if( result.toString()[i] == 6) cntNumber[6]++
        else if( result.toString()[i] == 7) cntNumber[7]++
        else if( result.toString()[i] == 8) cntNumber[8]++
        else if( result.toString()[i] == 9) cntNumber[9]++
    }

    for(let i of cntNumber){
        console.log(i)
    }

    process.exit()
})
