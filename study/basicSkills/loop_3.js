let str = '';
let loop = 5;

console.log('1번')
for(let i = 0 ; i < loop-1; i++){
    for(let j = 1 ; j <= loop; j++){
        str += j+ ' ';
    }
    console.log(str)
    str = ''
}

console.log('2번')
for(let i = 0 ; i < loop; i++){
    for(let j = 1 ; j <= loop; j++){
        str += j+(i*loop)+ ' ';
    }
    console.log(str)
    str = ''
}

console.log('3번')
for(let i = 0 ; i < loop-1; i++){
    if(i%2===0){
        for(let j = 1 ; j <= loop; j++){
            str += j+ ' ';
        }
    }else{
        for(let j = loop ; j >= 1; j--){
            str += j+ ' '
        }
    }
    console.log(str)
    str = ''
}

console.log('4번')
for(let i = 0 ; i < loop; i++){
    if(i%2===0){
        for(let j = 1 ; j <= loop; j++){
            str += j+(i*loop)+ ' '
        }
    }else{
        for(let j = loop ; j >= 1; j--){
            str += j+(i*loop)+ ' '
        }
    }
    console.log(str);
    str = '';
}
