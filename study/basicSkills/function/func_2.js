const solution = (num) => {
    let answer = 0
    let data = num.toString().split('')
    for(let i = 0 ; i < data.length ; i ++ ){
        answer += parseInt(data[i])
    }
    return answer
}

const solution2 = (arr) => {

    let first = [arr[0] , arr[1]]

    //[ 3, 12 ]
    while(arr[1] !== 0){
        let tmp = arr[1];
        arr[1] = arr[0] % arr[1];
        arr[0] = tmp;
    }

    return [arr[0] , (first[0] * first[1])/arr[0]]
}

const a = 123
const b = 5869401

const a2 = [ 3, 12 ];
const b2 = [ 2, 5 ];

console.log(solution(a))
console.log(solution(b))
console.log(solution2(a2))
console.log(solution2(b2))

