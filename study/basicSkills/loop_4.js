let size = 10;
// 1번
let arr = Array(size).fill(null)
for(let i = 0 ; i<size ; i++){
    arr[i] = i+1
}
console.log(arr)


//2번
size = 5
arr = Array.from(Array(size), () => Array(size).fill(null))
let cnt = 1
for(let i = 0 ; i < size ; i++){
    for(let j = 0 ; j < size ; j++){
        arr[i][j] = cnt
        cnt ++
    }
}

console.log(arr)

//3번
arr = Array.from(Array(size-1), () => Array(size-1).fill(0))
for(let i = 0 ; i < size ; i++){
    arr[0][i] = i+1
}
for(let i = 1 ; i < size-1 ; i++){
    arr[i][size-1] = i+size
}
console.log(arr)



// 4번
size = 5;
arr = Array.from(Array(size), () => Array(size).fill(null));
let sign = 1;
let x = 0, y = 0 ;
let num = 0;

for(let i = 0 ; i < size ; i++){
    arr[0][x] = num++
    x += sign
}
x -= 1
for (let i = size-1 ; i > 0; i--) {
    for(let j = 0 ; j < i ; j++ ){
        y += sign
        arr[y][x] = num++
    }
    sign *= -1
    for(let j = 0 ; j < i ; j++ ) {
        x += sign
        arr[y][x] = num++
    }
}

console.log(arr)
