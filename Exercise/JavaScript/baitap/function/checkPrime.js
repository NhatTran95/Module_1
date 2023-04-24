function isPrime(number) {
    let countDivisor = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            countDivisor++;
        }
    }
    if (countDivisor == 2) {
        console.log(number);
    }
}
for (let i = 0; i <= 1000; i++) {
    isPrime(i);
}
