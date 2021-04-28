// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

// class Square{
//     constructor(side){
//         this.side = side;
//     }
//     set width(value){
//         return this.side.width = value;
        
//     }
//     set height(value){
//         return this.side.height = value;
        
//     }
// }
// let square = new Square({});

// - Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`

// class Square{
//     constructor(side){
//         this.side = side;
//     }
//     set width(value){
//         return this.side.width = value;
        
//     }
//     set height(value){
//         return this.side.height = value;
        
//     }
//     description(){
//         alert(`The square is ${this.side.width} x ${this.side.height}`);
//     }
// }
// let square = new Square({});

// - Create a method inside the class named `calcArea` that will return the area of the square.

// class Square{
//     constructor(side){
//         this.side = side;
//     }
//     set width(value){
//         return this.side.width = value;
        
//     }
//     set height(value){
//         return this.side.height = value;
        
//     }
//     description(){
//         alert(`The square is ${this.side.width} x ${this.side.height}`);
//     }
//     calcArea(){
//         return `${this.side.height * this.side.width} square feet.`
//     }
// }
// let square = new Square({});

// - Create a `area` getter method using which we can get the area of the square.

// class Square{
//     constructor(side){
//         this.side = side;
//     }
//     set width(value){
//         return this.side.width = value;
        
//     }
//     set height(value){
//         return this.side.height = value;
        
//     }
//     description(){
//         alert(`The square is ${this.side.width} x ${this.side.height}`);
//     }
//     calcArea(){
//         return `${this.side.height * this.side.width} square feet.`
//     }
//     get area(){
//                 return `${this.side.height * this.side.width} square feet.`

//     }

// }
// let square = new Square({});

// - Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`. If the passed value is not the area of the square alert say `Not a valid input`

// class Square{
//     constructor(side){
//         this.side = side;
//     }
//     set width(value){
//         return this.side.width = value;
        
//     }
//     set height(value){
//         return this.side.height = value;
        
//     }
//     set area(areaOfSquare){
//         this.side.width = Math.sqrt(areaOfSquare);
//         this.side.height= Math.sqrt(areaOfSquare);
//         return this.side;
//     }

//     description(){
//         alert(`The square is ${this.side.width} x ${this.side.height}`);
//     }
//     calcArea(){
//         return `${this.side.height * this.side.width} square feet.`
//     }
//     get area(){
//                 return `${this.side.height * this.side.width} square feet.`

//     }

// }

// let square = new Square({})

// - Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.

// class Square{
//     constructor(side){
//         this.side = side;
//     }
//     set width(value){
//         return this.side.width = value;
        
//     }
//     set height(value){
//         return this.side.height = value;
        
//     }
//     set area(areaOfSquare){
//         this.side.width = Math.sqrt(areaOfSquare);
//         this.side.height= Math.sqrt(areaOfSquare);
//         return this.side;
//     }

//     static isEqual(square1,square2){
//         if(square1.calcArea() === square2.calcArea()){
//             return true;
          
//           }  else{
//                 return false;    
//             }
//         }

    

//     description(){
//         alert(`The square is ${this.side.width} x ${this.side.height}`);
//     }
//     calcArea(){
//         return `${this.side.height * this.side.width} square feet.`
//     }
//     get area(){
//                 return `${this.side.height * this.side.width} square feet.`

//     }

// }

// let square = new Square({});
// let square1 = new Square({});
// let square2 = new Square({});


// - Create another property named `numberOfTimes` that will hold the value of number of times the area property is accessed from the object. The values will initialize to `0`. The area property can't be accessed more than 4 times. If it crosses 4 times alert message `Upper Limit Reached`


// class Square{
//     constructor(side){
//         this.side = side;
//         this.noOfTimes = 0;
        
//     }
//     set width(value){
//         return this.side.width = value;
        
//     }
//     set height(value){
//         return this.side.height = value;
        
//     }
//     set area(areaOfSquare){
//         this.side.width = Math.sqrt(areaOfSquare);
//         this.side.height= Math.sqrt(areaOfSquare);
//         return this.side;
//     }

//     static isEqual(square1,square2){
//         if(square1.calcArea() === square2.calcArea()){
//             return true;
          
//           }  else{
//                 return false;    
//             }
//         }

    

//     description(){
//         alert(`The square is ${this.side.width} x ${this.side.height}`);
//     }
//     calcArea(){
//         return `${this.side.height * this.side.width} square feet.`
//     }
//     get area(){
//             ++this.noOfTimes;
//             if(this.noOfTimes <= 4){
//                 return `${this.side.height * this.side.width} square feet.`

//             }
//             else {
//                 alert("Upper limit reached.")
//             }

//     }

// }

// let square = new Square({});
// let square1 = new Square({});
// let square2 = new Square({});


// - Create a `User` class that accepts `firstName` and `lastName` property

class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // - Create a getter method named `fullName` that will return the full name of the person.
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    // - Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`
    set fullName(name){
        if(name.length > 5){
            this.firstName = name.split(" ")[0];
            this.lastName = name.split(" ")[1];
            return
        }
        alert("Full name should be more than 5 characters")
    }

    
}

// - Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.
User.prototype.nameContains = function(string){
    if(this.firstName.includes(string) || this.lastName.includes(string)){
        return true;
        
    }
    else {
        return false;
    }
}
let user1 = new User("Manish","Kushare");

let user2 = new User("Karan","Rathod");

user1.fullName = "Sudhanshu Shekhar";
user2.fullName = "Su Sh";
user1.fullName;
user1.nameContains("Sudhanshu")