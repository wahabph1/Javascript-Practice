let number = 123456789;
var reversedString = number.toString().split('').reverse().join('');
var reversedNumber = parseInt(reversedString,  10);
console.log(reversedNumber);
