document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("shapeArea");
  for (var i = 1; i <= 19; i++) {
    var div = document.createElement("div");
    div.className = "section section-" + i;
    container.appendChild(div);
  }
});
