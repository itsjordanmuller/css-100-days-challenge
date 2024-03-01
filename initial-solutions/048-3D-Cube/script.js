function createCube() {
  const container = document.getElementById("container");

  const boxContainer = document.createElement("div");
  boxContainer.className = "box-container";

  const boxAlignment = document.createElement("div");
  boxAlignment.className = "box-alignment";

  const box = document.createElement("div");
  box.className = "box";
  box.setAttribute("onclick", "void(0);");

  const faces = [
    "front-face",
    "back-face",
    "right-face",
    "left-face",
    "top-face",
    "bottom-face",
  ];

  faces.forEach((faceClass) => {
    const face = document.createElement("div");
    face.className = `face ${faceClass}`;
    box.appendChild(face);
  });

  boxAlignment.appendChild(box);
  boxContainer.appendChild(boxAlignment);
  container.appendChild(boxContainer);
}

document.addEventListener("DOMContentLoaded", createCube);
