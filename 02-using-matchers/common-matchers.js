test("two plus two is four", () => {
  // expect(2 + 2)と.toBe(4)で等しいことをテストしてくれます
  expect(2 + 2).toBe(4);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  // オブジェクトの値を確認したい場合は、toBeの代わりにtoEqualを使用する
  expect(data).toEqual({ one: 1, two: 2 });
});

test("numbers is not zero", () => {
  // 反対をテストすることもできます
  expect(2 + 1).not.toBe(0);
});
