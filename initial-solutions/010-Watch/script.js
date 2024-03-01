const dial = document.querySelector(".dial");
const radius = 4600;

for (let i = 0; i < 64; i++) {
  const tick = document.createElement("div");
  tick.className = "tick";
  tick.style.transform = `rotate(${
    i * (360 / 64)
  }deg) translate(-50%, -${radius}%)`;
  dial.appendChild(tick);
}
