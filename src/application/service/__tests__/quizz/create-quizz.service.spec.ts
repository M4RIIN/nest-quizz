import { CreateQuizzService } from "../../quizz/create-quizz.service";
import { InMemoryQuestionMock } from "./in-memory-question.mock";


describe('CreateQuizzService',()=>{
    it('should create quizz with random unique questions',()=>{
        const questionRepo = new InMemoryQuestionMock();
        const createQuestionService = new CreateQuizzService(questionRepo);

        const quizz = createQuestionService.createRandomQuizz(10);

        expect(quizz.getQuestions().length).toBe(10);
    })
})

