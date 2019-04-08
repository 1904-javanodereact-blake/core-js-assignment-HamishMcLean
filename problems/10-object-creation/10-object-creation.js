/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let Saiyan = { //object literal
    name = 'Goku',
    PowerLevel = 9001
}

function human(name, hair, height, weight, age) {
    this.personName = name;
    this.hairType = hair;
    this.heightInFeet = height
    this.weightInPounds = weight;
    this.howOld = age;
}

class SuperSaiyan {
    constructor(){
        this.called =name;
        this.howLong =age;
    }
}