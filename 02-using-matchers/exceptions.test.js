// 特定の関数が呼び出されたときにエラーをスローすることをテストしたい場合は、toThrowを使用してください

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // 正確なエラーメッセージや正規表現を使うこともできます
  expect(compileAndroidCode).toThrow("you are using the wrong JDK");
  expect(compileAndroidCode).toThrow(/JDK/);
});
