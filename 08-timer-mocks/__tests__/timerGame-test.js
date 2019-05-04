"use strict";

jest.useFakeTimers();

test("waits 1 second before ending the game", () => {
  const timerGame = require("../timerGame");
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

test("calls the callback after 1 second", () => {
  const timerGame = require("../timerGame");
  const callback = jest.fn();

  timerGame(callback);

  // この時点では、コールバックはまだ呼び出されていない
  expect(callback).not.toBeCalled();

  // すべてのタイマーが実行されるまで早送り
  jest.runAllTimers();

  // callbackが呼び出されている
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});

it("calls the callback after 1 second via advanceTimersByTime", () => {
  const timerGame = require("../timerGame");
  const callback = jest.fn();

  timerGame(callback);

  expect(callback).not.toBeCalled();

  // タイマーを1秒進める
  jest.advanceTimersByTime(1000);

  // Now our callback should have been called!
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
