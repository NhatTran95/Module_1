function createArrayRandom() {
    let numbers = new Array(5);
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Math.floor(Math.random() * 10) + 1;
    }
    console.log(numbers);
}
createArrayRandom();
createArrayRandom();
createArrayRandom();
createArrayRandom();
