// 67. Add Binary Numbers

let  a = "11", b = "1"


function add(a,b){
    let binaryA = BigInt(`0b${a}`);
    console.log(binaryA)
    let binaryB = BigInt(`0b${b}`);
    console.log(binaryB)
  
    let sum = binaryA + binaryB;
  
    return sum.toString(2);
}

console.log(add(a, b))

