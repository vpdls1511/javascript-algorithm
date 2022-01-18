# 자바스크립트로 알고리즘 문제풀기

자바스크립트로 알고리즘 공부하기  

## [백준](https://github.com/vpdls1511/javascript-algoritm/tree/master/baekjoonn/)
백준에서는 따로 입출력을 받을 코드를 작성해야한다.   
fs 모듈의 `readFileSync` 를 이용해 input.txt의 값을 가져오면 편하게 할 수 있다.

**fs**
```
let input = require("fs")
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '../../input.txt')
  .toString()
  .trim()
  .split("\n").map(v => parseInt(v));
```

## [프로그래머스](https://github.com/vpdls1511/javascript-algoritm/tree/master/programmers/)
프로그래머스는 따로 입출력 관리를 해줄 필요가 없다.  
굿굿
