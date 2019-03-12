'use strict';

//Topics
// arguments object - no longer bound with arrow functions
// this keyword - no longer bound


// const add = function (a,b) {

//     console.log(arguments);
//     return a + b;
// };

//Converting to es6
//below will crash, cannot access arguments; ReferenceError: arguments is not defined
// const add = (a,b) =>{
//     console.log(arguments);
//     return a + b;
// }

var add = function add(a, b) {
  return a + b;
};

console.log(add(55, 1));

//this keyword - no longer bound
var user = {
  name: 'Ed',
  cities: ['Santa Barbara', 'Taipei'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    //es6 syntax for methods
    //const that = this; //common work around to access variables; in es6 this is not necessary anymore

    //using the course way of printing out many items; transform on the items
    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    }); //does not create a new array;
  }
};

console.log(user.printPlacesLived());

//one example would to not change the printPlacesLived to use arrow function. This would go up to the parent scope, 
//which cities does not exist.

//challenge

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (num) {
      return _this2.multiplyBy * num;
    });
  }
};

console.log(multiplier.multiply());
