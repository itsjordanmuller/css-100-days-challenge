document.addEventListener("DOMContentLoaded", () => {
  const segmentWidths = [
    [104, 112, 97, 108, 52],
    [98, 106, 111, 103, 81],
    [112, 103, 92, 108, 67],
  ];

  const cards = document.querySelectorAll(".info-card .body");

  segmentWidths.forEach((widths, index) => {
    const card = cards[index];
    widths.forEach((width) => {
      const segment = document.createElement("div");
      segment.className = "segment";
      segment.style.width = width + "px";
      card.appendChild(segment);
    });
  });
});
