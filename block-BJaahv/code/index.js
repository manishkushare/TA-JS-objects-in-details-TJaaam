// function to create object
function createUser(name,id,noOfProjects){
    let user = {}
    //data
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
    
    //methods

    user.getProjects = function(){
        return this.noOfProjects;
    };

    user.changeName = function(newName){
        this.name = newName;
        return this.name;
    };

    user.incrementProject = function(){
        return ++this.noOfProjects;
    }
    user.decrementProject = function(){
        return --this.noOfProjects;
    }

    return user;
}

let user1 = createUser("Manish",111,10);
let user2= createUser("Karan",112,15);

console.group(user1.name);
console.log("original name",user1.name);
console.log("id",user1.id);
console.log("project:",user1.noOfProjects);
console.log("increment project",user1.incrementProject());
console.log("increment project",user1.incrementProject());
console.log("increment project",user1.incrementProject());
console.log("decrement project",user1.decrementProject());
console.log("changed name",user1.changeName("Sudhanshu"))
console.groupEnd();

console.group(user2.name);
console.log("original name",user2.name);
console.log("id",user2.id);
console.log("project:",user2.noOfProjects);
console.log("increment project",user2.incrementProject());
console.log("increment project",user2.incrementProject());
console.log("increment project",user2.incrementProject());
console.log("decrement project",user2.decrementProject());
console.log("changed name",user2.changeName("raghu"))
console.groupEnd();


// using object.create 

function createUser(name,id,noOfProjects){
    let user = Object.create(userMethods)
    user.name = name;
    user.id= id;
    user.noOfProjects = noOfProjects;
    return user;
}

let userMethods = {
    getProjects(){
        return this.noOfProjects;
    },
    changeName(newName){
        this.name = newName;
        return this.name;
    },
    incrementProjects(){
        return ++this.noOfProjects;
    },
    decrementProjects(){
        return --this.noOfProjects;
    }

}
let user1 = createUser("Manish",111,10);
let user2= createUser("Karan",112,15);
console.group(user1.name);
console.log("user1:",user1);
console.log("original name",user1.name);
console.log("id",user1.id);
console.log("project:",user1.noOfProjects);
console.log("get project", user1.getProjects());
console.log("increment project",user1.incrementProjects());
console.log("increment project",user1.incrementProjects());
console.log("increment project",user1.incrementProjects());
console.log("decrement project",user1.decrementProjects());
console.log("changed name",user1.changeName("Sudhanshu"))
console.groupEnd();

console.group(user2.name);
console.log("user2:", user2);
console.log("original name",user2.name);
console.log("id",user2.id);
console.log("project:",user2.noOfProjects);
console.log("get project", user2.getProjects());
console.log("increment project",user2.incrementProjects());
console.log("increment project",user2.incrementProjects());
console.log("increment project",user2.incrementProjects());
console.log("decrement project",user2.decrementProjects());
console.log("changed name",user2.changeName("raghu"))
console.groupEnd();


// using Pseudoclassical way
function CreateUser(name,id,noOfProjects){
    this.name = name;
    this.id= id;
    this.noOfProjects = noOfProjects;
}

CreateUser.prototype = {
    getProjects(){
        return this.noOfProjects;
    },
    changeName(newName){
        this.name = newName;
        return this.name;
    },
    incrementProjects(){
        return ++this.noOfProjects;
    },
    decrementProjects(){
        return --this.noOfProjects;
    }
}

let user1 =new CreateUser("Manish",111,10);
let user2= new CreateUser("Karan",112,15);

console.group(user1.name);
console.log("user1:",user1);
console.log("original name",user1.name);
console.log("id",user1.id);
console.log("project:",user1.noOfProjects);
console.log("get project", user1.getProjects());
console.log("increment project",user1.incrementProjects());
console.log("increment project",user1.incrementProjects());
console.log("increment project",user1.incrementProjects());
console.log("decrement project",user1.decrementProjects());
console.log("changed name",user1.changeName("Sudhanshu"))
console.groupEnd();

console.group(user2.name);
console.log("user2:", user2);
console.log("original name",user2.name);
console.log("id",user2.id);
console.log("project:",user2.noOfProjects);
console.log("get project", user2.getProjects());
console.log("increment project",user2.incrementProjects());
console.log("increment project",user2.incrementProjects());
console.log("increment project",user2.incrementProjects());
console.log("decrement project",user2.decrementProjects());
console.log("changed name",user2.changeName("raghu"))
console.groupEnd();


// using class

class User{
    constructor(name,id,noOfProjects){
        this.name = name;
        this.id= id;
        this.noOfProjects = noOfProjects;
    }
    getProjects(){
        return this.noOfProjects;
    }
    changeName(newName){
        this.name = newName;
        return this.name;
    }
    incrementProjects(){
        return ++this.noOfProjects;
    }
    decrementProjects(){
        return --this.noOfProjects;
    }

}
let user1 =new User("Manish",111,10);
let user2= new User("Karan",112,15);

console.group(user1.name);
console.log("user1:",user1);
console.log("original name",user1.name);
console.log("id",user1.id);
console.log("project:",user1.noOfProjects);
console.log("get project", user1.getProjects());
console.log("increment project",user1.incrementProjects());
console.log("increment project",user1.incrementProjects());
console.log("increment project",user1.incrementProjects());
console.log("decrement project",user1.decrementProjects());
console.log("changed name",user1.changeName("Sudhanshu"))
console.groupEnd();

console.group(user2.name);
console.log("user2:", user2);
console.log("original name",user2.name);
console.log("id",user2.id);
console.log("project:",user2.noOfProjects);
console.log("get project", user2.getProjects());
console.log("increment project",user2.incrementProjects());
console.log("increment project",user2.incrementProjects());
console.log("increment project",user2.incrementProjects());
console.log("decrement project",user2.decrementProjects());
console.log("changed name",user2.changeName("raghu"))
console.groupEnd();
