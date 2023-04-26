function createArrayRandom(size, min, max) {
    let numbers = new Array(size);
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(numbers);
}
createArrayRandom(5, 5, 15);
createArrayRandom(10, 9, 20);
createArrayRandom(7, 6, 24);
createArrayRandom(8, 7, 30);
