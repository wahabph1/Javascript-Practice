let  Array =  [1, [2, 3], [4, 5]];
Array = Array.reduce((accumaltor, ele) => {
    console.log(`acumaltor is = ${accumaltor} and cuurent element is = ${ele}`)
    return accumaltor.concat(ele)

    
}, [])
console.log(Array)
  console.log("waha")