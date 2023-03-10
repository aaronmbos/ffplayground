const videoFileExtensions = ["webm", "ogg", "mov", "mp4"];

const isVideoFile = (fileName) => {
  const [name, extension] = fileName.split(".");

  return videoFileExtensions.includes(extension.trim());
};

export { isVideoFile };
