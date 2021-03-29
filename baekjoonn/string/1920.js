const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const search = (arr , target , start , end) =>{
    while(start <= end){
        let mid = Math.floor((start+end) / 2)
        if(arr[mid] === target) return mid
        else arr[mid] > target ? end = mid - 1 : start = mid + 1
    }
    return -1

}

const solution = (data) => {
    let n = parseInt(data[0])
    let A = data[1].split(' ').map(e => parseInt(e))
    let m = parseInt(data[2])
    let B = data[3].split(' ').map(e => parseInt(e))
    let answer = ''

    A.sort((a,b) => a-b)

    for(let i of B){
        search(A , i , 0 , n-1) >= 0 ? answer += '1\n' : answer += '0\n'
    }

    console.log(answer);
}

const input = [];
rl.on('line' , line => {
    input.push(line)
}).on('close', ()=>{
    solution(input)
    process.exit()
})
