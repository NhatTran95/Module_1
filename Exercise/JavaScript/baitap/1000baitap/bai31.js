// kiểm tra số nguyên dương n có phải là số nguyên tố không
// tìm các số nguyên tố trong khoảng số
// let min = 2;
// let max = 1000;
// for (let number = min; number <= max; number++) {
//     let countDivisor = 0;
//     for (let divisor = 1; divisor <= number; divisor++) {
//         if (number % divisor == 0) {
//             countDivisor += 1;
//         }
//     }
//     if (countDivisor == 2) {
//         console.log(`${number} là số nguyên tố`);
//     }
//     else console.log(`${number} không phải là số nguyên tố`);
// }

let number = 17;
let countDivisor = 0;
    for (let divisor = 1; divisor <= number; divisor++) {
        if (number % divisor == 0) {
            countDivisor += 1;
        }
    }
    console.log(`${number} ${countDivisor == 2 ? 'la so nguyen to' : 'khong phai so nguyen to'}`);