import { handleExecuteEvent } from "./modules/executeEventHandler.js";
import { handleFileUpload } from "./modules/uploadFileEventHandler.js";

document
  .getElementById("execute")
  .addEventListener("click", handleExecuteEvent);

document
  .getElementById("uploader")
  .addEventListener("change", handleFileUpload);
