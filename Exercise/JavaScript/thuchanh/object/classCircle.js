let myCircle = function(x, y, radius, color) {
    this.radius = radius;
    this.color = color;
    this.Circle = {};
    this.getRadius = function(){
        return this.radius;
    }
    this.getArea = function() {
        return Math.PI * this.radius * this.radius;
    }
    this.displayCircle = function(){
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();

    }
}
let circle = new myCircle(50, 50, 30, "#FFF000");
let radius = circle.getRadius();
let area = circle.getArea();
circle.displayCircle();
document.write(`<br> circle has radius is ${radius} has area is ${area.toFixed(2)}`)