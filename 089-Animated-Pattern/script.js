document.addEventListener("DOMContentLoaded", function () {
  var horizontal = document.querySelector(".h");
  for (var i = 1; i <= 100; i++) {
    var div = document.createElement("div");
    div.className = "line line-" + i;
    horizontal.appendChild(div);
  }

  var vertical = document.querySelector(".v");
  for (var i = 1; i <= 100; i++) {
    var div = document.createElement("div");
    div.className = "line line-" + i;
    vertical.appendChild(div);
  }
});
