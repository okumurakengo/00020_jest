it("test", () => {
  expect(1 + 2).toBe(3);
});

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false
      };
    }
  }
});

test("numeric ranges", () => {
  expect(100).toBeWithinRange(90, 110);
  expect(101).not.toBeWithinRange(0, 100);
  expect({ apples: 6, bananas: 3 }).toEqual({
    apples: expect.toBeWithinRange(1, 10),
    bananas: expect.not.toBeWithinRange(11, 20)
  });
});

test("map calls its argument with a non-null argument", () => {
  const mock = jest.fn();
  [1].map(x => mock(x));
  expect(mock).toBeCalledWith(expect.anything());
});

test("map calls its argument with a non-null argument", () => {
  const mock = jest.fn();
  [1].map(x => mock(x));
  expect(mock).toBeCalledWith(expect.anything());
});

function randocall(fn) {
  return fn(Math.floor(Math.random() * 6 + 1));
}

test("randocall calls its callback with a number", () => {
  const mock = jest.fn();
  randocall(mock);
  expect(mock).toBeCalledWith(expect.any(Number));
});

describe("Beware of a misunderstanding! A sequence of dice rolls", () => {
  const expected = [1, 2, 3, 4, 5, 6];
  it("matches even with an unexpected number 7", () => {
    expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(
      expect.arrayContaining(expected)
    );
  });
  it("does not match without an expected number 2", () => {
    expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(
      expect.arrayContaining(expected)
    );
  });
});

test("assertions sample", () => {
  expect.assertions(2);
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
});

test("hasAssertions sample", () => {
  expect.hasAssertions();
  expect(true).toBeTruthy();
  expect(false).toBeFalsy();
});

test("not arrayContaining sample", () => {
  expect(["Alice", "Bob", "Eve"]).toEqual(
    expect.not.arrayContaining(["Samantha"])
  );
});

test("not objectContaining sample", () => {
  expect({ bar: "baz" }).toEqual(expect.not.objectContaining({ foo: "bar" }));
});

test("not stringContaining sample", () => {
  expect("How are you?").toEqual(expect.not.stringContaining("Hello world!"));
});

test("not stringMatching sample", () => {
  expect("How are you?").toEqual(expect.not.stringMatching(/Hello world!/));
});

test("objectContaining sample", () => {
  expect({ bar: "baz", foo: "foo" }).toEqual(
    expect.objectContaining({ bar: "baz" })
  );
});

test("stringContaining sample", () => {
  expect("How are you?").toEqual(expect.stringContaining("you"));
});

test("stringMatching sample", () => {
  expect("Roberto").toEqual(expect.stringMatching(/^[BR]ob/));
});

test("not sample", () => {
  expect("abc").not.toBe("def");
});

test("resolves to lemon", () => {
  return expect(Promise.resolve("lemon")).resolves.toBe("lemon");
});

test("resolves to lemon", async () => {
  await expect(Promise.resolve("lemon")).resolves.toBe("lemon");
  await expect(Promise.resolve("lemon")).resolves.not.toBe("octopus");
});

test("rejects to octopus", () => {
  return expect(Promise.reject(new Error("octopus"))).rejects.toThrow(
    "octopus"
  );
});

test("rejects to octopus", async () => {
  await expect(Promise.reject(new Error("octopus"))).rejects.toThrow("octopus");
});

const can = {
  name: "pamplemousse",
  ounces: 12
};

describe("the can", () => {
  test("has 12 ounces", () => {
    expect(can.ounces).toBe(12);
  });

  test("has a sophisticated name", () => {
    expect(can.name).toBe("pamplemousse");
  });
});

function drinkAll(callback, flavour) {
  if (flavour !== "octopus") {
    callback(flavour);
  }
}

describe("drinkAll", () => {
  test("drinks something lemon-flavoured", () => {
    const drink = jest.fn();
    drinkAll(drink, "lemon");
    expect(drink).toHaveBeenCalled();
  });

  test("does not drink something octopus-flavoured", () => {
    const drink = jest.fn();
    drinkAll(drink, "octopus");
    expect(drink).not.toHaveBeenCalled();
  });
});

test("toHaveBeenCalledTimes sample", () => {
  const drink = jest.fn();
  ["lemon", "octopus"].map(drink);
  expect(drink).toHaveBeenCalledTimes(2);
});

test("toHaveBeenCalledWith sample", () => {
  const drink = jest.fn();
  ["lemon", "octopus"].map(drink);
  expect(drink).toHaveBeenCalledWith("lemon", 0, ["lemon", "octopus"]);
});

test("toHaveBeenLastCalledWith sample", () => {
  const drink = jest.fn();
  ["lemon", "octopus"].map(drink);
  expect(drink).toHaveBeenLastCalledWith("octopus", 1, ["lemon", "octopus"]);
});

test("toHaveBeenNthCalledWith sample", () => {
  const drink = jest.fn();
  ["lemon", "octopus"].map(drink);
  expect(drink).toHaveBeenNthCalledWith(1, "lemon", 0, ["lemon", "octopus"]);
  expect(drink).toHaveBeenNthCalledWith(2, "octopus", 1, ["lemon", "octopus"]);
});

test("toHaveReturned sample", () => {
  const drink = jest.fn(() => true);
  drink();
  expect(drink).toHaveReturned();
});

test("toHaveReturnedTimes sample", () => {
  const drink = jest.fn(() => true);
  drink();
  drink();
  expect(drink).toHaveReturnedTimes(2);
});

test("toHaveReturnedWith sample", () => {
  const beverage = { name: "La Croix" };
  const drink = jest.fn(beverage => beverage.name);

  drink(beverage);

  expect(drink).toHaveReturnedWith("La Croix");
});

