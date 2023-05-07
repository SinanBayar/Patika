// 1 e ve kendisine bölünecek, 1 den büyük pozitif tam sayı olacak.

/* function primeNumbers(lownumber, highnumber) {
    for(let i = lownumber ; i <= highnumber ; i++) {
        let isPrime = true;
        for(let j = 2 ; j <= i ; j++) {
            if(i % j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime) {
            console.log(i)
        }
    }
}

primeNumbers(52,79); */

const arguments = process.argv.slice(2)

function primeNumbers(lownumber, highnumber) {
    for(let i = lownumber ; i <= highnumber ; i++) {
        let isPrime = true;
        for(let j = 2 ; j <= i ; j++) {
            if(i % j === 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime) {
            console.log(i)
        }
    }
}

primeNumbers(arguments[0]*1, arguments[1]*1);
/* primeNumbers(arguments[0], arguments[1]); sorulacak */


/* console.log(process.argv.slice(2)); */