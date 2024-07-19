export class Answer{
    private text: string;
    private isCorrect: boolean;

    constructor(text: string, isCorrect: boolean){
        if(text === undefined || text.length === 0){
            throw new Error('Answer cannot have no text.')
        }

        this.text = text;
        this.isCorrect = isCorrect ?? false;;
    }

    isCorrectAnswer(){
        return this.isCorrect;
    }
}