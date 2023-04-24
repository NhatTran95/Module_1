function swap2Number(a,b) {
    let c = a;
    a = b;
    b = c;
    let result = [a, b];
    return result.toString();
}
console.log(swap2Number(2,3));