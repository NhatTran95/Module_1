// liệt kê tất cả các ước của số nguyên dương n và tính tổng các ước lẻ, tổng các ước chẵn, tổng toàn bộ các ước.
let number = 10000;
let sumDivisorOdd = 0;
let sumDivisorEven = 0;
let sumDivisors = 0;
let listedDivisor = "";
let listedDivisorOdd = "";
let listedDivisorEven = "";
for (let divisor = 1; divisor <= number; divisor++) {
    if (number % divisor == 0) {
        if (divisor % 2 == 0) {
            sumDivisorEven += divisor;
            listedDivisorEven += divisor + ",";
            listedDivisor += divisor + ",";
        }
        else {
            sumDivisorOdd += divisor;
            listedDivisorOdd += divisor + ",";
            listedDivisor += divisor + ",";
        }
    }
}
sumDivisors = sumDivisorEven + sumDivisorOdd;
// listedDivisor = listedDivisorEven + listedDivisorOdd;
console.log(`Odd divisors = ${listedDivisorOdd}`);
console.log(`Total odd divisor = ${sumDivisorOdd}`);
console.log(`Even divisors = ${listedDivisorEven}`);
console.log(`Total even divisor = ${sumDivisorEven}`);
console.log(`listed divisors = ${listedDivisor}`);
console.log(`Total divisors = ${sumDivisors}`);