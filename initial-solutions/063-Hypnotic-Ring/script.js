document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  for (let i = 1; i <= 50; i++) {
    const ring = document.createElement("div");
    ring.classList.add("ring");
    ring.style.animationDelay = `${i / -5}s`;
    container.appendChild(ring);
  }
});
