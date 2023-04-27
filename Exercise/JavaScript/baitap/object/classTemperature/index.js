class Temperature{
    constructor(celsius) {
        this.celsius = celsius;
    }
    convertToFahrenheit() {
        return 1.8 * this.celsius + 32;
    }
    convertToKenvin() {
        return this.celsius + 273.15;
    }
}
let temperature = new Temperature(25);
console.log(temperature.convertToFahrenheit());
console.log(temperature.convertToKenvin());