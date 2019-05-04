test("mock implementations sample 1", () => {
  const myMockFn = jest.fn(cb => cb(null, true));

  myMockFn((err, val) => console.log(val));
});

test("mock implementations sample 2", () => {
  jest.mock("./foo");
  const foo = require("./foo");
  foo.mockImplementation(() => 42);
  console.log(foo()); // 42
});

test("mock implementations sample 3", () => {
  const myMockFn = jest
    .fn()
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false));

  myMockFn((err, val) => console.log(val)); // true

  myMockFn((err, val) => console.log(val)); // false
});

test("mock implementations sample 4", () => {
  const myMockFn = jest
    .fn(() => "default")
    .mockImplementationOnce(() => "first call")
    .mockImplementationOnce(() => "second call");

  console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn()); // 'first call', 'second call', 'default', 'default'
});

test("mock implementations sample 5", () => {
  const myObj = {
    myMethod: jest.fn().mockReturnThis()
  };
  console.log(myObj.myMethod() === myObj); // true
});
