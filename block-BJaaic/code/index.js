// prototypal pattern

function animal(location,numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}

function createDog(name,color){
    let dog = Object.create(dogMethods);
    dog.name = name;
    dog.color = color;
    return dog;
}
function createCat(name,colorOfEyes){
    let cat = Object.create(catMethods);
    // Object.prototype = 
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}

let animalMethods = {
    eat(){
        console.log(`I live in the ${this.location} and I can eat.`);
    },
    changeLocation(newLocation){
        this.location = newLocation;
        return this.location;
    },
    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs.`
    }
};
let dogMethods = {
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName(newName){
        this.name = newName;
        return this.name;
    },
    changeColor(newColor){
        this.color = newColor;
        return this.color;
    },
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}
let catMethods = {
    meow(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName(newName){
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes(newColor){
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    },
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}

Object.setPrototypeOf(dogMethods,animalMethods);
Object.setPrototypeOf(catMethods,animalMethods)
// Object.getPrototypeOf()
let lion = animal("Satara",4);
let pochi = createDog("Pochi","black and borwn")
let meow = createCat("Meow","brown")