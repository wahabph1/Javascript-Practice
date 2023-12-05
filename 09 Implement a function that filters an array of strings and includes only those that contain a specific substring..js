let Names = ["wahab","wahaj","wana","asitb"]
Names = Names.filter(item => {
  return item = item.includes("b")   
})
console.log(Names)