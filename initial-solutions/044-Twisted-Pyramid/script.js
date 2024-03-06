document.addEventListener("DOMContentLoaded", function () {
  const frame = document.querySelector(".frame");
  const rects = [];

  for (let i = 1; i <= 20; i++) {
    const div = document.createElement("div");
    const animationDelay = i * 0.03333;

    div.className = `rect rect-${i}`;
    div.style.width = `${210 - i * 10}px`;
    div.style.height = `${210 - i * 10}px`;
    div.style.top = `${100 + i * 5}px`;
    div.style.left = `${100 + i * 5}px`;
    div.style.borderColor = `rgb(${78 + i * 8}, ${78 + i * 8}, ${78 + i * 8})`;
    div.style.zIndex = `${i}`;
    div.style.animation = `rotate 2s ease-in-out ${animationDelay}s alternate infinite`;

    frame.appendChild(div);
    rects.push(div);
  }

  frame.addEventListener("mouseenter", () => {
    for (const rect of rects) {
      rect.style.animationPlayState = "paused";
    }
  });

  frame.addEventListener("mouseleave", () => {
    for (const rect of rects) {
      rect.style.animationPlayState = "running";
    }
  });
});
