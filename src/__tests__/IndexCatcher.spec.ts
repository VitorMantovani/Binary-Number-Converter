import { IndexCatcher } from "../IndexCatcher";
jest.mock("../IndexCatcher");

describe("IndexCatcher", () => {
  afterEach(() => jest.clearAllMocks());

  describe("catchInicialIndex", () => {
    it("should be able to validate if is returning the index of input without comma", () => {
      const indexCatcher = new IndexCatcher("101010");
      const spy = jest
        .spyOn(indexCatcher, "catchInicialIndex")
        .mockReturnValueOnce(0);
      expect(indexCatcher.catchInicialIndex()).toBe(0);
      expect(spy).toBeCalledTimes(1);
    });

    it("should be able to validate if is returning the index of input with comma", () => {
      const indexCatcher = new IndexCatcher("1010,10");
      const spy = jest
        .spyOn(indexCatcher, "catchInicialIndex")
        .mockReturnValueOnce(-2);
      expect(indexCatcher.catchInicialIndex()).toBe(-2);
      expect(spy).toBeCalledTimes(1);
    });
  });
});
