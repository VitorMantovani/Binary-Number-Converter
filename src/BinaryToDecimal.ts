/**
 * This class is responsible for converting the binary into its decimal representation
 * @author Vitor Mantovani
 */

export class BinaryToDecimal {

    /**
     * @constructor
     * @param {number[]} array - The array with all characters of the binary
     * @param {number} index - The index of the first character
     */
  constructor(private array: number[], private index: number) {}

  /**
   * Converts the binary into its decimal representation
   * @returns {number} - The decimal number converted
   */
  convertBinary(): number {
    const decimalNumber = this.array.reduceRight((decimal, algo) => {
        decimal += algo * Math.pow(2, this.index)
        this.index++
        return decimal;
    }, 0)
    return decimalNumber;
  }
}
