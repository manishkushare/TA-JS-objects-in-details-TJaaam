// prototypal pattern

function createAnimal(location,numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}

function createDog(location,numberOfLegs,name,color){
    let dog = createAnimal(location,numberOfLegs);
    Object.setPrototypeOf(dog,dogMethods);
    dog.name = name;
    dog.color = color;
    return dog;
}
function createCat(location,numberOfLegs,name,colorOfEyes){
    let cat = createAnimal(location,numberOfLegs)
    Object.setPrototypeOf(cat,catMethods)
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
let lion = createAnimal("Satara",4);
let pochi = createDog("India",4,"Pochi","black and borwn");
let meow = createCat("India",4,"Meow","brown");