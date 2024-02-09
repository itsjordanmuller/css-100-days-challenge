document.querySelector(".close-button").addEventListener("click", function () {
  document.querySelector(".alert-box").style.transform = "scale(0)";
  setTimeout(
    () => (document.querySelector(".alert-box").style.display = "none"),
    600
  );
});
