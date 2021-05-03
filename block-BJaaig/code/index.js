let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // output - "Hello John" / error 
console.log(user2.sayHello()); // output - Hello Arya/ error
console.log(user.sayHello.call(user2)); // output - Hello Arya / error
console.log(user.sayHello.call(user2, 'Hey')); // output - Hey Arya / error
console.log(user.sayHello.apply(user2, ['Hey'])); // output - Hey Arya/ error
console.log(typeof user.sayHello.bind(user2)); // output function / error
console.log(user.sayHello.bind(user2)()); // output / error - error
console.log(userSayHello()); // output - Hello Undefined / error
console.log(typeof userSayHello.bind(user2)); // output - object / error
console.log(userSayHello.bind(user2)()); // output - Hello Arya / error
// console.log(user3.sayHello()); // output - sayHello is not defined / error
console.log(userSayHello.apply(user3)); // output - Hello Bran/ error
console.log(userSayHello.call(user3)); // output - Hello Bran/ error
console.log(typeof new MainUser()); // output  - object/ error
console.log(typeof new MainUser()); // output  - object/ error
console.log(new MainUser().sayHello()); // output - Hello Tyrion / error
console.log(new MainUser().sayHello.call(user2));  // output - Hello Arya/ error
console.log(new MainUser().sayHello.call(user)); // output - hello John/ error
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // output / error- welcome johngit a