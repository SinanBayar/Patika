const argument = process.argv.slice(2);

function calculateArea(r) {
    let a = r * r * Math.PI 
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${a}`)
}

calculateArea(argument[0]*1);

// Terminal: node odev1 "number here"