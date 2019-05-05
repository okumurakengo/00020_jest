beforeEach(() => {
  console.log("beforeEach");
});

test("test 1", () => {
  console.log("test 1");
});

test("test 2", () => {
  console.log("test 2");
});

// 出力
//  beforeEach
//  test 1
//  beforeEach
//  test 2
