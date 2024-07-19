import { Question } from "./question";

export class Quizz{
    private questions: Question[];

    constructor(questions: Question[]){
        if(questions === undefined || questions.length === 0){
            throw new Error("quiz can't have no questions.");
        }
        this.questions = questions;
    }

    getQuestions(){
        return this.questions;
    }
}