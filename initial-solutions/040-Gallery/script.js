document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");
  const gridSize = 3;
  let lastActive = null;

  for (let i = 1; i <= 9; i++) {
    const pic = document.createElement("div");
    pic.className = "pic";
    let row = Math.floor((i - 1) / gridSize);
    let col = (i - 1) % gridSize;
    let positionClass = "";
    if (row === 0) positionClass += " top";
    if (row === gridSize - 1) positionClass += " bottom";
    if (col === 0) positionClass += " left";
    if (col === gridSize - 1) positionClass += " right";
    pic.className += positionClass;

    const img = document.createElement("img");
    img.src = `https://100dayscss.com/codepen/40-${i}.jpg`;
    img.alt = `Image ${i}`;

    pic.appendChild(img);
    gallery.appendChild(pic);

    pic.addEventListener("click", function () {
      if (lastActive && lastActive !== this) {
        lastActive.classList.remove("active");
        lastActive.style.zIndex = "";
      }

      this.classList.toggle("active");

      if (this.classList.contains("active")) {
        this.style.zIndex = 10;
        lastActive = this;

        document.querySelectorAll(".pic").forEach((p) => {
          if (p !== this) p.classList.add("away");
        });
      } else {
        this.style.zIndex = "10";
        document
          .querySelectorAll(".pic")
          .forEach((p) => p.classList.remove("away"));
      }
    });
  }
});
