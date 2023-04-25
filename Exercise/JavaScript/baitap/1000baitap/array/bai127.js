// Viết hàm sắp xếp mảng 1 chiều các số thực tăng dần
let numbers1 = [12, 56, 78, -125, -65, -8, 96, 153, 8, 0, 632];
let numbers2 = [136, 12, 56, 78, -125, -65, -8, 96, 153, 80, 0, 632, -841, 412];
function sortUpAcsending(numbers) {
    function compare(n1, n2) {
        return n1 - n2;
    }
    console.log(numbers.sort(compare));
}
sortUpAcsending(numbers2);



