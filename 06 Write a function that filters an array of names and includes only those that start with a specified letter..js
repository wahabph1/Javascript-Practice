let Names = ["Noman","Siddique","Ali","Ahmed"];
Names = Names.filter(item => {
return item.includes('A');
})
console.log(Names)