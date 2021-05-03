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
    constructor(name,age,gender,sportName){
        super(name,age,gender);
        this.sportName = sportName;
    }
    play(){
        return `I am ${this.name}, I play ${this.sportName}`;
    }
}

class Teacher extends Person{
    constructor(name,age,gender,instituteName){
        super(name,age,gender)
        this.instituteName = instituteName;
    }
    teach(){
        return `I am ${this.name}, I teach at ${this.instituteName}.`
    }
}

class Artist extends Person{
    constructor(name,age,gender,kind){
        super(name,age,gender)
        this.kind = kind;
    }
    createArt(){
        return `I create ${this.kind} kinds of arts/`
    }

}

class Cricketer extends Player{
    constructor(name,age,gender,sporName,teamName){
        super(name,age,gender,sporName)
        this.teamName = teamName;
    }
    playCricket(){
        return `I play from${this.teamName} team.`
    }
}
let person1 = new Person("Manish",25,"Male");
let player = new Player("Manish",25,"Male","Cricket");
let teacher = new Teacher("Manish",25,"Male","AltCampus");
let artist = new Artist("Manish",25,"Male","painting");
let team = new Cricketer("Manish",25,"Male","Cricket","Mumbai Indians")