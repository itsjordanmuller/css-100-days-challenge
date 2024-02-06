document.addEventListener("DOMContentLoaded", function () {
  var inputField = document.querySelector(".input-field");
  var suggestionsList = document.querySelector(".suggestions-list");
  var searchButton = document.querySelector(".search-btn");

  inputField.addEventListener("keyup", function () {
    var text = this.value;
    suggestionsList.innerHTML = "";
    if (text.length) {
      suggestionsList.classList.add("active");
      suggestionsList.insertAdjacentHTML(
        "beforeend",
        "<li><b>" + text + "</b></li>"
      );
      suggestionsList.insertAdjacentHTML(
        "beforeend",
        "<li>Veritatis et <b>" + text + "</b></li>"
      );
      suggestionsList.insertAdjacentHTML(
        "beforeend",
        "<li>ut aliquid ex <b>" + text + "</b> vero eos</li>"
      );
    } else {
      suggestionsList.classList.remove("active");
    }
  });

  searchButton.addEventListener("click", function () {
    inputField.focus();
  });
});
