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

// async, awaitを使って、同じようにテストすることもできます

test("the data is peanut butter", async () => {
  expect.assertions(1);
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchDataErr();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

// resolves, rejectsマッチャーでも同じようにテストできます

test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  await expect(fetchDataErr()).rejects.toMatch("error");
});
