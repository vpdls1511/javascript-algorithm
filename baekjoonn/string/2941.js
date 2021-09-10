const input = require('fs').readFileSync('/dev/stdin').toString().trim()

let time = 0
for(let i of input){
    time += getDialPosition(i) + 3
}
console.log(time)

function getDialPosition (targetText){
    const dial = ['','ABC' , 'DEF' , 'GHI','JKL','MNO','PQRS','TUV','WXYZ']

    let cnt = -1 ;
    let answer = 0;
    dial.filter(doc => {
        if(doc.indexOf(targetText) === -1){
            cnt++;
        }else{
            answer = cnt
        }
    })

    return answer
}