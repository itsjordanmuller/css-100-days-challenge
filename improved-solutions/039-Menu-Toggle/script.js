document.querySelector(".toggle-icon").addEventListener("click", function () {
  this.classList.toggle("stopped");
  document.querySelector(".navigation").classList.toggle("active");
});

document.querySelector(".navigation").addEventListener("click", function () {
  this.classList.remove("active");
  document.querySelector(".toggle-icon").classList.add("stopped");
});
