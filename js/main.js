import {
  handleExecuteEvent,
  handleQuickActionSelect,
  handleConvertButtonClick,
  handleFileUploadEvent,
} from "./modules/executeEventHandler.js";

document
  .getElementById("execute")
  .addEventListener("click", handleExecuteEvent);

document
  .getElementById("quick-action")
  .addEventListener("change", handleQuickActionSelect);

document
  .getElementById("convert-btn")
  .addEventListener("click", handleConvertButtonClick);

document
  .getElementById("uploader")
  .addEventListener("change", handleFileUploadEvent);
