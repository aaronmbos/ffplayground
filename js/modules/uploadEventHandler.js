import { getFileExtension } from "./utils.js";

async function handleFileUploadEvent(event) {
  try {
    if (!event.target.files[0]) {
      throw Error("No file selected.");
    }

    if (event.target.files.length > 1) {
      throw Error("Only one file can be selected.");
    }

    const file = event.target.files[0];
    const fileName = file.name;

    setFileExtension(fileName);
  } catch (error) {
    console.error(error);
  }
}

const setFileExtension = (fileName) => {
  const fileExtension = getFileExtension(fileName);

  document.getElementById("input-fmt-selected").innerHTML = fileExtension;
  document.getElementById("input-fmt-selected").classList.remove("hidden");
  document.getElementById("input-fmt-default").classList.add("hidden");
};

export { handleFileUploadEvent };
