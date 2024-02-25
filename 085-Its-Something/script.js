document.addEventListener("DOMContentLoaded", function () {
  const bend = document.querySelector(".bend");
  const numberOfDots = 200;

  for (let i = 1; i <= numberOfDots; i++) {
    const style = document.createElement("style");
    const offset =
      i < 100 ? 0 + (i * i) / 70 : 0 + ((200 - i) * (200 - i)) / 70;

    style.innerHTML = `
            @keyframes bend-${i} {
                0%, 100% {
                    transform: translateY(${offset * -1}px);
                }
                50% {
                    transform: translateY(${offset}px);
                }
            }
        `;
    document.head.appendChild(style);
  }

  for (let i = 1; i <= numberOfDots; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot", `dot-${i}`);
    bend.appendChild(dot);
    dot.style.animation = `bend-${i} 3s ease-in-out infinite`;
  }
});
