import { Answer } from "../../quizz/answer";
import { Question } from "../../quizz/question";
import { Quizz } from "../../quizz/quiz";


describe('Quizz Entity', () => {
    it('should create a quizz with valid questions', () => {
        const answers1 = [
            new Answer('To the Shire', false),
            new Answer('TLDR.', false),
            new Answer('It\'s tricky', true),
            new Answer('At the pub', false)
        ];
        const question1 = new Question("Where was Gondor when the Westfold fell?", answers1);

        const answers2 = [
            new Answer('Hogwarts', true),
            new Answer('Mordor', false),
            new Answer('Narnia', false),
            new Answer('Neverland', false)
        ];
        const question2 = new Question("Where is the school of witchcraft and wizardry located?", answers2);

        const quizz = new Quizz([question1, question2]);
        expect(quizz).toBeDefined();
    });

    it('should throw an error if no questions are provided', () => {
        expect(() => new Quizz([])).toThrow("quiz can't have no questions.");
    });
});
