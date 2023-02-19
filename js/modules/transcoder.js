async function executeCommand(file) {
  const { createFFmpeg, fetchFile } = FFmpeg;
  const ffmpeg = createFFmpeg({ log: true });

  const { name } = file;

  await ffmpeg.load();
  ffmpeg.FS("writeFile", name, await fetchFile(file));

  // ffmpeg -i input.mp4 -ss 00:00:03 -vframes 1 -q:v 2 output.jpg
  await ffmpeg.run(
    "-i",
    name,
    "-ss",
    "00:00:03",
    "-vframes",
    "1",
    "-q:v",
    "2",
    "output.jpg"
  );

  return ffmpeg.FS("readFile", "output.jpg");
}

export { executeCommand };
