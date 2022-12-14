export class IndexCatcher {
    constructor (private input: string) {}

    
    catchInicialIndex() {
        const splitedInput: string[] = this.input.split("");
        
        let index: number = 0;

        if (splitedInput.includes(",")) {
            const charsAfterComma = splitedInput.slice(splitedInput.indexOf(",") + 1);
            index = -charsAfterComma.length;
            return index;
        }
        return index;
    }
}