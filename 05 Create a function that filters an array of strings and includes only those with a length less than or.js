let arrayofstrings = ["Abdul","wahab","shaikh","21sw07","from","hala","new"]

arrayofstrings =arrayofstrings.filter((name)=> name.length<5);
console.log(arrayofstrings)

// to print every string with for of loop
for (const name of arrayofstrings) {
    console.log(name)
    
}

