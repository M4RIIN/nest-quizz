import { Question } from "../../../../../model/quizz/question";


export const QUESTION_REPOSITORY = 'QUESTION_REPOSITORY';

export interface QuestionRepository{
    getRandomQuestion(): Question;
    getMaxQuestionPossible(): number;
}