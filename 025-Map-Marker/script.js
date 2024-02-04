$(".position-marker").bind("click", function () {
  $(".info-card").addClass("visible");
  $(".position-marker").addClass("off-stage");
});

$(".info-card").bind("click", function () {
  $(".info-card").removeClass("visible");
  $(".position-marker").removeClass("off-stage");
});
