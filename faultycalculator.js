/* Faulty calculator

10% OF TIMES:
+ --> -
* --> +
- --> /
/ --> **

*/ 
let random = Math.random()
let a=prompt("Enter first number")
let b=prompt("Enter second number")
let op=prompt("enter operation")

let c={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if (random>0.1){
  switch(op){
    case "+": console.log(a+b)
    break;
    case "-": console.log(a-b)
    break;
    case "*": console.log(a*b)
    break;
    case "/": console.log(a/b)
    break;
    default: console.log("Invalid operation")
  }
}
else{
    c=obj[c]
    console.log(`${eval(`${a} ${op} ${b}`)}`)
}

