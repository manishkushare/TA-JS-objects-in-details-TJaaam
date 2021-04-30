console.log(this.document === document); // Output true
// ------------

console.log(this === window); //Output true

// ------------

var myFunction = function () {
  console.log(this);
};
myFunction(); // Output it will point to window object. Becuase, whenver we see this, we need to thin about types of bindding.It is default bibding, where there is nothing on the left of the function call , hence this, inside that particular function will point to window object

// ------------

function f1() {
  'use strict';
  return this;
}
console.log(f1() === window); //Output flase, Becuase first of all, will see what type of binding it is, it's default bin ding in which this points to window object. But, at the same time,  we have used strict mode, In strict mode, defualt binding is not included, hence it will return false, otherwise if we would have not used strict mode, it woild return true.

// ------------

function foo() {
  console.log('Simple function call');
  console.log(this === window);
}

foo(); //Output ??
// "Simple function call"
// true

// ------------

// This for IIFE
(function () {
  console.log('Anonymous function invocation');
  console.log(this === window);
})(); //Output
// Anonymous function invocation
//  true

// ------------

var myObject = {};
myObject.someMethod = function () {
  console.log(this);
};
myObject.someMethod(); //Value Of This - myObject

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); // Outpu Name: John Reedt
let person2 = new Person('Paul', 'Adams');
person2.displayName(); // Output Name: Paul Adams

// ------------

function foo() {
  'use strict';
  console.log('Simple function call');
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
};

user.foo(); // Output false
let fun1 = user.foo1;
fun1(); // Output ?? true
user.foo1(); // Output ?? false

// ------------

this.x = 9;
var obj = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

obj.getX(); // Output ?? 81

var retrieveX = obj.getX;
retrieveX(); //Output ?? 9 

var boundGetX = retrieveX.bind(obj);
boundGetX(); // Output ?? 81

// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); // Output
let person2 = new Person('Paul', 'Adams');
person2.displayName(); // Output

person.displayName.call(person2); // Output ??

// ------------

const a = {
  a: 'a',
};
const obj = {
  getThis: () => this,
  getThis2() {
    return this;
  },
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

// Output
obj.getThis();// window object

// Output
obj.getThis.call(a); //window object

// Output
obj.getThis2(); // obj object

// Output
obj.getThis2.call(a); // a object

// Output
obj.getThis3(); // window obj

// Output
obj.getThis4(); // obj object

// -------------

let person = {
  name: 'Jay',
  greet: function () {
    console.log('hello, ' + this.name);
  },
};

person.greet(); // output "hello Jay"

let greet = person.greet;
greet(); // output- hello

// -------------

let name = 'Jay Global';
let person = {
  name: 'Jay Person',
  details: {
    name: 'Jay Details',
    print: function () {
      return this.name;
    },
  },
  print: function () {
    return this.name;
  },
};
console.log(person.details.print()); // output? "Jay Details"
console.log(person.print()); // output? "Jay Person"

let name1 = person.print;
let name2 = person.details;

console.log(name1()); // output? ""
console.log(name2.print()); // output? "Jay details"

// --------

let outerFn = function () {
  let n = 5;
  console.log(innerItem);
  let innerFn = function () {
    let innerItem = 'inner';
    console.log(n);
  };
  return innerFn;
};

outerFn()();// error - innerItem is not defined

// -----------

let object = {
  data: [1, 2, 3],
  dataDouble: [1, 2, 3],
  double: function () {
    console.log('this inside of outerFn double()');
    console.log(this);
    return this.data.map(function (item) {
      console.log(this); // Output ???
      return item * 2;
    });
  },
  doubleArrow: function () {
    console.log('this inside of outerFn doubleArrow()');
    console.log(this);
    return this.dataDouble.map((item) => {
      console.log(this); // Output ???
      return item * 2;
    });
  },
};

object.double();// [2,4,6] inside map this will be window
object.doubleArrow(); // [2,4,6] inside map this wil be onject

// --------------

let bobObj = {
  name: 'Bob',
};

function print() {
  return this.name;
}

let printNameBob = print.bind(bobObj);
console.log(printNameBob()); // output?? Bob

// -------------------

let obj1 = {
  data: [1, 2, 3],
  printFirstData: function () {
    if (this.data.length) return this.data[0];
  },
};

let obj2 = {
  data: [4, 5, 6],
  printSecondData: function () {
    if (this.data.length > 1) return this.data[1];
  },
};

let getSecondData = obj2.printSecondData.bind(obj1);
console.log(getSecondData()); // Output and why ??? 2 because bind copies the function with the value of this inside it as obj1

// --------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

call.says(); // output ??? "Hey, mom just called"

// -----------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.says;

newCall(); // output ??? Hey, undefined just called.

//  -----------------

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: 'mom',
  anotherCaller: anotherCaller,
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.anotherCaller;

newCall(); // output ?? undefined called, too!
