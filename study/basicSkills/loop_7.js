let str = ''
for(let i = 0 ; i < 5 ; i++){
    for(let j=1 ; j <= 5; j++){
        str += j +(i*5) + ' '
    }
    console.log(str);
    str = ''
}
