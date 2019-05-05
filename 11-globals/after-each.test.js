afterEach(() => {
  console.log("afterEach");
});

test("test 1", () => {
  console.log("test 1");
});

test("test 2", () => {
  console.log("test 2");
});

// 出力
//  test 1
//  afterEach
//  test 2
//  afterEach
