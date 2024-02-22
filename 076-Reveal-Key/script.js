document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-field");
  const resetBtn = document.querySelector(".reset-btn");
  const input = document.querySelector(".text-input");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    resetBtn.style.opacity = "1";
    resetBtn.style.visibility = "visible";
  });

  resetBtn.addEventListener("click", function () {
    form.reset();
    resetBtn.style.opacity = "0";
    setTimeout(() => {
      resetBtn.style.visibility = "hidden";
    }, 500);
  });
});
