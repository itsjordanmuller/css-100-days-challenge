let count = 0;
const valueElement = document.querySelector(".value");

document.querySelector(".decrement").addEventListener("click", () => {
  changeValue(-1);
});

document.querySelector(".increment").addEventListener("click", () => {
  changeValue(1);
});

function changeValue(delta) {
  count += delta;
  const oldSpan = valueElement.querySelector("span");
  const newSpan = document.createElement("span");
  newSpan.textContent = count;
  newSpan.classList.add("animate-in");
  valueElement.appendChild(newSpan);

  if (oldSpan) {
    oldSpan.remove();
  }
}
