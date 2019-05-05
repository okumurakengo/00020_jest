describe.only("my beverage", () => {
  test("is delicious", () => {
    expect(true).toBeTruthy();
  });

  test("is not sour", () => {
    expect(false).toBeFalsy();
  });
});

describe("my other beverage", () => {
  // ... will be skipped
});
