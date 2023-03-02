import { handleUploadEvent } from "./modules/uploadEventHandler.js";
import { handleExecuteEvent } from "./modules/executeEventHandler.js";

let urlParams = new URLSearchParams(new URL(window.location).search);

if (!urlParams.has("test")) {
  document
    .getElementById("uploader")
    .addEventListener("change", handleUploadEvent);
} else {
  document.getElementById("test-container").classList.remove("hidden");
  document
    .getElementById("execute")
    .addEventListener("click", handleExecuteEvent);
}
