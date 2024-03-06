function createCube() {
  const frame = document.getElementById("frame");

  const boxFrame = document.createElement("div");
  boxFrame.className = "box-frame";

  const boxAlignment = document.createElement("div");
  boxAlignment.className = "box-alignment";

  const box = document.createElement("div");
  box.className = "box";
  box.setAttribute("onclick", "void(0);");

  const faces = [
    "front-top",
    "back-top",
    "front-left",
    "hidden-left",
    "front-right",
    "hidden-right",
  ];

  faces.forEach((faceClass) => {
    const face = document.createElement("div");
    face.className = `face ${faceClass}`;
    box.appendChild(face);
  });

  boxAlignment.appendChild(box);
  boxFrame.appendChild(boxAlignment);
  frame.appendChild(boxFrame);
}

document.addEventListener("DOMContentLoaded", createCube);
