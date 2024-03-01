document.addEventListener("DOMContentLoaded", function () {
  const numberOfPaths = 30;
  const numberOfStars = 24;
  const animationDuration = 4;

  const warp = document.querySelector(".warp");

  for (let i = 1; i <= numberOfPaths; i++) {
    const path = document.createElement("div");
    path.classList.add("path", `path-${i}`);
    warp.appendChild(path);

    for (let j = 1; j <= numberOfStars; j++) {
      const star = document.createElement("div");
      star.classList.add("star", `star-${j}`);
      path.appendChild(star);
    }
  }

  let styles = "";

  for (let i = 1; i <= numberOfPaths; i++) {
    const timeOffset = (i - 1) * (animationDuration / numberOfPaths) * -1;
    styles += `.warp .path-${i} { animation: warp ${animationDuration}s cubic-bezier(.98,.02,.97,.12) ${timeOffset}s infinite; }\n`;

    for (let j = 1; j <= numberOfStars; j++) {
      const degree = (360 / numberOfStars) * (j - 1) - Math.random() * 10;
      const offset = 100 - Math.random() * 40;
      styles += `.warp .path-${i} .star-${j} { transform: rotate(${degree}deg) translate3d(0, ${offset}px, 0) scaleY(${
        offset / 100
      }); }\n`;
    }
  }

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
});
