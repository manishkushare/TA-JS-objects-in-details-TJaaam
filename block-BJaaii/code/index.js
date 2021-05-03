class Stack{
    constructor(){
        this.stack = [];
    }
    push(value){
        // return this.stack[this.stack.length-1] = value;
         this.stack.push(value);
         return this.stack;
         
        
    }
    pop(){
        // delete this.stack[this.stack.length-1];
        return this.stack.pop();
    }
    peek(value = this.stack.length-1){
        return this.stack[value];
    }
    reverse(){
        return this.stack.reverse();
    }
    isEmpty(){
        if(this.stack.length > 1){
            return false;
        }
        else {
            return true;
        }
    }
    displayStack(){
        return this.stack.join(" ");
    }
    get length(){
        return this.stack.length;
    }

}

let myStack = new Stack();
// console.log(myStack);
myStack.push('One');
myStack.push('Two');
console.log(myStack)
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty());


class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(item){
        // return this.stack[this.stack.length-1] = value;
        return this.queue.push(item);
         
        
    }
    dequeue(){
        // delete this.stack[this.stack.length-1];
        return this.queue.shift();
    }
    peek(value = 0){
        return this.queue[value];
    }
    isEmpty(){
        if(this.queue.length > 1){
            return false;
        }
        else {
            return true;
        }
    }
    displayStack(){
        return this.queue.join(" ");
    }
    get length(){
        return this.queue.length;
    }

}

let atmQueue = new Queue();
atmQueue.enqueue('Aman');
atmQueue.enqueue('John');
atmQueue.enqueue('Rohan');
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true