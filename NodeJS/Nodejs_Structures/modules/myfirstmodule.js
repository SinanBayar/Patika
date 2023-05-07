// Fonksiyon 1
function showPrimeNumbers(lownumber, highNumber) {
    for (let i = lownumber; i <= highNumber; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && j !== i) {
                isPrime = false
            }
        }

        if (isPrime) {
            console.log(i);
        }
    }
}

// Fonksiyon 2
function calculateArea(r) {
    let a = r * r * Math.PI 
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${a}`)
}

// ----------------------------------------------------------------------------- //

// Her iki fonksiyonu da modül olarak diğer dosyaların kullanımına açıyoruz.
// module.exports = {showPrimeNumbers, calculateArea};

// ES6 Yöntemi ile yaparsak;
export {showPrimeNumbers, calculateArea};