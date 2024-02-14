document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  for (let i = 1; i <= 10; i++) {
    const ring = document.createElement("div");
    ring.className = `ring ring-${i}`;
    const dotsPerCircle = 12 + i * 6;

    for (let j = 1; j <= dotsPerCircle; j++) {
      const dot = document.createElement("div");
      dot.className = `dot dot-${j}`;
      dot.innerHTML = '<div class="fill"></div>';
      ring.appendChild(dot);
    }

    container.appendChild(ring);
  }
});
