document.addEventListener("DOMContentLoaded", function () {
  const baseWidths = [240, 250, 235, 250, 80];

  function modifyWidths(base, adjustments) {
    return base.map((width, index) => width + adjustments[index]);
  }

  function populateSpans(containerId, widths) {
    const container = document.querySelector(containerId);
    widths.forEach((width) => {
      const span = document.createElement("span");
      span.style.width = `${width}px`;
      container.appendChild(span);
    });
  }

  populateSpans("#panel-1 .responsive-bars", baseWidths);
  populateSpans(
    "#panel-2 .responsive-bars",
    modifyWidths(baseWidths, [10, -5, 5, -10, 0])
  );
  populateSpans(
    "#panel-3 .responsive-bars",
    modifyWidths(baseWidths, [-5, 10, -10, 5, 5])
  );
  populateSpans(
    "#panel-4 .responsive-bars",
    modifyWidths(baseWidths, [5, -10, 10, -5, -5])
  );
});
