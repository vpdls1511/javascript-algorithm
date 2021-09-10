const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let cnt = 0;

for(let i = 1 ; i < input.length ; i++){
    cnt += findRepeatWord(input[i]) ? 1 : 0
}

console.log(cnt)

function findRepeatWord (word) {
    //console.log('-------------------------------')
    //console.log(word.length-1)
    for(let i = 0 ; i < word.length ; i++){
        let cnt = 0
        for(let j = i+1 ; j < word.length ; j++){
            //console.log(`i = ${i} , j = ${j} target : ${word[i]}  search : ${word[j]}`)
            if(word[i] === word[j]){
                cnt++;
                if(j-i !== cnt) {
                    //console.log(`not current : ${j} - ${i} = ${j-i}`)
                    return false;
                }
            }
        }
    }
    return true;
}