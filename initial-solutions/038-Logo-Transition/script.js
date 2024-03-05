document.querySelector(".frame").addEventListener("click", function () {
  const secondaryIcon = document.querySelector(".icon.secondary");
  const primaryIcon = document.querySelector(".icon.primary");

  if (secondaryIcon.classList.contains("big")) {
    secondaryIcon.classList.remove("big");
    secondaryIcon.classList.add("normal");
  } else {
    secondaryIcon.classList.add("big");
    secondaryIcon.classList.remove("normal");
  }
  primaryIcon.classList.toggle("normal");
});
