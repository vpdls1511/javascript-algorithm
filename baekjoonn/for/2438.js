const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", line => {
  input.push(line.split(" "));
  const inputData = input[0][0];
  for (let i = 0; i < inputData; i++) {
    let point = "";
    for (let j = 0; j < i + 1; j++) {
      point += "*";
    }
    console.log(point);
  }
  process.exit();
});
