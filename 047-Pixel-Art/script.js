document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  for (let i = 1; i <= 400; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = `square-${i}`;

    const specialSquares = [
      130, 131, 149, 150, 151, 152, 168, 169, 170, 171, 172, 173, 187, 188, 190,
      191, 193, 194, 207, 208, 209, 210, 211, 212, 213, 214, 229, 232, 248, 250,
      251, 253, 267, 269, 272, 274,
    ];

    if (specialSquares.includes(i)) {
      input.checked = true;
    }

    const label = document.createElement("label");
    label.setAttribute("for", `square-${i}`);
    label.classList.add("tab");

    square.appendChild(input);
    square.appendChild(label);

    container.appendChild(square);
  }
});
