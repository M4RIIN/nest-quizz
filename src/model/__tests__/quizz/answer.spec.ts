import { Answer } from "../../quizz/answer";


describe('Answer Entity', () => {
    it('should create an answer with valid parameters', () => {
        const answer = new Answer('To the Shire', false);
        expect(answer.isCorrectAnswer()).toBe(false);
    });

    it('should throw an error if the text is empty', () => {
        expect(() => new Answer('', false)).toThrow('Answer cannot have no text.');
    });

    it('should create an answer with isCorrect defaulting to false', () => {
        const answer = new Answer('To the Shire', undefined);
        expect(answer.isCorrectAnswer()).toBe(false);
    });

    it('should return true for a correct answer', () => {
        const answer = new Answer('It\'s tricky', true);
        expect(answer.isCorrectAnswer()).toBe(true);
    });
});
