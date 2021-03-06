'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'

function Circle(radius) {
  this.radius = radius;
  this.getCircumference = function() {
    let pi = 3.1415926;
    return 2 * pi * this.radius;
  };
  this.getArea = function() {
    let pi = 3.14;
    return pi * this.radius * this.radius;
  };
  this.toString = function() {
    return `Radius: ${this.radius}, Circumference: ${(this.getCircumference)()}, Area: ${(this.getArea)()}`;
  }
}

var coolCircle = new Circle(5);
console.log(coolCircle.toString());