"use strict";

jest.useFakeTimers();

describe("infiniteTimerGame", () => {
  test("schedules a 10-second timer after 1 second", () => {
    const infiniteTimerGame = require("../infiniteTimerGame");
    const callback = jest.fn();

    infiniteTimerGame(callback);

    // モック関数が呼び出されたことを確認
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    // 現在保留中のタイマーだけを早送りして使い尽くす
    jest.runOnlyPendingTimers();

    // この時点で、1秒タイマーがコールバックを起動している
    expect(callback).toBeCalled();

    // 新しいタイマーが作成されている
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
  });
});
