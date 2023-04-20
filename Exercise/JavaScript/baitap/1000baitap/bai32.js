// kiểm tra số chính phương, tìm số chính phương trong khoảng nào đó
// let min = 4;
// let max = 1000;
// let sochinhphuong = "";
// for (let number = min; number <= max; number++) {
//     for (let i = 1; i <= (number / 2); i++) {
//         if (i ** 2 == number) {
//             sochinhphuong += number + ",";
//         }
//     }
//     // console.log(`${number} ${count > 0 ? "la so chinh phuong" : "khong phai sso chinh phuong"}`);
    
// }
// console.log(`cac so chinh phuong trong khoang ${min} den ${max} la: ${sochinhphuong}`)
let min = 0;
let max = 1000;
for (let number = min; number <= max; number++) {
    if (number == 0 || number == 1) {
        console.log(`${number} la so chinh phuong`);
    }
    for (let i = 1; i <= parseInt(number / 2); i++) {
        if (i ** 2 == number) {
           console.log(`${number} la so chinh phuong`)
        }
    } 
}
 