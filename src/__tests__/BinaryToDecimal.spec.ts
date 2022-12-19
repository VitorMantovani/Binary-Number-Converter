import { BinaryToDecimal } from "../BinaryToDecimal";

jest.mock("../BinaryToDecimal")

describe("BinaryToDecimal", () => {
    afterEach(() => jest.clearAllMocks());

    describe("convertBinary", () => {
        it("should be able to convert binary number to decimal", () => {
            const binaryToDecimal = new BinaryToDecimal([1,0,1,0,1,0], -2);
            const spy = jest.spyOn(binaryToDecimal, "convertBinary").mockReturnValueOnce(10.5);

            expect(binaryToDecimal.convertBinary()).toBe(10.5);
            expect(spy).toHaveBeenCalledTimes(1);
        })
    })
});