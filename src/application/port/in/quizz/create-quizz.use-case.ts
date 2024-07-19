import { Quizz } from "../../../../model/quizz/quiz";

export const CREATE_QUIZZ_USE_CASE = 'CREATE_QUIZZ_USE_CASE';

export interface CreateQuizzUseCase{
    createRandomQuizz(size:number): Quizz;
}