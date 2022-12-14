export class ValidateInput {

    constructor(private input: string) {}

    isInputEmpty(): boolean {
        if(!this.input) throw new Error("Input is empty!");
        return false;
    }

    isBinary(): boolean {
       const inputSplited = this.input.split("");
       const ischaractersBinary = inputSplited.every((value: string) => value === "0" || value === "1" || value === ",");
       
       return ischaractersBinary;
    }   
}
