let numbers = [1,2,3,4,5,6,7];

numbers = numbers.reduce((accumaltor,element)=>{
    console.log(`acumaltor is = ${accumaltor} and cuurent element is = ${element} and sum of them is = ${accumaltor+element} `)
    return accumaltor+element;
},0)
console.log(numbers)