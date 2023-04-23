// Viết hàm tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1 chiều các số nguyên
let numbers = [12, 35, 11, 3, 56, -65, 37, 586, -36, 47];
let valueMin = numbers[0];
let indexMin = 0;
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < valueMin) {
        valueMin = numbers[i];
        indexMin = i;
    }
}
console.log(`value min in array is ${valueMin} at index is ${indexMin}`);