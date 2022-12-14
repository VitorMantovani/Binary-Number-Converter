export class InputToArray {
  constructor(private input: string) {}

  splitInput(): number[] {
    if (this.input.includes(",")) this.input = this.input.replace(",", "");
    const arrayOfChars = this.input.split("").map(Number)
    return arrayOfChars;
  }
}
