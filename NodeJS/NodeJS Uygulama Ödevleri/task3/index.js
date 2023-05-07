const {circleArea, circleCircumference} = require("./circle");

circleArea(5);
circleCircumference(5);

// Alternatif olarak circle.js dosyasındaki fonksiyonları console'ye yazdırmak yerine, return edersek aşağıdaki gibi console'ye yazdırabiliriz.
// let r = 5;
// console.log(`${r} yarıçaplı dairenin alanı: ${circleArea(r)}, çevresi ise ${circleCircumference(r)}`)
