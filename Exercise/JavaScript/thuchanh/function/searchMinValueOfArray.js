let arr1 = [3, 5, 1, 8, -3, 7, 8];
let arr2 = [7, 12, 6, 9, 20, 56, 89];
let arr3 = [];
let arr4 = [0, 0, 0, 0, 0, 0];
function searchMinValue(array) {
    let minValue = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        }
    }
    return minValue;
}
console.log(searchMinValue(arr1));
console.log(searchMinValue(arr2));
console.log(searchMinValue(arr3));
console.log(searchMinValue(arr4));