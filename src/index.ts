import { BinaryToDecimal } from "./BinaryToDecimal";
import { IndexCatcher } from "./IndexCatcher";
import { InputToArray } from "./InputToArray";
import { ValidateInput } from "./ValidateInput";

const BINARY: string = "1010,10";

const validateInput = new ValidateInput(BINARY);

const inputToArray = new InputToArray(BINARY);

const indexCatcher = new IndexCatcher(BINARY);

if (!validateInput.isInputEmpty() && validateInput.isBinary()) {
    const arrayOfChars: number[] = inputToArray.splitInput();

    const inicialIndex: number = indexCatcher.catchInicialIndex();

    const binaryToDecimal = new BinaryToDecimal(arrayOfChars, inicialIndex);

    const decimal: number = binaryToDecimal.convertBinary();

    console.log(decimal);
}
