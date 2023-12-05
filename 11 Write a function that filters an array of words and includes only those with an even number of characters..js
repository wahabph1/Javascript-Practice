let Names = ["Hassan", "Safiya", "Ibrahim", "Layla", "Suleiman", "Maryam", "Bilal", "Amina", "Tariq", "Firdaus"];

Names = Names.filter(item => {
    return item = item.length%2==0;

})
console.log(Names)

