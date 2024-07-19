import { Controller, Inject, Get, Query } from "@nestjs/common";
import { CREATE_QUIZZ_USE_CASE, CreateQuizzUseCase } from "../../../application/port/in/quizz/create-quizz.use-case";


@Controller()
export class QuizzController{
    constructor(@Inject(CREATE_QUIZZ_USE_CASE) private readonly createQuizzUseCase: CreateQuizzUseCase){}

    @Get()
    getRandomQuizz(@Query('size') size){
        return this.createQuizzUseCase.createRandomQuizz(size ?? 5);
    }
}