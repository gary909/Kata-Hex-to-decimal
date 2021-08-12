function hexToDec(hexString){
    return parseInt(hexString, 16);
  }

//A number with a radix of 16 indicates that the number 
//in the string should be parsed from a hexadecimal 
//number to a decimal number.

console.log(hexToDec("1")); // 1
console.log(hexToDec("a")); // 10
console.log(hexToDec("10")); // 16
console.log(hexToDec("FF")); // 255
console.log(hexToDec("-C")); // -12