function populateNumbers() {
  const classes = ["thousands", "hundreds", "tens", "units"];
  classes.forEach((cls) => {
    const container = document.querySelector(`.${cls}`);
    for (let i = 0; i <= 9; i++) {
      const span = document.createElement("span");
      span.className = `number-${i}`;
      span.textContent = i;
      container.appendChild(span);
    }
  });
}

document.addEventListener("DOMContentLoaded", populateNumbers);
