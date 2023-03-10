async function executeCommand(file, commandArgs) {
  const { createFFmpeg, fetchFile } = FFmpeg;
  const ffmpeg = createFFmpeg({ log: true });

  const { name } = file;

  await ffmpeg.load();
  ffmpeg.FS("writeFile", name, await fetchFile(file));

  // Using .apply here to pass in args as an array
  await ffmpeg.run.apply(null, commandArgs);

  return ffmpeg.FS("readFile", commandArgs[commandArgs.length - 1]);
}

export { executeCommand };
