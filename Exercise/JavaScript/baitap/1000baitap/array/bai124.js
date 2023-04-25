// Viết CT kiểm tra trong mảng các số nguyên có tồn tại giá trị chẵn nhỏ hơn 2004 hay không. nếu có xuất ra mảng chứa các giá trị đó, không có thì xuất ra không có 
// let numbers = [254,6835,4123,4775,832,4553,854,3565,11,354,36,1255,336,263,5602,453];
// let evenLessthan2004 = [];
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0 && numbers[i] < 2004) {
//         evenLessthan2004.push(numbers[i]);
//     }
//     else count ++;
// }
// if (count == numbers.length) {
//     console.log(`trong mảng không tồn tại số chẵn nhỏ hơn 2004`);
// }
// else {
//     console.log(`trong mảng có các số chẵn nhỏ hơn 2004 là ${evenLessthan2004}`);
// }

// Viết ham kiểm tra trong mảng các số nguyên có tồn tại giá trị chẵn nhỏ hơn 2004 hay không
let numbers1 = [254, 6835, 4123, 4775, 832, 4553, 854, 3565, 11, 354, 36, 1255, 336, 263, 5602, 453];
function checkNumbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0 && numbers[i] < 2004) {
            count++;
        }
    }
    return count;
}
let countResult = checkNumbers(numbers1);
if (countResult > 0) {
    console.log(`trong mảng có tồn tại ${countResult} số chẵn nhỏ hơn 2004`);
}
else console.log(`trong mảng không tồn tại số chẵn nhỏ hơn 2004`);
