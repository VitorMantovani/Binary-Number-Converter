/**
 * This class is responsible for catching binary's first character index to be used in the binary to decimal calculus.
 * @author Vitor Mantovani
 */
export class IndexCatcher {
    /**
     * @constructor
     * @param {string} binary = The binary number
     */
    constructor (private binary: string) {}

    /**
     * This method is responsible for catching binary's first character index.
     * @returns {number} - The index of first binary's character.
     */    
    catchInicialIndex() {
        const splitedInput: string[] = this.binary.split("");
        
        let index: number = 0;

        if (splitedInput.includes(",")) {
            const charsAfterComma: string[] = splitedInput.slice(splitedInput.indexOf(",") + 1);
            index = -charsAfterComma.length;
            return index;
        }
        return index;
    }
}