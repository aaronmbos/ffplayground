import { handleUploadEvent } from "./modules/uploadEventHandler.js";

document
  .getElementById("uploader")
  .addEventListener("change", handleUploadEvent);
