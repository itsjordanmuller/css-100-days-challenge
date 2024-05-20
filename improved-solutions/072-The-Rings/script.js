const style = document.createElement("style");
document.head.appendChild(style);

const center = document.querySelector(".center");

for (let i = 1; i <= 10; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle", `circle-${i}`);
  center.appendChild(circle);

  circle.style.animation = `rotate-${i} 5s ease-in-out infinite`;

  const keyframes = `@keyframes rotate-${i} {
    ${i * 4}% {
      transform: rotateX(0) rotateY(0) rotateZ(0);
    }
    100% {
      transform: rotateX(360deg) rotateY(-360deg) rotateZ(0);
    }
  }`;

  style.appendChild(document.createTextNode(keyframes));
}
