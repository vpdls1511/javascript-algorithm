const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
// 1번
let sum = 0;
for(let i = 1 ; i <= 100 ; i++){
    sum += i
}
console.log(sum)
// 2번
let str = ''
for(let i=1 ; i <= 5 ; i++){
    str += i + ' '
    console.log(str)
}
// 3번
let gugu = ''
for(let i = 1 ; i <= 9; i++){
    for(let j = 1 ; j <= 9 ; j++){
        gugu = i + 'x' + j + '=' + i*j
        console.log(gugu)
    }
    console.log(' ')
}

//4번
console.log('질문을 선택해 주세요')
console.log('1. 해당 프로그램 제작자의 이름은?')
console.log('2. 해당 프로그램 제작자의 학번은?')
rl.on('line' , line => {
    if(line === '1'){
        console.log('김남규')
    }else if(line === '2'){
        console.log('202062010')
    }else{
        console.log('존재하지 않는 선택지 입니다. 프로그램을 종료합니다.')
        process.exit()
    }
})
