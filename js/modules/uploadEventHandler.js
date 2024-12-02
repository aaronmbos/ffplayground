import { getFileExtension } from "./utils.js";

async function handleFileUploadEvent(event) {
  const file = event.target.files[0];
  const fileName = file.name;

  setFileExtension(fileName);
}

const setFileExtension = (fileName) => {
  const fileExtension = getFileExtension(fileName);

  document.getElementById("input-fmt-selected").innerHTML = fileExtension;
  document.getElementById("input-fmt-selected").classList.toggle("hidden");
  document.getElementById("input-fmt-default").classList.toggle("hidden");
};

export { handleFileUploadEvent };
