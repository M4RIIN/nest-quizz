import { Injectable } from "@nestjs/common";
import { QuestionRepository } from "../../../application/port/out/persistence/question/question.repository";
import { Answer } from "../../../model/quizz/answer";
import { Question } from "../../../model/quizz/question";



@Injectable()
export class InMemoryQuestionRepository implements QuestionRepository {
    private questions: Question[];

    constructor() {
        this.questions = [
            new Question("Where was Gondor when the Westfold fell?", [
                new Answer('To the Shire', false),
                new Answer('TLDR.', false),
                new Answer('It\'s tricky', true),
                new Answer('At the pub', false)
            ]),
            new Question("Where is the school of witchcraft and wizardry located?", [
                new Answer('Hogwarts', true),
                new Answer('Mordor', false),
                new Answer('Narnia', false),
                new Answer('Neverland', false)
            ]),
            new Question("What is the name of the spaceship in 'Star Wars' that made the Kessel Run in less than twelve parsecs?", [
                new Answer('Millennium Falcon', true),
                new Answer('Star Destroyer', false),
                new Answer('X-Wing', false),
                new Answer('TIE Fighter', false)
            ]),
            new Question("In 'The Matrix', what color pill does Neo take?", [
                new Answer('Red', true),
                new Answer('Blue', false),
                new Answer('Green', false),
                new Answer('Yellow', false)
            ]),
            new Question("Who is the main protagonist in the 'Legend of Zelda' series?", [
                new Answer('Link', true),
                new Answer('Zelda', false),
                new Answer('Ganondorf', false),
                new Answer('Hyrule', false)
            ]),
            new Question("In 'Harry Potter', what is the name of Harry's pet owl?", [
                new Answer('Hedwig', true),
                new Answer('Errol', false),
                new Answer('Pigwidgeon', false),
                new Answer('Scabbers', false)
            ]),
            new Question("What is the fictional African country where 'Black Panther' is set?", [
                new Answer('Wakanda', true),
                new Answer('Zamunda', false),
                new Answer('Genosha', false),
                new Answer('Sokovia', false)
            ]),
            new Question("Who wrote the novel '1984'?", [
                new Answer('George Orwell', true),
                new Answer('Aldous Huxley', false),
                new Answer('Ray Bradbury', false),
                new Answer('Isaac Asimov', false)
            ]),
            new Question("In 'Game of Thrones', what is the name of Jon Snow's direwolf?", [
                new Answer('Ghost', true),
                new Answer('Nymeria', false),
                new Answer('Shaggydog', false),
                new Answer('Summer', false)
            ]),
            new Question("In 'The Lord of the Rings', who destroys the One Ring?", [
                new Answer('Frodo Baggins', true),
                new Answer('Samwise Gamgee', false),
                new Answer('Aragorn', false),
                new Answer('Gandalf', false)
            ])
        ];
    }
    getMaxQuestionPossible(): number {
        return this.questions.length;
    }

    getRandomQuestion(): Question {
        const randomIndex = Math.floor(Math.random() * this.questions.length);
        return this.questions[randomIndex];
    }
}
