import { executeCommand } from "./transcoder.js";
import { parseFfmpegCommand } from "./commandParser.js";

async function handleExecuteEvent() {
  const msg = document.getElementById("msg-container");
  const rawCommand = document.getElementById("command").value;

  const commandArgs = parseFfmpegCommand(rawCommand);

  msg.classList.remove("hidden");

  let files = document.getElementById("uploader").files;

  const data = await executeCommand(files[0], commandArgs);

  const img = document.getElementById("thumbnail");
  img.classList.remove("hidden");

  const status = document.getElementById("status-msg");
  status.innerText = "Command completed successfully.";
  status.classList.remove("italic");
  status.classList.add("font-bold");

  img.src = URL.createObjectURL(
    new Blob([data.buffer], { type: "image/jpeg" })
  );
}

export { handleExecuteEvent };
