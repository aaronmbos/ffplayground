const videoFileExtensions = ["webm", "ogg", "mov", "mp4"];

const isVideoFile = (fileName) =>
  videoFileExtensions.includes(fileName.split(".")[1].trim());

export { isVideoFile };
