document.addEventListener("DOMContentLoaded", function () {
  const grid = document.querySelectorAll(".card");

  grid.forEach(function (card) {
    card.addEventListener("click", handleCardClick);
  });

  function handleCardClick(event) {
    event.preventDefault();
  }
});
