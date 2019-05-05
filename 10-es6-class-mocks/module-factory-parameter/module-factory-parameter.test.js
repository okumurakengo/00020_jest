import SoundPlayer from "./sound-player";
import SoundPlayerConsumer from "./sound-player-consumer";
const mockPlaySoundFile = jest.fn();
jest.mock("./sound-player", () => {
  return jest.fn().mockImplementation(() => {
    return { playSoundFile: mockPlaySoundFile };
  });
});

it("We can check if the consumer called a method on the class instance", () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = "song.mp3";
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});
