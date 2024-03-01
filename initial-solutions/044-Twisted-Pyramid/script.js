const container = document.querySelector(".container");

for (let i = 1; i <= 20; i++) {
  const div = document.createElement("div");

  div.className = `rect rect-${i}`;

  container.appendChild(div);
}