test("toHaveLastReturnedWith sample", () => {
  const beverage1 = { name: "La Croix (Lemon)" };
  const beverage2 = { name: "La Croix (Orange)" };
  const drink = jest.fn(beverage => beverage.name);

  drink(beverage1);
  drink(beverage2);

  expect(drink).toHaveLastReturnedWith("La Croix (Orange)");
});

test("toHaveNthReturnedWith sample", () => {
  const beverage1 = { name: "La Croix (Lemon)" };
  const beverage2 = { name: "La Croix (Orange)" };
  const drink = jest.fn(beverage => beverage.name);

  drink(beverage1);
  drink(beverage2);

  expect(drink).toHaveNthReturnedWith(1, "La Croix (Lemon)");
  expect(drink).toHaveNthReturnedWith(2, "La Croix (Orange)");
});

test("toBeCloseTo sample", () => {
  // expect(0.2 + 0.1).toBe(0.3); // 0.3ではなく、0.30000000000000004でテストがうまくいかない
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
});

test("toBeDefined sample", () => {
  function fetchNewFlavorIdea() {
    return true; // もし何も返さなければテストは失敗する
  }
  expect(fetchNewFlavorIdea()).toBeDefined();
});

test("toBeFalsy sample", () => {
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
});

test("toBeGreaterThan sample", () => {
  expect(11).toBeGreaterThan(10);
});

test("toBeGreaterThanOrEqual sample", () => {
  expect(10).toBeGreaterThanOrEqual(10);
  expect(11).toBeGreaterThanOrEqual(10);
});

test("toBeLessThan sample", () => {
  expect(9).toBeLessThan(10);
});

test("toBeLessThanOrEqual sample", () => {
  expect(9).toBeLessThanOrEqual(10);
  expect(10).toBeLessThanOrEqual(10);
});

test("toBeInstanceOf sample", () => {
  class A {}
  expect(new A()).toBeInstanceOf(A);
  expect(() => {}).toBeInstanceOf(Function);
});

test("toBeNull sample", () => {
  expect(null).toBeNull();
});

test("toBeTruthy sample", () => {
  expect(1).toBeTruthy();
  expect("a").toBeTruthy();
  expect(true).toBeTruthy();
});

test("toBeUndefined sample", () => {
  expect({}.hoge).toBeUndefined();
});

test("toBeNaN sample", () => {
  expect("a" / "b").toBeNaN();
});

test("toContain sample", () => {
  expect([1, 2, 3]).toContain(2);
});

test("toContainEqual sample", () => {
  expect([
    { delicious: true, sour: false },
    { hoge: false, fuga: false }
  ]).toContainEqual({ delicious: true, sour: false });
});

test("toEqual sample", () => {
  expect({ flavor: "grapefruit", ounces: 12 }).toEqual({
    flavor: "grapefruit",
    ounces: 12
  });
});

test("toHaveLength sample", () => {
  expect([1, 2, 3]).toHaveLength(3);
  expect("abc").toHaveLength(3);
  expect("").not.toHaveLength(5);
});

test("toMatch sample", () => {
  expect("abcgrapefruitxyz").toMatch(/grapefruit/);
  expect("abcgrapefruitxyz").toMatch(new RegExp("grapefruit"));
});

test("toMatchObject sample", () => {
  const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ["oven", "stove", "washer"],
      area: 20,
      wallColor: "white"
    }
  };
  const desiredHouse = {
    bath: true,
    kitchen: {
      amenities: ["oven", "stove", "washer"],
      wallColor: expect.stringMatching(/white|yellow/)
    }
  };
  expect(houseForSale).toMatchObject(desiredHouse);
});

test("toHaveProperty sample", () => {
  const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ["oven", "stove", "washer"],
      area: 20,
      wallColor: "white",
      "nice.oven": true
    },
    "ceiling.height": 2
  };
  expect(houseForSale).toHaveProperty("bath");
  expect(houseForSale).toHaveProperty("bedrooms", 4);
  expect(houseForSale).not.toHaveProperty("pool");
  expect(houseForSale).toHaveProperty("kitchen.area", 20);
  expect(houseForSale).toHaveProperty("kitchen.amenities", [
    "oven",
    "stove",
    "washer"
  ]);
});

test("toMatchSnapshot sample", () => {
  const myMockFn = jest
    .fn()
    .mockReturnValue("default")
    .mockImplementation(scalar => 42 + scalar)
    .mockName("add42");
  expect(myMockFn).toMatchSnapshot();
});

test("toMatchSnapshot sample", () => {
  const myMockFn = jest
    .fn()
    .mockReturnValue("default")
    .mockImplementation(scalar => 42 + scalar)
    .mockName("add42");
  expect(myMockFn).toMatchInlineSnapshot(`[MockFunction add42]`);
});

test("toStrictEqual sample", () => {
  class LaCroix {
    constructor(flavor) {
      this.flavor = flavor;
    }
  }
  expect(new LaCroix("lemon")).toEqual({ flavor: "lemon" });
  expect(new LaCroix("lemon")).not.toStrictEqual({ flavor: "lemon" });
});

test("toThrow sample", () => {
  expect(() => {
    throw new Error();
  }).toThrow();
});

test("toThrowErrorMatchingSnapshot sample", () => {
  expect(() => {
    throw new Error("hogehoge");
  }).toThrowErrorMatchingSnapshot();
});

test("toThrowErrorMatchingInlineSnapshot sample", () => {
  expect(() => {
    throw new Error("hogehoge");
  }).toThrowErrorMatchingInlineSnapshot(`"hogehoge"`);
});
