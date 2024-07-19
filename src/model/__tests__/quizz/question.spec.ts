import { Answer } from "../../quizz/answer";
import { Question } from "../../quizz/question";


describe('Question Entity', () => {
    it('should create a question with valid parameters', () => {
        const answers = [
            new Answer('To the Shire', false),
            new Answer('TLDR.', false),
            new Answer('It\'s tricky', true),
            new Answer('At the pub', false)
        ];
        const question = new Question("Where was Gondor when the Westfold fell?", answers);
        expect(question).toBeDefined();
    });

    it('should throw an error if no answers are provided', () => {
        expect(() => new Question("Where was Gondor when the Westfold fell?", [])).toThrow("question can't have no answer.");
    });

    it('should throw an error if more than one correct answer is provided', () => {
        const answers = [
            new Answer('To the Shire', false),
            new Answer('TLDR.', true),
            new Answer('It\'s tricky', true),
            new Answer('At the pub', false)
        ];
        expect(() => new Question("Where was Gondor when the Westfold fell?", answers)).toThrow("Question should have one answer.");
    });

    it('should throw an error if no correct answer is provided', () => {
        const answers = [
            new Answer('To the Shire', false),
            new Answer('TLDR.', false),
            new Answer('It\'s tricky', false),
            new Answer('At the pub', false)
        ];
        expect(() => new Question("Where was Gondor when the Westfold fell?", answers)).toThrow("Question should have one answer.");
    });
});
