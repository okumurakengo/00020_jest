function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

test("using a mock function sample", () => {
  const mockCallback = jest.fn(x => 42 + x);
  forEach([0, 1], mockCallback);

  // モック関数が2回呼び出されたか
  expect(mockCallback.mock.calls.length).toBe(2);

  // 関数の最初の呼び出しの最初の引数が0か
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // 関数への2番目の呼び出しの最初の引数は1か
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // 関数への最初の呼び出しの戻り値は42か
  expect(mockCallback.mock.results[0].value).toBe(42);
});
