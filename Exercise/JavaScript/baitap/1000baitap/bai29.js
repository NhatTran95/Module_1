// tìm ước số lẻ lơn nhất của số nguyên dương n
        let number = 1000;
        let maxDivisor = 0;
        for (let divisor = 1; divisor <= number; divisor++) {
            if ((number % divisor == 0) && (divisor % 2 != 0) && (divisor > maxDivisor)) {
                maxDivisor = divisor;
            }
        }
        console.log(maxDivisor);
