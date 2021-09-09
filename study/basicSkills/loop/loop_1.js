const loop = 5;

// 1번
console.log('1번')
let str = ''
for(let i = 0 ; i < loop ; i++){
    str+='*'
    console.log(str)
}

// 2번
console.log('2번')
str = '';
for(let i = 0 ; i<= loop ; i++){
    str += '*';
}
for(let i = 0 ; i <= loop ; i++){
    console.log(str.slice(i))
}

// 3번
console.log('3번')
str = '';
let space = '';

for(let i = 0 ; i<= loop ; i++){
    space += ' ';
}

for(let i = 0 ; i < 5 ; i++){
    str+='*'
    console.log(space.slice(i+1) + str)
}

// 4번
console.log('4번')
str = '';
space = '';
for(let i = 0 ; i<= loop ; i++){
    str += '*';
}
for(let i = 0 ; i < loop ; i++){
    space+=' '
    console.log(space + str.slice(i+1))
}
