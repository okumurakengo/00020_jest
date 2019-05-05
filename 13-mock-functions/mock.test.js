test("mock sample", () => {
  const a = jest.fn();
  console.log(a.getMockName()); // "jest.fn()"
  const b = jest.fn().mockName("hoge");
  console.log(b.getMockName()); // "hoge"

  const c = jest.fn();
  c("a", 1);
  c("b", 2);
  console.log(c.mock.calls); // [ [ 'a', 1 ], [ 'b', 2 ] ]

  const d = jest.fn(x => x + 1);
  d(1);
  d(2);
  console.log(d.mock.results);

  const e = jest.fn();
  const mock1 = new e();
  const mock2 = new e();
  console.log(e.mock.instances[0] === mock1); // true
  console.log(e.mock.instances[1] === mock2); // true

  const f = jest.fn();
  console.log(f.mock.calls); // []
  f(1, 2, 3);
  console.log(f.mock.calls); // [ [ 1, 2, 3 ] ]
  f.mockClear();
  console.log(f.mock.calls); // []

  const g = jest.fn();
  console.log(g.mock.calls); // []
  g(1, 2, 3);
  console.log(g.mock.calls); // [ [ 1, 2, 3 ] ]
  g.mockReset();
  console.log(g.mock.calls); // []

  const h = jest.fn().mockImplementation(scalar => 42 + scalar);
  // or: jest.fn(scalar => 42 + scalar);
  console.log(h(0) === 42); // true
  console.log(h(1) === 43); // true
  console.log(h.mock.calls[0][0] === 0); // true
  console.log(h.mock.calls[1][0] === 1); // true

  const i = jest
    .fn()
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false));
  i((err, val) => console.log(val)); // true
  i((err, val) => console.log(val)); // false

  const j = jest.fn().mockName("fuga");
  console.log(j.getMockName()); // "fuga"

  const k = jest.fn();
  k.mockReturnValue(42);
  console.log(k()); // 42
  k.mockReturnValue(43);
  console.log(k()); // 43

  const l = jest
    .fn()
    .mockReturnValue("default")
    .mockReturnValueOnce("first call")
    .mockReturnValueOnce("second call");

  // 'first call', 'second call', 'default', 'default'
  console.log(l(), l(), l(), l());
});
