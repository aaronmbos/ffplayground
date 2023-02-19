import { executeCommand } from "./transcoder.js";

async function handleUploadEvent({ target: { files } }) {
  const msg = document.getElementById("msg-container");
  msg.classList.remove("hidden");

  const data = await executeCommand(files[0]);

  const img = document.getElementById("thumbnail");
  img.classList.toggle("hidden");

  const status = document.getElementById("status-msg");
  status.innerText = "Command completed successfully.";
  status.classList.toggle("italic");
  status.classList.add("font-bold");

  img.src = URL.createObjectURL(
    new Blob([data.buffer], { type: "image/jpeg" })
  );
}

export { handleUploadEvent };
