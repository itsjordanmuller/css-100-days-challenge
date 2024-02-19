document.addEventListener("DOMContentLoaded", function () {
  const top = document.querySelector(".top");
  const shade = document.querySelector(".shade");
  const numberOfSlices = 12;

  for (let j = 1; j <= numberOfSlices; j++) {
    const div = document.createElement("div");
    div.className = `slice slice-${j}`;
    let degree = (360 / numberOfSlices) * (j - 1);
    div.style.transform = `rotateZ(${degree}deg) rotateX(-24deg)`;
    if (j % 2 === 1) {
      div.style.borderColor = "transparent transparent #D70606 transparent";
    }
    top.appendChild(div);
  }

  for (let i = 1; i <= numberOfSlices; i++) {
    const div = document.createElement("div");
    div.className = `slice slice-${i}`;
    let degree = (360 / numberOfSlices) * (i - 1);
    div.style.transform = `rotateZ(${degree}deg) rotateX(-24deg) translateY(-1px)`;
    shade.appendChild(div);
  }
});
