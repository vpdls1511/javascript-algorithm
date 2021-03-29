# 자바스크립트로 알고리즘 문제풀기

자바스크립트로 알고리즘 공부하기  

##[백준](https://github.com/vpdls1511/javascript-algoritm/tree/master/baekjoonn/)
백준에서는 따로 입출력을 받을 코드를 작성해야한다.  
fs 모듈을 이용하는 방법과  
readline 모듈을 이용하는 방법이 있는데 저는 readline을 이용했다.

**fs**  
```
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin/').toString().split(' ')

const inputData = parseInt(input[0])
```

**readline**

```
const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const input = [];

rl.on('line' , line => {
    input.push(line.split(' '))
}).on('close', ()=>{
    console.log(input)
    process.exit()
})
```

##[프로그래머스](https://github.com/vpdls1511/javascript-algoritm/tree/master/programmers/)
프로그래머스는 따로 입출력 관리를 해줄 필요가 없다.  
굿굿
