import { ValidateInput } from "../ValidateInput";
jest.mock("../ValidateInput");

describe("ValidateInput", () => {
  afterEach(() => jest.clearAllMocks());

  describe("isInputEmpty", () => {
    it("should be able validate if input is empty", () => {
      const validateInput = new ValidateInput("");
      const spy = jest
        .spyOn(validateInput, "isInputEmpty")
        .mockImplementationOnce(() => {
          throw new Error("Input is empty");
        });

      expect(() => validateInput.isInputEmpty()).toThrowError("Input is empty");
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should be able validate if input is not empty", () => {
      const validateInput = new ValidateInput("101010");
      const spy = jest
        .spyOn(validateInput, "isInputEmpty")
        .mockReturnValueOnce(false);
      expect(validateInput.isInputEmpty()).toBeFalsy();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe("isBinary", () => {
    it("should be able validate if input is not binary", () => {
      const validateInput = new ValidateInput("101012");
      const spy = jest
        .spyOn(validateInput, "isBinary")
        .mockImplementationOnce(() => {
          throw new Error("Input is not a binary");
        });

      expect(() => validateInput.isBinary()).toThrowError(
        "Input is not a binary"
      );
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should be able validate if input is a binary without comma", () => {
      const validateInput = new ValidateInput("101010");
      const spy = jest
        .spyOn(validateInput, "isBinary")
        .mockReturnValueOnce(true);
      expect(validateInput.isBinary()).toBeTruthy();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should be able validate if input is a binary with comma", () => {
      const validateInput = new ValidateInput("1010,10");
      const spy = jest
        .spyOn(validateInput, "isBinary")
        .mockReturnValueOnce(true);
      expect(validateInput.isBinary()).toBeTruthy();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
