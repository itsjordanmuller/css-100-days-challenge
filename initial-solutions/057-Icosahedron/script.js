document.addEventListener("DOMContentLoaded", function () {
  var d20 = document.querySelector(".d20");

  for (var i = 1; i <= 20; i++) {
    var face = document.createElement("div");
    face.className = `face face-${i}`;

    if (i % 2 === 0 && i <= 12) {
      face.style.borderColor = "transparent transparent #e1e1e1 transparent";
    } else if (i % 2 !== 0 && i <= 12) {
      face.style.borderColor = "transparent transparent #eeeeee transparent";
    }

    if (i >= 13 && i <= 20) {
      face.style.borderColor = "#ffffff transparent transparent transparent";
    }

    d20.appendChild(face);
  }
});
