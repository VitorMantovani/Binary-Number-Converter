/**
 * This class responsible for converting the given binary into a array of numbers
 * @author Vitor Mantovani 
 */

export class InputToArray {
    /**
     * @param {string} binary - The binary to convert
     * @constructor
     */
  constructor(private binary: string) {}

  /**
   * This method converts the binary passed as a string to an array of numbers
   * @returns {number[]} - The array with the characters from the binary converted to number.
   */
  splitInput(): number[] {
    if (this.binary.includes(",")) this.binary = this.binary.replace(",", "");
    const arrayOfChars: number[] = this.binary.split("").map(Number)
    return arrayOfChars;
  }
}
