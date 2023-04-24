function checkValueInArray(array, value) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            count++;
        }
    }
    if (count == 0) {
        return -1;
    }
    else return count;
}
let texts = ['a', 'b', 'c','d','a','e','d','a'];
console.log(checkValueInArray(texts, "o"));