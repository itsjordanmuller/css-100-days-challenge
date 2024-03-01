document.addEventListener("DOMContentLoaded", function () {
  const sparklesContainer = document.querySelector(".sparkles");
  const numberOfSparkles = 12;
  for (let i = 1; i <= numberOfSparkles; i++) {
    const sparkleDiv = document.createElement("div");
    sparkleDiv.className = `sparkle sparkle-${i}`;
    const degree = (360 / numberOfSparkles) * (i - 1);
    sparkleDiv.style.transform = `rotate(${degree}deg) translateY(-15px) scaleY(0)`;
    sparklesContainer.appendChild(sparkleDiv);
  }

  document.querySelector("#box").addEventListener("change", function (e) {
    for (let i = 1; i <= numberOfSparkles; i++) {
      const sparkleDiv = document.querySelector(`.sparkle-${i}`);
      const degree = (360 / numberOfSparkles) * (i - 1);
      if (e.target.checked) {
        sparkleDiv.style.transform = `rotate(${degree}deg) translateY(-50px) scaleY(1)`;
        sparkleDiv.style.opacity = "0";
        sparkleDiv.style.transition = "all .5s ease-in-out";
      } else {
        sparkleDiv.style.transform = `rotate(${degree}deg) translateY(-15px) scaleY(0)`;
        sparkleDiv.style.opacity = "1";
        sparkleDiv.style.transition = "none";
      }
    }
  });
});
