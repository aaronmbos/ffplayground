const videoFileExtensions = ["webm", "ogg", "mov", "mp4"];

const isVideoFile = (fileName) =>
  videoFileExtensions.includes(getFileExtension(fileName).trim());

const downloadFile = (data, fileName) => {
  const url = URL.createObjectURL(new Blob([data.buffer]));
  const a = document.createElement("a");

  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const getFileExtension = (fileName) => fileName.split(".").pop();

export { isVideoFile, downloadFile, getFileExtension };
