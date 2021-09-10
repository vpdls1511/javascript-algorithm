console.log('Wait to Input File')
const input = require('fs').readFileSync('/dev/stdin').toString().trim()

console.log(croatiaWord(input))

function croatiaWord (text) {
    const changeWords = [ 'c=' , 'c-' , 'dz=' , 'd-' , 'lj' , 'nj' , 's=' , 'z=']

    let word = text;
    let i = 0;
    let cnt = 0
    while(true){
        const target = changeWords[i]
        while(true){
            if(word.indexOf(target) !== -1){
                word = word.replace(target,' ');
                cnt++;
            }else{
                break;
            }
        }
        if(i >= changeWords.length) break;
        i++
    }
    word = word.replace(/ /gi,'');

    return cnt + word.length
}