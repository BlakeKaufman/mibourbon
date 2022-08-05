"use strict";

// buy online animation
const navLi = document.querySelectorAll(".buyOnlineAnimation");
const BuyOnlineText = document.querySelectorAll(".buyOn");
let BuyTextMove = true;
function moveText() {
  if (BuyTextMove) {
    BuyOnlineText.forEach((text) => {
      text.style.top = "5px";
      text.style.color = "white";
      text.style.transition = "all 0.5s";
    });
  } else {
    BuyOnlineText.forEach((text) => {
      text.style.top = "14px";
      text.style.color = "#e8be4c";
    });
  }
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
