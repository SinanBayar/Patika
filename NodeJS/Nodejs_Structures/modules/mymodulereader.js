// const primeNumbers = require("./myfirstmodule");

// primeNumbers.showPrimeNumbers(32, 46);
// primeNumbers.calculateArea(12);

// veya

// const {showPrimeNumbers, calculateArea} = require("./myfirstmodule");

// showPrimeNumbers(17,31);
// calculateArea(12);


// veya (Bu şekilde ES6'ya göre kullanabilmek için package.json dosyası oluşturup(npm init) daha sonra içerisine "type": "module" eklemek gerekiyor.)
import {showPrimeNumbers, calculateArea} from './myfirstmodule.js'

showPrimeNumbers(12, 19);
calculateArea(13);
