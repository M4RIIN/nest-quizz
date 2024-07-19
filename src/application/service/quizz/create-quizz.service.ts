import { Injectable, Inject } from "@nestjs/common";
import { Question } from "../../../model/quizz/question";
import { Quizz } from "../../../model/quizz/quiz";
import { CreateQuizzUseCase } from "../../port/in/quizz/create-quizz.use-case";
import { QUESTION_REPOSITORY, QuestionRepository } from "../../port/out/persistence/question/question.repository";

@Injectable()
export class CreateQuizzService implements CreateQuizzUseCase{
    

    constructor(@Inject(QUESTION_REPOSITORY) private readonly questionRepository: QuestionRepository){}
    
    createRandomQuizz(size: number): Quizz {
        let questions: Question[] = [];
        const maxPossible = this.questionRepository.getMaxQuestionPossible();
        if(size > maxPossible) size = maxPossible;
        for(let counter: number = 0; counter < size; counter++){
            let question: Question = this.questionRepository.getRandomQuestion();
            while(questions.includes(question)){
               question = this.questionRepository.getRandomQuestion();     
            }
            questions.push(question);
        }
        return new Quizz(questions);
    }

}