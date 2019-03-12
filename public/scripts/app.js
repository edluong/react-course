'use strict';

var square = function square(x) {
    return x * x;
};

//All arrow functions are anonymous
// const squareArrow = (x) => {
//     return x * x;
// };

//Arrow function expression syntax
//equavalent to the top; explicitly return the values
var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(9));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

var getFirstNameShort = function getFirstNameShort(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Ed L'));
console.log(getFirstNameShort('Ed L'));
