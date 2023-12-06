let  Numbers = [1,2,3,4,5,6,7,8,9,10]

Numbers = Numbers.reduce((accumaltor,element)=>{
    console.log(`acumaltor is = ${accumaltor} and cuurent element is = ${element} and product of them is = ${accumaltor*element} `)

    return accumaltor*element
  

},1)
console.log(Numbers)
console.log("Wahab")