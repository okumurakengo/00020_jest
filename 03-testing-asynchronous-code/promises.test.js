function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("peanut butter"), 1000);
  });
}

function fetchDataErr() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("error"), 1000);
  });
}

test("the data is peanut butter", () => {
  // 必ずreturnしましょう、でないと、promiseの解決を待たずにテストが終了してしまう
  return fetchData().then(data => {
    expect(data).toBe("peanut butter");
  });
});

test("the fetch fails with an error", () => {
  // アサーションが1回行われることを確認しないと、間違ってresolveが実行されてしまった場合に
  // catchに処理が到達せず、テストになりません
  expect.assertions(1);
  // 必ずreturnしましょう、でないと、promiseの解決を待たずにテストが終了してしまう
  return fetchDataErr().catch(e => expect(e).toMatch("error"));
});

test("the data is peanut butter", () => {
  // resolvesマッチャーを使うことで、同じようにテストしてくれます
  return expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", () => {
  // rejectsマッチャーを使うことで、同じようにテストしてくれます
  return expect(fetchDataErr()).rejects.toMatch("error");
});
