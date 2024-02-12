const container = document.getElementById("container");

const fragment = document.createDocumentFragment();

for (let i = 1; i <= 6; i++) {
  const ringElement = document.createElement("div");
  ringElement.className = `ring ring-${i}`;

  for (let j = 1; j <= 12; j++) {
    const dotElement = document.createElement("div");
    dotElement.className = `dot dot-${j}`;
    ringElement.appendChild(dotElement);
  }

  fragment.appendChild(ringElement);
}

container.appendChild(fragment);
