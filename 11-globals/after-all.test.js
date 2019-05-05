afterAll(() => {
  console.log("afterAll");
});

test("test 1", () => {
  console.log("test 1");
});

test("test 2", () => {
  console.log("test 2");
});

// 出力
//  test 1
//  test 2
//  afterAll
