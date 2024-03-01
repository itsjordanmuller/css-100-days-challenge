const animals = ["Panther", "Leopard", "Tiger", "Jaguar", "Panther"];

const swapBox = document.getElementById("swapBox");

animals.forEach((animal) => {
  const word = document.createElement("div");
  word.classList.add("word");
  word.textContent = animal;
  swapBox.appendChild(word);
});

document.documentElement.style.setProperty(
  "--numberOfElements",
  animals.length
);
document.documentElement.style.setProperty("--fontSize", "25px");
