import { executeCommand } from "./transcoder.js";
import { parseFfmpegCommand } from "./commandParser.js";
import { isVideoFile } from "./utils.js";

async function handleExecuteEvent() {
  const msg = document.getElementById("msg-container");
  const rawCommand = document.getElementById("command").value;

  const commandArgs = parseFfmpegCommand(rawCommand);

  msg.classList.remove("hidden");

  let files = document.getElementById("uploader").files;

  const data = await executeCommand(files[0], commandArgs);

  const status = document.getElementById("status-msg");
  status.innerText = "Command completed successfully.";
  status.classList.remove("italic");
  status.classList.add("font-bold");

  // Need to set this up based on output file type
  if (false) {
    const img = document.getElementById("thumbnail");
    img.classList.remove("hidden");
    img.src = URL.createObjectURL(
      new Blob([data.buffer], { type: "image/jpeg" })
    );
  } else {
    const video = document.getElementById("output-video");
    video.classList.remove("hidden");
    video.src = URL.createObjectURL(new Blob([data.buffer]));
    video.load();
  }
}

export { handleExecuteEvent };
