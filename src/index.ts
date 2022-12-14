import { BinaryToDecimal } from "./BinaryToDecimal"
import { IndexCatcher } from "./IndexCatcher"
import { InputToArray } from "./InputToArray"
import { ValidateInput } from "./ValidateInput"

const BINARY = "1010,10"

const validateInput = new ValidateInput(BINARY);

const indexCatcher = new IndexCatcher(BINARY);

const inputToArray = new InputToArray(BINARY)

if(!validateInput.isInputEmpty()) {
    if(validateInput.isBinary()) {
        const inicialIndex = indexCatcher.catchInicialIndex()
        const arrayOfChars = inputToArray.splitInput();
        const binaryToDecimal = new BinaryToDecimal(arrayOfChars, inicialIndex);
        const decimal = binaryToDecimal.convertBinary();
        console.log(decimal);
    }
}




