async function handleFileUpload(event) {
  for (let i = 0; i < event.target.files.length; i++) {
    const file = event.target.files[i];
    var videoSrc = window.URL.createObjectURL(file);

    var videoEl = document.createElement("video");
    videoEl.src = videoSrc;
    videoEl.type = "video/mp4";
    videoEl.controls = true;

    videoEl.addEventListener();

    var videoContainer = document.getElementById("video-container");
    videoContainer.appendChild(videoEl);
  }
}

export { handleFileUpload };
