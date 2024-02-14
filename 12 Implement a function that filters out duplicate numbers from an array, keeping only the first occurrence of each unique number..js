let Numbers=  [1, 2, 3, 2, 4, 5, 1, 6, 7, 8, 7];
Numbers = Numbers.filter((num)=> num != num.includes(num))
console.log(Numbers)