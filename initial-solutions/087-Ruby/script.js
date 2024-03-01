document.addEventListener("DOMContentLoaded", function () {
  var gemStructure = [
    "lower-left",
    "lower-right",
    "lower-middle",
    "upper-left-left",
    "upper-left",
    "upper-middle",
    { className: "upper-right", children: ["flash"] },
    "upper-right-right",
  ];

  function createElement(elementInfo) {
    if (typeof elementInfo === "string") {
      var element = document.createElement("div");
      element.classList.add(elementInfo);
      return element;
    } else if (typeof elementInfo === "object") {
      var element = document.createElement("div");
      element.classList.add(elementInfo.className);
      if (elementInfo.children) {
        elementInfo.children.forEach(function (childInfo) {
          var childElement = createElement(childInfo);
          element.appendChild(childElement);
        });
      }
      return element;
    }
  }

  var gem = createElement({ className: "gem", children: gemStructure });

  var frame = document.createElement("div");
  frame.classList.add("frame");
  frame.appendChild(gem);

  document.body.appendChild(frame);
});
