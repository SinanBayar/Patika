function circleArea(r) {
    let area  = r * r * Math.PI;
    console.log(area);
    // return area
}

function circleCircumference(r) {
    let circumrefence = 2 * r * Math.PI;
    console.log(circumrefence);
    // return circumrefence
}

module.exports = {circleArea, circleCircumference};

// Eğer console'ye yazdırmak yerine return edersek, daha sonra index.js dosyasında console'ye daha güzel bir şekilde de yazdırabiliriz.