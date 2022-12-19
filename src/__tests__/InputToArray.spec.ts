import { InputToArray } from "../InputToArray";

jest.mock("../InputToArray");

describe("InputToArray", () => {
  afterEach(() => jest.clearAllMocks());

  describe("splitInput", () => {
    it("should be able to split the input witout comma into an array of numbers", () => {
      const inputToArray = new InputToArray("101010");
      const spy = jest
        .spyOn(inputToArray, "splitInput")
        .mockReturnValueOnce([1, 0, 1, 0, 1, 0]);

      expect(inputToArray.splitInput()).toEqual([1, 0, 1, 0, 1, 0]);
      expect(spy).toBeCalledTimes(1);
    });

    it("should be able to split the input with comma into an array of numbers", () => {
      const inputToArray = new InputToArray("1010,10");
      const spy = jest
        .spyOn(inputToArray, "splitInput")
        .mockReturnValueOnce([1, 0, 1, 0, 1, 0]);

      expect(inputToArray.splitInput()).toEqual([1, 0, 1, 0, 1, 0]);
      expect(spy).toBeCalledTimes(1);
    });
  });
});
