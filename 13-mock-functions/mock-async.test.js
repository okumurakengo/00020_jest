test("async test", async () => {
  const m = jest.fn().mockResolvedValue(43);
  console.log(await m()); // 43

  const n = jest
    .fn()
    .mockResolvedValue("default")
    .mockResolvedValueOnce("first call")
    .mockResolvedValueOnce("second call");
  console.log(await n()); // first call
  console.log(await n()); // second call
  console.log(await n()); // default
  console.log(await n()); // default

  const o = jest.fn().mockRejectedValue(new Error("Async error"));
  try {
    await o();
  } catch (e) {
    console.log(e.message); // Async error
  }

  const p = jest
    .fn()
    .mockResolvedValueOnce("first call")
    .mockRejectedValueOnce(new Error("Async error"));
  try {
    console.log(await p()); // first call
    await p();
  } catch (e) {
    console.log(e.message); // Async error
  }
});
