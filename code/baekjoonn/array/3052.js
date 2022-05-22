let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let data = [];
input.forEach(item => {
    const num = Number(item) % 42;
    if(data.indexOf(num) === -1) data.push(num)
})

console.log(data.length)