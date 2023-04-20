// kiểm tra số hoàn thiện
let min = 1;
let max = 100000;
for (let number = min; number <= max; number++) {
    let sumDivisors = 0;
    for (let divisor = 1; divisor < number; divisor++) {
        if (number % divisor == 0) {
            sumDivisors += divisor;
        }
    }
    if (sumDivisors == number) {
        console.log(`${number} is a perfect number`);
    }
    // else console.log(`${number} is not a perfect number`);
}