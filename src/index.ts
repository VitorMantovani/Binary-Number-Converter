import { BinaryToDecimal } from "./BinaryToDecimal";
import { IndexCatcher } from "./IndexCatcher";
import { InputToArray } from "./InputToArray";
import { ValidateInput } from "./ValidateInput";

const BINARY = "1010,10";

const validateInput = new ValidateInput(BINARY);

const inputToArray = new InputToArray(BINARY);

const indexCatcher = new IndexCatcher(BINARY);

if (!validateInput.isInputEmpty()) {
  if (validateInput.isBinary()) {
    const arrayOfChars = inputToArray.splitInput();

    const inicialIndex = indexCatcher.catchInicialIndex();

    const binaryToDecimal = new BinaryToDecimal(arrayOfChars, inicialIndex);

    const decimal = binaryToDecimal.convertBinary();

    console.log(decimal);
  }
}
