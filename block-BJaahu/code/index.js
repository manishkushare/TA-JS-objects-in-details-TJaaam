// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

//- Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
function createQuestion(title,options,correctAnswerIndex){
    let question = Object.create(questionMethods)
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.userAnswer = +prompt("Select your option from 1 to 4",0);
    if(question.isAnswerCorrect(question.userAnswer)){
        alert(`you got it right men!`);
    }
    else {
        alert(question.getCorrectAnswer());     
    }
    return question;
    
}

let questionMethods = {
    isAnswerCorrect(index){
        if(index === this.correctAnswerIndex){
            return true;
        }
        else {
            return false;
        }
    },
    getCorrectAnswer(){
        return `correct answer is :${this.options[this.correctAnswerIndex]} and it's index is :${this.correctAnswerIndex}.`
    }
}




let firstQuestion =  createQuestion(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = createQuestion(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);


// - Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
function Question(title,options,correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    this.answer = +prompt("enter your selected option")
    if(this.isAnswerCorrect(this.answer)){
        alert("You got it right, Broooooooo!!!!!!!!1")
    }
    else{
        alert(this.getCorrectAnswer());
    }
}

Question.prototype = {
    isAnswerCorrect(index){
        if(index === this.correctAnswerIndex){
            return true;
        }
        else {
            return false;
        }
    },
    getCorrectAnswer(){
        return `correct answer is :${this.options[this.correctAnswerIndex]} and it's index is :${this.correctAnswerIndex}.`
    }
}


let firstQuestion = new Question(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = new Question(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);




// using class syntax
class Question{
    constructor(title,options,correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
        this.answer = +prompt("enter your answer");
        if(this.isAnswerCorrect(this.answer)){
        alert("You got it right, Broooooooo!!!!!!!!1")
        }
        else{
            alert(this.getCorrectAnswer());
        }
    }
    isAnswerCorrect(index){
        if(index === this.correctAnswerIndex){
            return true;
        }
        else {
            return false;
        }
    }
    getCorrectAnswer(){
        return `correct answer is :${this.options[this.correctAnswerIndex]} and it's index is :${this.correctAnswerIndex}.`
    }
    
}



let firstQuestion = new Question(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = new Question(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);

