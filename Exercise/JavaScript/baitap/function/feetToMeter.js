function feetToMeter(feet) {
    let meter = 0.305 * feet;
    return meter;
}
function meterToFeet(meter) {
    let feet = 3.279 * meter;
    return feet;
}
console.log(`100 feet = ${feetToMeter(100)} meter`);
console.log(`100 meter = ${meterToFeet(100)} feet`);