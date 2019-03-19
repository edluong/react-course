class Person {
    constructor(name = 'Anonymous',age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
} 

class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major; //flipping the value to see if Student has a major; !'' = true, therefore double !!
    }
    //override the parent method
    getDescription(){
        let description = super.getDescription(); //get the parent's method
        
        if (this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        
        let greeting = super.getGreeting();
        
        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

// const me = new Student('Ed L',27,'Computer Science');
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());

const me = new Traveler('Ed L',27,'California');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
