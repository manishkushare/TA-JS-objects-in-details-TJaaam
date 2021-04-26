// //----------- without object ---------------//

// // --------first question
// // we need to create so much variable
// // data
// let title1 = "What is capital of India?";
// let options1 = ["Delhi","Mumbai","Ahmedabad","Dharamshala"];
// let correctAnswerIndex1 = 0;
// let answer1 = +prompt("enter a your selected option",0);

// function isAnswerCorrect(index){
//     if(index === correctAnswerIndex1){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// // methods
// function getCorrectAnswer(){
//     return correctAnswerIndex1;
// }

// // isAnswerCorrect();
// if(isAnswerCorrect(answer1)){
//     alert("You got it right!")
// }
// else {
//     alert(`${getCorrectAnswer()}: correct answeer`);
// }


// // -----------second question
// //data
// let title2 = "What is economical capital of India?";
// let options2 = ["Delhi","Mumbai","Ahmedabad","Dharamshala"];
// let correctAnswerIndex2 = 1;
// let answer2 = +prompt("enter a your selected option",0);
// //methods
// function isAnswerCorrect(index){
//     if(index === correctAnswerIndex2){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function getCorrectAnswer(){
//     return correctAnswerIndex2;
// }

// // isAnswerCorrect();
// if(isAnswerCorrect(answer2)){
//     alert("You got it right!")
// }
// else {
//     alert(`${getCorrectAnswer()}: correct answeer`);
// }




// // ---------------with objects ---------------//

// let question1 = {
//     title:  "What is capital of India?",
//     options : ["Delhi","Mumbai","Ahmedabad","Dharamshala"],
//     correctAnswerIndex :0,
//     ansewr : +prompt("enter your answer",0),
//     isAnswerCorrect(index){
//         if(index === question1.correctAnswerIndex){
//             return true;
//         }
//         else {
//             return false;
//         }
//     },
//     getCorrectAnswer(){
//         return  question1.correctAnswerIndex;
//     },
// }

// let question2 = {
//     title:  "What is economical capital of India?",
//     options : ["Delhi","Mumbai","Ahmedabad","Dharamshala"],
//     correctAnswerIndex :1,
//     ansewr : +prompt("enter your answer",0),
//     isAnswerCorrect(index){
//         if(index === question2.correctAnswerIndex){
//             return true;
//         }
//         else {
//             return false;
//         }
//     },
//     getCorrectAnswer(){
//         return  question2.correctAnswerIndex;
//     },
// }

// if(question1.isAnswerCorrect(question1.ansewr)){
//     alert("You got it correct, champ!!1")
// }
// else {
//     alert(`correct answer is ${question1.getCorrectAnswer()}`)
// }

// if(question2.isAnswerCorrect(question2.ansewr)){
//     alert("You got it correct, champ!!1")
// }
// else {
//     alert(`correct answer is ${question2.getCorrectAnswer()}`)
// }


// -----------use a function to crate object --------------//

// function createQuestions(title,options,correctAnswerIndex){
//     let question = {};
//     // data
//     question.title = title;
//     question.options = options;
//     question.correctAnswerIndex = correctAnswerIndex;
//     question.answer = +prompt("enter your answer",0)
//     //methods
//     question.isAnswerCorrect = function(index){
//         if(index === question.correctAnswerIndex){
//             return true;
//         }
//         else {
//             return false;
//         }
//     };
//     question.getCorrectAnswer = function(){
//         return question.correctAnswerIndex;
//     };
//     if(question.isAnswerCorrect(question.answer)){
//         alert("You got it right, champ!!!");
//     }
//     else {
//         alert(`correct answer is at index : ${question.getCorrectAnswer()} which is ${question.options[question.getCorrectAnswer()]}`)
//     };
//     return question;  
// }

// let question1 = createQuestions("What is the capital of India?",["Delhi","Mumbai","Ahmedabad","Dharamshala"],0,)

// let question2 = createQuestions("What is the economical capital of India?",["Delhi","Mumbai","Ahmedabad","Dharamshala"],1)




// ------------ use this keyword--------//

function createQuestions(title,options,correctAnswerIndex){
    let question = {};
    // data
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.answer = +prompt("enter your answer",0);

    // methods
    question.isAnswerCorrect = function(index){
        if(index === this.correctAnswerIndex){
            return true;
        }
        else {
            return false;
        }
    };

    question.getCorrectAnswer = function(){
        return this.correctAnswerIndex;
    };

    if(question.isAnswerCorrect(question.answer)){
        alert("You got it right, champ!!!")
    }
    else {
        alert(`correct answer is: ${question.getCorrectAnswer()} which is ${question.options[question.getCorrectAnswer()]}`)
    }

return question;
}

let question1 = createQuestions("What is the capital of India?",["Delhi","Mumbai","Ahmedabad","Dharamshala"],0,)

let question2 = createQuestions("What is the economical capital of India?",["Delhi","Mumbai","Ahmedabad","Dharamshala"],1)

