async function handleFileUpload(event) {
  console.log(event);
  var videoSrc = window.URL.createObjectURL(event.target.files[0]);

  var videoEl = document.createElement("video");
  videoEl.src = videoSrc;
  videoEl.type = "video/mp4";
  videoEl.controls = true;
  document.body.insertBefore(videoEl, document.body.firstChild);
}

export { handleFileUpload };
