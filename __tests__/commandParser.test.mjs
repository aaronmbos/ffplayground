import { parseFfmpegCommand } from "../js/modules/commandParser";

it("handles invalid input", () => {
  expect(() => parseFfmpegCommand(null)).toThrow();
  expect(() => parseFfmpegCommand("")).toThrow();
  expect(() => parseFfmpegCommand("   ")).toThrow();
  expect(() => parseFfmpegCommand(undefined)).toThrow();
});

it("handles a simple command", () => {
  const result = parseFfmpegCommand("ffmpeg -i input.mov output.mp4");
  const expectedResult = ["-i", "input.mov", "output.mp4"];

  expect(result).toHaveLength(expectedResult.length);
  expect(result).toMatchObject(expectedResult);
});

it("handles a command to set output bitrate", () => {
  const result = parseFfmpegCommand(
    "ffmpeg -i input.avi -b:v 64k -bufsize 64k output.avi"
  );
  const expectedResult = [
    "-i",
    "input.avi",
    "-b:v",
    "64k",
    "-bufsize",
    "64k",
    "output.avi",
  ];

  expect(result).toHaveLength(expectedResult.length);
  expect(result).toMatchObject(expectedResult);
});

it("handles a command with filtergraph without spaces", () => {
  const result = parseFfmpegCommand(
    'ffmpeg -i A.avi -i C.mkv -i B.mp4 -filter_complex "overlay" out1.mp4 out2.srt'
  );
  const expectedResult = [
    "-i",
    "A.avi",
    "-i",
    "C.mkv",
    "-i",
    "B.mp4",
    "-filter_complex",
    "overlay",
    "out1.mp4",
    "out2.srt",
  ];

  expect(result).toHaveLength(expectedResult.length);
  expect(result).toMatchObject(expectedResult);
});

it("handles a command with quoted option including spaces", () => {
  const result = parseFfmpegCommand(
    'ffmpeg -i in.avi -metadata title="my title" out.flv'
  );
  const expectedResult = [
    "-i",
    "in.avi",
    "-metadata",
    "title=my title",
    "out.flv",
  ];

  expect(result).toHaveLength(expectedResult.length);
  expect(result).toMatchObject(expectedResult);
});
