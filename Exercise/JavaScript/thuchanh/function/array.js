// 1. viết hàm tạo ra 1 mảng 2 chiều với n và m, các giá trị [min, max]
// 2. viết hàm hiển thị mảng 2 chiều trên
// 3. viết hàm đếm xem trong mảng 2 chiều trên có bao nhiêu số chẵn
// 4. viết hàm đếm xem trong mảng 2 chiều trên có bao nhiều số nguyên tố
function createArray(n, m, min, max) {
    let matrics = new Array(n);
    for (let i = 0; i < matrics.length; i++) {
        matrics[i] = new Array(m);
        for(let j = 0; j < matrics[i].length; j++) {
            matrics[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    return matrics;
}
function displayArray(matric) {
    for (let i = 0; i < matric.length; i++) {
        for (let j = 0; j < matric[i].length; j++) {
            document.write(`${matric[i][j]}\t`);
        }
        document.write(`<br>`);
    }
}
function countEvenNumber(matric) {
    let count = 0;
    for (let i = 0; i < matric.length; i++) {
        for (let j = 0; j < matric[i].length; j++) {
            if (matric[i][j] % 2 == 0) {
                count++;
            }
        }
    }
    return count;
}
function countPrimeNumber(matric) {
    let count = 0;
    for (let i = 0; i < matric.length; i++) {
        for (let j = 0; j < matric[i].length; j++) {
            let countDivisor = 0;
            for (let n = 1; n <= matric[i][j]; n++) {
                if (matric[i][j] % n == 0) {
                    countDivisor++;
                }
            }
            if (countDivisor == 2){
                count++;
            }
        }
    }
    return count;
}
let matrics1 = createArray(3, 5, 1, 20);
displayArray(matrics1);
let countEven = countEvenNumber(matrics1);
document.write(`Number even in array is: ${countEven}`);
let countPrime = countPrimeNumber(matrics1);
document.write(`<br> Number prime in array is: ${countPrime}`);