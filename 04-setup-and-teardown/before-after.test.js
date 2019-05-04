// 各テストの実行前に実行される関数
beforeEach(() => {
  console.log("beforeEach");
});

// 各テストの実行後に実行される関数
afterEach(() => {
  console.log("afterEach");
});

// ファイルの先頭で一回だけ実行される関数
beforeAll(() => {
  console.log("beforeAll");
});

// ファイルの最後で一回だけ実行される関数
afterAll(() => {
  console.log("afterAll");
});

test("city database has Vienna", () => {
  expect(true).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(true).toBeTruthy();
});
