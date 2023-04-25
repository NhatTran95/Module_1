// Viết hàm tính tổng các giá trị âm trong mảng 1 chiều các số thực
let numbers1 = [-123, 56, -86, 63, -12, -465, -84, 68, 84, 147];
let numbers2 = [-123, 56, -86, 63, -12, -465, -84, 68, 84, -147];
function sumNumbersLessThan0(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            sum += numbers[i];
        }
    }
    return sum;
}
let sumResult = sumNumbersLessThan0(numbers2);
console.log(`tổng các số âm trong mảng bằng ${sumResult}`);