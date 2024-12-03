import { downloadFile } from "./utils.js";
import { parseFfmpegCommand } from "./commandParser.js";
import { executeCommand } from "./transcoder.js";

function handleQuickActionSelect() {
  try {
    const selectedValue = document.getElementById("quick-action").value;

    switch (selectedValue) {
      case "fmt-conversion":
        document
          .getElementById("fmt-conversion-container")
          .classList.toggle("hidden");
        break;
      default:
        throw Error("Invalid quick action option selected.");
    }
  } catch (error) {
    console.log("An error occurred processing your quick action.");
  }
}

async function handleConvertButtonClick() {
  const elements = getElements();
  resetOutput(elements);
  try {
    elements.outputContainerEl.classList.remove("hidden");
    elements.statusEl.classList.remove("hidden");

    const fileName = elements.uploaderEl.files[0].name;
    const selectedOutput = elements.selectedOutputEl.value;

    let outputFormat = "";
    switch (selectedOutput) {
      case "fmt-mp4":
        outputFormat = "mp4";
        break;
      case "fmt-mov":
        outputFormat = "mov";
        break;
      case "fmt-gif":
        outputFormat = "gif";
        break;
      default:
        throw Error("Invalid output format selected.");
    }

    const convertCommand = `-i ${fileName} ${
      outputFormat == "gif" ? "" : "-c copy"
    } output.${outputFormat}`;
    const commandArgs = parseFfmpegCommand(convertCommand);

    const data = await executeCommand(
      elements.uploaderEl.files[0],
      commandArgs
    );

    downloadFile(data, `output.${outputFormat}`);

    elements.statusEl.innerText = "Conversion completed successfully.";
    elements.statusEl.classList.remove("italic");
    elements.statusEl.classList.add("font-bold");
  } catch (error) {
    handleError(error, elements);
  }
}

const getElements = () => {
  const statusEl = document.getElementById("fmt-status-msg");
  const uploaderEl = document.getElementById("uploader");
  const selectedOutputEl = document.getElementById("convert-output-fmt");
  const outputContainerEl = document.getElementById("fmt-output-container");

  return {
    statusEl,
    uploaderEl,
    selectedOutputEl,
    outputContainerEl,
  };
};

const handleError = (error, { statusEl }) => {
  statusEl.innerText = "An error occurred while converting the file.";
  statusEl.classList.remove("italic");
  statusEl.classList.add("font-bold");
  statusEl.classList.add("text-red-600");
  console.error(error);
};

const resetOutput = ({ outputContainerEl, statusEl }) => {
  outputContainerEl.classList.add("hidden");
  statusEl.innerText = "Converting the file ...";
  statusEl.classList.add("italic");
  statusEl.classList.remove("font-bold");
  statusEl.classList.toggle("hidden");
  if (statusEl.classList.contains("text-red-600")) {
    statusEl.classList.remove("text-red-600");
  }
};

export { handleQuickActionSelect, handleConvertButtonClick };
