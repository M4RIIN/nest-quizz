import { Answer } from "./answer";

export class Question{
    private question:string;
    private answers:Answer[]

    constructor(question: string, answers: Answer[]){
        this.question = question;
        if(answers === undefined || answers.length === 0){
            throw new Error("question can't have no answer.")
        }
        if(answers.map(asw => asw.isCorrectAnswer()).filter(aws => aws).length != 1){
            throw new Error("Question should have one answer.")
        }
        this.answers = answers;
    }

    getText(){
        return this.question;
    }

    getAnswer(){
        return this.answers;
    }
}