document.addEventListener("DOMContentLoaded", function () {
  const plans = document.querySelectorAll(".pricing-plan");

  function clearFills() {
    document.querySelectorAll(".fill").forEach((fill) => {
      fill.style.width = "0%";
    });
  }

  plans.forEach((plan) => {
    plan.addEventListener("mouseenter", function () {
      clearFills();

      if (plan.classList.contains("basic")) {
        document.querySelector(".pricing-data.users .fill").style.width = "20%";
        document.querySelector(".pricing-data.gb .fill").style.width = "10%";
        document.querySelector(".pricing-data.projects .fill").style.width =
          "5%";
      } else if (plan.classList.contains("pro")) {
        document.querySelector(".pricing-data.users .fill").style.width = "50%";
        document.querySelector(".pricing-data.gb .fill").style.width = "30%";
        document.querySelector(".pricing-data.projects .fill").style.width =
          "25%";
      } else if (plan.classList.contains("premium")) {
        document.querySelector(".pricing-data.users .fill").style.width =
          "100%";
        document.querySelector(".pricing-data.gb .fill").style.width = "100%";
        document.querySelector(".pricing-data.projects .fill").style.width =
          "100%";
      }
    });
    plan.addEventListener("mouseleave", function () {
      clearFills();
    });
  });
});
