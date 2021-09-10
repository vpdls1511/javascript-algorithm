const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const text = input.toUpperCase();
const array = [...new Set(text)]

console.log(findData(array))

function findData (arr) {

    let max = 0 , index = '', sameCnt = 0;
    const cntArr = []

    arr.forEach((word, idx) => {
        cntArr.push(searchWord(word))
        if(max < cntArr[idx]){
            max = cntArr[idx];
            index = idx;
        }
    })
    for(let i = 0 ; i < cntArr.length ; i++){
        if(i !== index){
            if(cntArr[i] === max) return '?'
        }
    }
    return arr[index];
}

function searchWord (str) {
    let count = 0;
    let pos = text.indexOf(str)

    while(pos !== -1){
        count++;
        pos = text.indexOf(str, pos+1);
    }

    return count;
}