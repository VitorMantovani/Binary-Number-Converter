export class BinaryToDecimal {
    constructor(private input: string) {}
    convertSimpleBinary(): number {
        const reversedBinaryChars: number[] = this.input.split("").map(Number).reverse();

        const decimalNumber: number = reversedBinaryChars.reduce((acc, cur, idx) => {
            console.log(idx)
            acc += cur * (Math.pow(2, idx)) 
            return acc
        }, 0)

        return decimalNumber
    }
}