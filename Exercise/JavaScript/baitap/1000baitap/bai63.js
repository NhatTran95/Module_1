// tìm BCNN của 2 số
let a = 13;
let b = 27;
let max = a > b ? a : b;
if (a == b) {
    console.log(`BCNN la ${a}`);
}
else {
    for ( let i = max; i <= a * b; i++) {
        if (i % a == 0 && i % b == 0) {
            console.log(`BCNN la ${i}`);
            break;
        }
    }
}