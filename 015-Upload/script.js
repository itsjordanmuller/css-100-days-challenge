var droppedFiles = false;
var fileName = "";
var dropzone = document.querySelector(".dropzone");
var button = document.querySelector(".upload-btn");
var uploading = false;
var syncing = document.querySelector(".syncing");
var done = document.querySelector(".done");
var bar = document.querySelector(".bar");
var timeoutID;

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

[
  "drag",
  "dragstart",
  "dragend",
  "dragover",
  "dragenter",
  "dragleave",
  "drop",
].forEach((eventName) => {
  dropzone.addEventListener(eventName, preventDefaults, false);
});

["dragover", "dragenter"].forEach((eventName) => {
  dropzone.addEventListener(
    eventName,
    () => dropzone.classList.add("is-dragover"),
    false
  );
});

["dragleave", "dragend", "drop"].forEach((eventName) => {
  dropzone.addEventListener(
    eventName,
    () => dropzone.classList.remove("is-dragover"),
    false
  );
});

dropzone.addEventListener(
  "drop",
  function (e) {
    droppedFiles = e.dataTransfer.files;
    fileName = droppedFiles[0].name;
    document.querySelector(".filename").innerHTML = fileName;
    document.querySelector(".dropzone .upload").style.display = "none";
  },
  false
);

button.addEventListener("click", function () {
  startUpload();
});

document
  .querySelector("input[type='file']")
  .addEventListener("change", function () {
    fileName = this.files[0].name;
    document.querySelector(".filename").innerHTML = fileName;
    document.querySelector(".dropzone .upload").style.display = "none";
  });

function startUpload() {
  if (!uploading && fileName !== "") {
    uploading = true;
    button.innerHTML = "Uploading...";
    dropzone.style.display = "none";
    syncing.classList.add("active");
    done.classList.add("active");
    bar.classList.add("active");
    timeoutID = window.setTimeout(showDone, 3200);
  }
}

function showDone() {
  button.innerHTML = "Done";
}

function resetUploadUI() {
  console.log("Resetting UI...");
  uploading = false;
  fileName = "";
  document.querySelector(".filename").innerHTML = "";
  document.querySelector(".dropzone .upload").style.display = "";
  dropzone.style.display = "";
  syncing.classList.remove("active");
  done.classList.remove("active");
  bar.classList.remove("active");
  button.innerHTML = "Upload file";
  bar.style.transition = "none";
}

button.addEventListener("click", function () {
  if (button.innerHTML === "Uploading...") {
  } else if (button.innerHTML === "Done") {
    resetUploadUI();
  } else {
    startUpload();
  }
});
