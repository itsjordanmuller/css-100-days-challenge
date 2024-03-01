document.addEventListener("DOMContentLoaded", () => {
  const getBackgroundColor = (selector) =>
    getComputedStyle(document.querySelector(selector)).backgroundColor;

  const colors = {
    container: getBackgroundColor(".container"),
    back: getBackgroundColor(".layer-back"),
    middle: getBackgroundColor(".layer-middle"),
    front: getBackgroundColor(".layer-front"),
  };

  const getAlternateColor = (layerClass) =>
    ({
      "layer-back": colors.container,
      "layer-middle": colors.back,
      "layer-front": colors.middle,
    }[layerClass] || "");

  document.querySelectorAll(".layer").forEach((layer) => {
    const layerColor = colors[layer.classList[1].split("-")[1]];
    const alternateColor = getAlternateColor(layer.classList[1]);

    Array.from({ length: 10 }).forEach((_, i) => {
      const circle = document.createElement("div");
      circle.style.backgroundColor = i % 2 === 0 ? alternateColor : layerColor;
      layer.appendChild(circle);
    });
  });
});
