test("custom matchers sample 1", () => {
  const mockFunc = jest.fn();
  mockFunc();
  expect(mockFunc).toBeCalled(); // モック関数が少なくとも一度呼び出されました

  let [arg1, arg2] = [1, 2];
  mockFunc(arg1, arg2);
  expect(mockFunc).toBeCalledWith(arg1, arg2); // 指定された引数を使用して、モック関数が少なくとも1回呼び出されました

  expect(mockFunc).lastCalledWith(arg1, arg2); // モック関数への最後の呼び出しは指定された引数で呼ばれました

  expect(mockFunc).toMatchSnapshot(); // すべての呼び出しとモックの名前はスナップショットとして書き込まれます
});

test("custom matchers sample 2", () => {
  const mockFunc = jest.fn().mockName("sampleFunc");
  mockFunc();
  expect(mockFunc.mock.calls.length).toBeGreaterThan(0); // モック関数が少なくとも一度呼び出されました

  let [arg1, arg2] = [1, 2];
  mockFunc(arg1, arg2);
  expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]); // 指定された引数を使用して、モック関数が少なくとも1回呼び出されました

  // モック関数への最後の呼び出しは指定された引数で呼ばれました
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
    arg1,
    arg2
  ]);

  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(1); // モック関数への最後の呼び出しの最初の引数は `1`でした

  expect(mockFunc.getMockName()).toBe("sampleFunc"); // モックネーム
});
