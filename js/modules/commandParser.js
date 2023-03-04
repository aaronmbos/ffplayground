function parseFfmpegCommand(rawCommand) {
  if (!rawCommand) {
    throw new Error("Invalid command");
  }

  const rawOptions = rawCommand.replace("ffmpeg", "");

  let parsedOptions = [];
  let optionSeparator = [];
  let currentOption = [];
  for (let index = 0; index < rawOptions.length; index++) {
    const val = rawOptions[index];

    // This logic isn't quite right to account for spaces and quotes
    if (val === " " || val === '"') {
      if (optionSeparator.length === 0) {
        optionSeparator.push(val);
        continue;
      } else {
        parsedOptions.push(currentOption.join(""));
        currentOption = [];
        optionSeparator = [];
      }
    } else {
      currentOption.push(val);
    }
  }
  console.log(parsedOptions);
  return parsedOptions;
}

export { parseFfmpegCommand };
