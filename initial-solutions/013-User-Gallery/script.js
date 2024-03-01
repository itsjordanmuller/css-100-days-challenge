const detailsOne = document.getElementById("details-one");
const exitButtons = document.querySelectorAll(".exit-btn");
const circleImage = document.querySelector(".details .circle-image");
const profileName = document.querySelector(".details .info .name");

function toggleDetailsActive(imgSrc, name) {
  circleImage.src = imgSrc;
  profileName.textContent = name;
  detailsOne.classList.toggle("active");
}

function removeAllActiveClasses() {
  const allDetails = document.querySelectorAll(".details");
  allDetails.forEach((details) => {
    details.classList.remove("active");
  });
}

document.querySelectorAll(".profile .open").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const imgSrc = button.getAttribute("data-img-src");
    const name = button.getAttribute("data-name");
    toggleDetailsActive(imgSrc, name);
  });
});

document.querySelectorAll(".profile").forEach((profile) => {
  profile.addEventListener("click", () => {
    const button = profile.querySelector(".open");
    const imgSrc = button.getAttribute("data-img-src");
    const name = button.getAttribute("data-name");
    toggleDetailsActive(imgSrc, name);
  });
});

exitButtons.forEach((button) => {
  button.addEventListener("click", removeAllActiveClasses);
});
