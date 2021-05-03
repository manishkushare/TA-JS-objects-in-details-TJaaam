## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)
```js
class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        return `I am vegan`
    }
    sleep(){
        return `I sleep early in the night`
    }
    walk(){
        return `I walk 10000 steps daily`
    }
}


class Player extends Person{
    constructor(sportsName){
        super();
        this.sportName = sportName;
    }
    play(){
        return `I play ${this.sportName}`;
    }
}

class Teacher extends Person{
    constructor(instituteName){
        super()
        this.instituteName = instituteName;
    }
    teach(){
        return `I am ${this.name}, I teach at ${this.instituteName} college`
    }
}

class Artist{
    constructor(kind){
        super()
        this.kind = kind;
    }
    createArt(){
        return `I create ${this.kind} kinds of arts/`
    }

}

class Cricketer extends Player{
    constructor(tramName){
        super()
        this.teamName = teamName;
    }
    playCricket(){
        return `I play from${this.teamName} team.`
    }
}
let person1 = new Person("Manish",25,"Male");
let player = new Player("Cricket");
let teacher = new Teacher("AltCampus");
let artist = new Artist("painting");
let team = new Cricket("Mumbai Indians")
```