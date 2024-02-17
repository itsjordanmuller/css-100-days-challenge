document
  .getElementById("hoverEffectArea")
  .addEventListener("mousemove", function (e) {
    const rect = e.target.getBoundingClientRect();
    const hoverHeight = e.clientY - rect.top;
    const totalHeight = rect.height;
    const surface = document.querySelector(".surface");
    surface.style.transition = "none";
    surface.style.height = `${hoverHeight}px`;
  });

document
  .getElementById("hoverEffectArea")
  .addEventListener("mouseleave", function (e) {
    const surface = document.querySelector(".surface");
    surface.style.transition = "all 0.4s ease-in-out";
    surface.style.height = `200px`;
  });
