let myCircle = function(radius, color) {
    this.radius = radius;
    this.color = color;
    this.Circle = {};
    this.getRadius = function(){
        return this.radius;
    }
    this.getArea = function() {
        return Math.PI * this.radius * this.radius;
    }
}
let circle = new myCircle(5, "red");
let radius = circle.getRadius();
let area = circle.getArea();
console.log(`circle has radius is ${radius} then has area is ${area.toFixed(2)}`);