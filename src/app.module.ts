import { Module } from '@nestjs/common';
import { InMemoryQuestionRepository } from './adapter/out/persistence/InMemoryQuestionRepository';
import { QUESTION_REPOSITORY, QuestionRepository } from "src/application/port/out/persistence/question/question.repository";
import { CREATE_QUIZZ_USE_CASE } from './application/port/in/quizz/create-quizz.use-case';
import { CreateQuizzService } from './application/service/quizz/create-quizz.service';
import { QuizzController } from './adapter/in/rest/quizz.controller';

@Module({
  imports: [],
  controllers: [QuizzController],
  providers: [
    {
      provide: QUESTION_REPOSITORY,
      useClass: InMemoryQuestionRepository
    },
    {
      provide: CREATE_QUIZZ_USE_CASE,
      useClass: CreateQuizzService
    }
  ],
})
export class AppModule {}
