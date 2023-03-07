import { parseFfmpegCommand } from "../js/modules/commandParser";

test("handles invalid input", () => {
  expect(() => parseFfmpegCommand(null)).toThrow();
  expect(() => parseFfmpegCommand("")).toThrow();
  expect(() => parseFfmpegCommand("   ")).toThrow();
  expect(() => parseFfmpegCommand(undefined)).toThrow();
});

test("handles simple command", () => {
  const result = parseFfmpegCommand("ffmpeg -i input.mov output.mp4");
  const expectedResult = ["-i", "input.mov", "output.mp4"];

  expect(result).toHaveLength(3);
  expect(result).toMatchObject(expectedResult);
});
