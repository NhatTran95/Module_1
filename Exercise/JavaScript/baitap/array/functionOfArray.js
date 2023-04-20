//bai 1
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());

//bai 2
let number = 204579683;
let string = number.toString();
let result = [string[0]];
for (let i = 1; i < string.length; i++) {
    if ((string[i-1]%2 === 0) && (string[i]%2 === 0)) {
        result.push('-', string[i]);
    }
    else {
        result.push(string[i]);
    }
}
console.log(result.join(''));

//bai 3
let string2 = "My Name Is Nhat";
let UPPER = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
let LOWER = "abcdefghiklmnopqrstuvwxyz";
let result2 = [];
for (let i = 0; i < string2.length; i++) {
    if (UPPER.indexOf(string2[i]) !== -1) {
        result2.push(string2[i].toLowerCase());
    }
    else if (LOWER.indexOf(string2[i] !== -1)) {
        result2.push(string2[i].toUpperCase());
    }
    else {
        result2.push(string2[i]);
    }
}
console.log(result2.join(''));
