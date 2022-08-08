"use strict";

// buy online animation
const navLi = document.querySelectorAll(".buyOnlineAnimation");
const BuyOnlineText = document.querySelectorAll(".buyOn");
const liquid = document.querySelector(".liquid");
let BuyTextMove = true;
function moveText() {
  if (BuyTextMove) {
    BuyOnlineText.forEach((text) => {
      text.style.top = "5px";
      text.style.color = "white";
      liquid.style.display = "block";
      liquid.style.animation = "raiseLiquid 0.5s";
      text.style.transition = "all 0.5s";
    });
  } else {
    BuyOnlineText.forEach((text) => {
      text.style.top = "14px";
      liquid.style.animation = "dropliquid 0.5s";
      text.style.color = "#e8be4c";
    });
  }
  liquid.addEventListener("animationend", function () {
    if (BuyTextMove) {
      liquid.style.display = "none";
    }
  });
  BuyTextMove = !BuyTextMove;
}
navLi.forEach((nav) =>
  nav.addEventListener("mouseenter", function (e) {
    moveText();
  })
);

navLi.forEach((nav) =>
  nav.addEventListener("mouseout", function (e) {
    moveText();
  })
);
