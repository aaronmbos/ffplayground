import { parseFfmpegCommand } from "../js/modules/commandParser";

test("handles invalid input", () => {
  expect(() => parseFfmpegCommand(null)).toThrow();
  expect(() => parseFfmpegCommand("")).toThrow();
});
