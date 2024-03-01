document.addEventListener("DOMContentLoaded", function () {
  const bloom = document.querySelector(".bloom");

  const florets = document.createElement("div");
  florets.className = "florets";

  for (let i = 0; i <= 15; i++) {
    let petals = document.createElement("div");
    petals.className = `petals petals-${i}`;
    bloom.appendChild(petals);
  }

  bloom.appendChild(florets);
});
