const square = function (x){
return x * x;
};

//All arrow functions are anonymous
// const squareArrow = (x) => {
//     return x * x;
// };

//Arrow function expression syntax
//equavalent to the top; explicitly return the values
const squareArrow = (x) => x * x;

console.log(squareArrow(9));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

const getFirstNameShort = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Ed L'));
console.log(getFirstNameShort('Ed L'));