document.addEventListener("DOMContentLoaded", function () {
  var shape = document.getElementById("shape");

  for (var i = 1; i <= 18; i++) {
    var div = document.createElement("div");
    div.className = "ellipse ellipse-" + i;
    shape.appendChild(div);

    var degree = (180 / 18) * (i - 1);
    var animationName = "ellipse-" + i;
    var keyframes = `@keyframes ${animationName} {
        0% {
            transform: rotate(${degree}deg);
            border-radius: 50%;
            border-width: 1px;
        }
        50% {
            transform: rotate(0) scaleX(3.33); /* 2 / 0.6 */
            border-radius: 0%;
        }
        100% {
            transform: rotate(${-1 * degree + 360}deg);
            border-radius: 50%;
            border-width: 1px;
        }
    }`;

    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    div.style.animation = `${animationName} 5s ease-in-out infinite`;
  }
});
