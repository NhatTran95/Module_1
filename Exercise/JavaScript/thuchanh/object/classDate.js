let MyDate = function(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function() {
        return this.day;
    }
    this.getMonth = function() {
        return this.month;
    }
    this.getYear = function() {
        return this.year;
    }
    this.setDay = function(day) {
        this.day = day;
    }
    this.setMonth = function(month) {
        this.month = month;
    }
    this.setYear = function(year) {
        this.year = year;
    } 
    this.setDate = function(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    this.toString = function() {
        return this.day + "/" + this.month + "/" + this.year;
    }
}
let date = new MyDate(20, 6, 1995);
let time1 = date.toString();
console.log(time1);
// date.setDay(30);
// date.setMonth(4);
// date.setYear(1995);
// let day = date.getDay();
// let month = date.getMonth();
// let year = date.getYear();
// console.log(`${day}/${month}/${year}`);
date.setDate(30, 10, 2000);
let time = date.toString();
console.log(time);

