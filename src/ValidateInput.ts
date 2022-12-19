/**
 * This class is responsible for the validations of the binary received as input.
 * @author Vitor Mantovani
 */
export class ValidateInput {
    /**
     * @constructor
     * @param {string} - The binary to validate. 
     */
    constructor(private binary: string) {}
    /**
     * This method checks if the input is empty or not.
     * @returns {boolean} - False if the input is empty.
     */
    isInputEmpty(): boolean {
        if(!this.binary) throw new Error("Input is empty!");
        return false;
    }
    /**
     * This method checks if the input passed is a binary or not.
     * @returns {boolean} - True if the input is a binary, otherwise returns false if the 
     * input is not a binary
     */
    isBinary(): boolean {
       const inputSplited: string[] = this.binary.split("");
       const isinputBinary: boolean = inputSplited.every((value: string) => ["0", "1", ","].includes(value));
       if (!isinputBinary) throw new Error("Input is not a binary!")
       
       return isinputBinary;
    }   
}
