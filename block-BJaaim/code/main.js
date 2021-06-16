console.log(questions);
// let arr= [];


class Question{
    constructor(title,options,correctAnswer){
        this.title  = title;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.answer = +prompt("Please give your prefrence");
    }
    isCorrect(answer){
        (this.answer === answer)? true:false;
    }
    getCorrectAnswer(){
        return `Correct anwer is ${this.correctAnswer}` 
    }
    createUI(){
        let h2 = document.createElement("h2");
        this.options.forEach(option => {
            let input = document.createElement("input");
            input.setAttribute("type","radio");
            input.setAttribute("name")
        })
    } 
}

