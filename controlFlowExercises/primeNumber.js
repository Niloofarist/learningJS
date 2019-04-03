// Prime (whose factors are only 1 and iteself)
//Composite (has manay factors, can be divided evenly by its factors)

showPrimes(20);

function showPrimes(limit){
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number){
    let isPrime = true;
    for(let factor = 2; factor < number; factor++)
        if(number % factor === 0)
        return false;

    return true;
}