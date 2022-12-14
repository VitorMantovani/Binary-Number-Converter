export class BinaryToDecimal {
  constructor(private array: number[], private index: number) {}

  convertBinary(): number {
    const decimalNumber = this.array.reduceRight((decimal, algo) => {
        decimal += algo * Math.pow(2, this.index)
        this.index++
        return decimal;
    }, 0)
    return decimalNumber;
  }
}
