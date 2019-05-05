import SoundPlayer from "./sound-player";
import SoundPlayerConsumer from "./sound-player-consumer";
jest.mock("./sound-player"); // モック作成

beforeEach(() => {
  // すべてのインスタンスをクリア
  SoundPlayer.mockClear();
});

it("We can check if the consumer called the class constructor", () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it("We can check if the consumer called a method on the class instance", () => {
  // mockClear()が機能しているため、まだ関数が実行されていないことを確認できる
  expect(SoundPlayer).not.toHaveBeenCalled();

  const soundPlayerConsumer = new SoundPlayerConsumer();
  // constructor が再度呼び出されている
  expect(SoundPlayer).toHaveBeenCalledTimes(1);

  const coolSoundFileName = "song.mp3";
  soundPlayerConsumer.playSomethingCool();

  const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);

  // ↑と同じ内容
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
