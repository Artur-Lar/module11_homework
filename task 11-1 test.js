function getPercents(percent, number) {
  if (
    typeof percent !== "number" ||
    typeof number !== "number" ||
    isNaN(percent) ||
    isNaN(number) ||
    percent < 0 ||
    number < 0
  ) {
    return NaN;
  }
  const result = (percent / 100) * number;
  return result;
}

describe("getPercents", () => {
  it("возвращает правильный результат при корректных входных данных", () => {
    expect(getPercents(20, 100)).toEqual(20);
  });

  it("возвращает NaN при неправильном типе входных данных", () => {
    expect(getPercents("20", "100")).toBeNaN();
  });

  it("возвращает NaN при недопустимых значениях входных данных", () => {
    expect(getPercents(-20, 100)).toBeNaN();
    expect(getPercents(20, -100)).toBeNaN();
    expect(getPercents(-20, -100)).toBeNaN();
  });

  it("возвращает NaN при недостаточном количестве аргументов", () => {
    expect(getPercents(20)).toBeNaN();
    expect(getPercents()).toBeNaN();
  });
});
