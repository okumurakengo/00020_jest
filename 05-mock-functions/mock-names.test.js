test("mock name sample", () => {
  const myMockFn = jest
    .fn()
    .mockReturnValue("default")
    .mockImplementation(scalar => 42 + scalar)
    .mockName("add42");
});
