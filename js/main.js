import { handleExecuteEvent } from "./modules/executeEventHandler.js";

import {
  handleQuickActionSelect,
  handleConvertButtonClick,
} from "./modules/quickActionEventHandler.js";

import { handleFileUploadEvent } from "./modules/uploadEventHandler.js";

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
