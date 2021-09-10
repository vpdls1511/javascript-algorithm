const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

let data = [swap(input[0]) , swap(input[1])]

console.log(data[0] > data[1] ? data[0] : data[1]);

function swap (n) { return Number(n[2]+n[1]+n[0]) }