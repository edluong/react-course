var nameVar = 'Ed';
var nameVar = 'Richard';
console.log('nameVar', nameVar);

//let can reassign variables
// let cannot recreate variables
let nameLet = 'Tom';
nameLet = 'Thomas';
console.log('nameLet',nameLet);

//let cannot reassign variables
// let cannot recreate variables
const nameConst = 'Frank';
console.log('nameConst',nameConst);

function getPetName(){
    var petName = 'Hal';
    return petName;
}

//console.log(petName);

//let and const are function scoped
//block scoping example if statement or for statement

var fullName = 'Ed Luong';
if (fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

//let and const are block level scoped
//try to default everything for const, once determined needs to be reassigned then change to let