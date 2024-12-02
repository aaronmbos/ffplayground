const videoFileExtensions = ["webm", "ogg", "mov", "mp4"];

const isVideoFile = (fileName) =>
  videoFileExtensions.includes(getFileExtension(fileName).trim());

const downloadFile = (data, fileName) => {
  const url = URL.createObjectURL(new Blob([data.buffer]));

  // Create a temporary anchor element
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName; // Set the download attribute with desired filename

  // Programmatically click the anchor to trigger download
  document.body.appendChild(a);
  a.click();

  // Clean up
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const getFileExtension = (fileName) => fileName.split(".").pop();

export { isVideoFile, downloadFile, getFileExtension };
