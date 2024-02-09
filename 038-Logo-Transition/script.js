document.getElementById("container").addEventListener("click", function () {
  const whiteIcon = document.querySelector(".icon.white");
  const purpleIcon = document.querySelector(".icon.purple");

  if (whiteIcon.classList.contains("big")) {
    whiteIcon.classList.remove("big");
    whiteIcon.classList.add("normal");
  } else {
    whiteIcon.classList.add("big");
    whiteIcon.classList.remove("normal");
  }
  purpleIcon.classList.toggle("normal");
});
