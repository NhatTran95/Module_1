function findMinValue(a, b, c) {
    let  valueMin = a;
    if (b < a) {
        if (c < b) {
            valueMin = c;
        }
        else valueMin = b;
    }
    else if (c < a) {
        valueMin = c;
    }
    return valueMin;
}
console.log(findMinValue(4, 5, 3));
