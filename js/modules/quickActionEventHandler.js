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
  try {
    const fileName = document.getElementById("uploader").files[0].name;
    const selectedOutput = document.getElementById("convert-output-fmt").value;

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

    const convertCommand = `-i ${fileName} -c copy output.${outputFormat}`;
    const commandArgs = parseFfmpegCommand(convertCommand);
    const data = await executeCommand(
      document.getElementById("uploader").files[0],
      commandArgs
    );

    downloadFile(data, `output.${outputFormat}`);
  } catch (error) {
    console.log(error);
    console.log("An error occurred converting your selected file");
  }
}

export { handleQuickActionSelect, handleConvertButtonClick };
