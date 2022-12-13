export class BinaryToDecimal {
    constructor(private input: string) {}

    convertSimpleBinary(): number {
        const reversedBinaryChars: number[] = this.input.split("").map(Number).reverse();

        const decimalNumber: number = reversedBinaryChars.reduce((acc, cur, idx) => {
            acc += cur * (Math.pow(2, idx)) 
            return acc
        }, 0)

        return decimalNumber
    }

    convertBinaryWithComma(): number {
        const separetedChars: string[] = this.input.split("");

        const charsAfterComma: string[] = separetedChars.slice(separetedChars.indexOf(",") + 1)

        const binaryChars: number[] = this.input.replace(",", "").split("").map(Number);

        let index = -charsAfterComma.length

        const decimalNumber: number = binaryChars.reduceRight((acc, curr) => {
            acc += curr * Math.pow(2, index);
            index++
            return acc;
        }, 0)

        return decimalNumber;
    }
}