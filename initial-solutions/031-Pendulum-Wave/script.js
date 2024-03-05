const dotArea = document.querySelector(".dot-area");

for (let i = 1; i <= 20; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dot.style.setProperty("--i", i);
  dotArea.appendChild(dot);
}
