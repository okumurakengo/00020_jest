describe("my beverage", () => {
  test("is delicious", () => {
    expect(true).toBeTruthy();
  });

  test("is not sour", () => {
    expect(false).toBeFalsy();
  });
});

describe.skip("my other beverage", () => {
  // ... will be skipped
});
