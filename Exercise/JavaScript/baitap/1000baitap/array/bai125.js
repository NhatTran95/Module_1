// Viết hàm đếm số lượng số nguyên tố nhỏ hơn 100 trong mảng
// let numbers = [12, 3, 15, 251, 7, 17, 27, 51, 123, 231, 45, 6, 87, 12, 56, 8, 41, 76, 35, 11, 86, 4];
// let countNumbers = 0;
// let result = [];
// for (let i = 0; i < numbers.length; i++) {
//     let countDivisor = 0;
//     for (let j = 1; j <= numbers[i]; j++) {
//         if (numbers[i] % j == 0) {
//             countDivisor++;
//         }
//     }
//     if (countDivisor == 2 && numbers[i] < 100) {
//         countNumbers++;
//         result.push(numbers[i]);
//     }
// }
// console.log(`trong mảng có ${countNumbers} số nguyên tố nhỏ hơn 100, các số đó là ${result.join()}`)



// Viết hàm đếm số lượng số nguyên tố nhỏ hơn 100 trong mảng
let numbers1 = [12, 3, 15, 251, 7, 17, 27, 51, 123, 231, 45, 6, 87, 12, 56, 8, 41, 76, 35, 11, 86, 4];
let numbers2 = [12, 3, 15, 251, 7, 17, 27, 51, 123, 231, 45, 6, 87, 2, 12, 56, 8, 41, 76, 35, 11, 86, 4];
function count(numbers) {
    let countNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        let countDivisor = 0;
        for (let j = 1; j <= numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                countDivisor++;
            }
        }
        if (countDivisor == 2 && numbers[i] < 100) {
            countNumbers++;
        }
    }
    console.log(`số lượng số nguyên tố nhỏ hơn 100 trong mảng là ${countNumbers}`);
}
count(numbers2);
