let PaintRectangle = function(width, height) {
    this.getArea = function() {
        return width * height;
    }
    this.getPerimeter = function() {
        return 2 * (width + height);
    }
    this.displayRectangle = function() {
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(20,50, width, height);
    }
}

let rectangle = new PaintRectangle(300,100);
let area = rectangle.getArea();
let perimeter = rectangle.getPerimeter();
rectangle.displayRectangle();
document.write(`<br> area = ${area}`);
document.write(`<br> perimeter = ${perimeter}`);
