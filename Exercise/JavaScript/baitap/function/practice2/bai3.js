function factorial(number) {
    let factorialNumber = 1;
    for (i = 2; i <= number; i++) {
        factorialNumber *= i;
    }
    return factorialNumber;
}
console.log(factorial(5));