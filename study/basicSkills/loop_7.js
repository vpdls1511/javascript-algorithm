let str = ''

for(let i = 0 ; i < 5 ; i++){
    str=''
    if(i%2 === 0){
        for(let j = 1 ; j < 6 ; j++){
            str+=' ' + (i * 5 + j)
        }
    }else{
        for(let j = 6 ; j > 1 ; j--){
            str+=' ' + (i * 5 + j - 1)
        }
    }
    console.log(str)
}
