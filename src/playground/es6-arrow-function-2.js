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

const add = (a,b) => a + b;

console.log(add(55,1));

//this keyword - no longer bound
const user = {
  name: 'Ed',
  cities: ['Santa Barbara','Taipei'],
    printPlacesLived() { //es6 syntax for methods
      //const that = this; //common work around to access variables; in es6 this is not necessary anymore
      
      //using the course way of printing out many items; transform on the items
      return this.cities.map((city) => this.name + ' has lived in ' + city);//does not create a new array;
  }
};

console.log(user.printPlacesLived());

//one example would to not change the printPlacesLived to use arrow function. This would go up to the parent scope, 
//which cities does not exist.

//challenge

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};

console.log(multiplier.multiply());