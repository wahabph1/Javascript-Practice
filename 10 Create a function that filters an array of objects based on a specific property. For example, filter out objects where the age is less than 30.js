let OBj = [


    { name: "abdul wahab", age: 10 },
    { name: "abdul basit", age: 48 },
    { name: "abd", age: 66 },
    { name: "abul basdit", age: 48 },
    { name: "abgul wahaddb", age: 20 },
    { name: "aful basddit", age: 8 }


]
OBj = OBj.filter((item)=> item.age<30)
console.log(OBj)

for (let item of OBj)
{
    console.log(item.name+" has  less then 30 age ")
}