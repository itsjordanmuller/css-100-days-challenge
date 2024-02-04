let currentCard = 1;

const cardData = [
  {
    title: "The couch",
    text: "If you want to grow, get outside your comfort zone.",
  },
  {
    title: "Failing is learning",
    text: "Pick yourself up, dust yourself off, and start again.",
  },
  {
    title: "Flowers and rainbows",
    text: "Always be yourself, unless you can be a unicorn.",
  },
];

const container = document.querySelector(".container");

cardData.forEach((data, index) => {
  const infoCard = document.createElement("div");
  infoCard.classList.add("info-card");

  if (index === 0) {
    infoCard.classList.add("current");
  }

  const badge = document.createElement("div");
  badge.classList.add("badge");

  const serial = document.createElement("div");
  serial.classList.add("serial");
  serial.textContent = index + 1;

  const description = document.createElement("div");
  description.classList.add("description");

  const title = document.createElement("span");
  title.classList.add("title");
  title.textContent = data.title;

  const text = document.createElement("p");
  text.textContent = data.text;

  description.appendChild(title);
  description.appendChild(text);

  const confirmBtn = document.createElement("div");
  confirmBtn.classList.add("confirm-btn");
  confirmBtn.textContent = "Ok";

  infoCard.appendChild(badge);
  infoCard.appendChild(serial);
  infoCard.appendChild(description);
  infoCard.appendChild(confirmBtn);

  container.appendChild(infoCard);
});

const infoCards = document.querySelectorAll(".info-card");

document.querySelectorAll(".confirm-btn").forEach((button, index) => {
  button.addEventListener("click", function () {
    infoCards[currentCard - 1].classList.remove("current");
    infoCards[currentCard - 1].classList.add("not-active");

    currentCard = currentCard === cardData.length ? 1 : currentCard + 1;

    infoCards[currentCard - 1].classList.remove("not-active");
    infoCards[currentCard - 1].classList.add("current");
  });
});
