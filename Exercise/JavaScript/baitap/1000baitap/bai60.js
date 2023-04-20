let number = 1233450;
let numberStart = number;
let numberLast;
let numberNearLast;
let checkAcsending = true;
while (number > 0) {
    numberLast = number % 10;
    number = parseInt(number / 10);
    numberNearLast = number % 10;
    if (numberLast <= numberNearLast) {
        checkAcsending = false;
        break;
    }
}
if (checkAcsending == true) {
    console.log(`${numberStart} is acsending number `);
}
else console.log(`${numberStart} is not acsending number`);