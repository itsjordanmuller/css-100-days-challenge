document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".container");

  for (var i = 1; i <= 400; i++) {
    var activator = document.createElement("a");
    activator.href = "#";
    activator.className = "activator activator-" + i;
    container.appendChild(activator);
  }

  var cursorTracker = document.createElement("div");
  cursorTracker.className = "cursorTracker";
  container.appendChild(cursorTracker);
});
