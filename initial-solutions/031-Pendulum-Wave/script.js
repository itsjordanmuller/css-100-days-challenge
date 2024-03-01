const circleHolder = document.getElementById("circleHolder");

for (let i = 1; i <= 20; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dot.style.setProperty("--i", i);
  circleHolder.appendChild(dot);
}
