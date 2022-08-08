"use strict";

// buy online animation
const navLi = document.querySelectorAll(".buyOnlineAnimation");
const BuyOnlineText = document.querySelectorAll(".buyOn");
const liquid = document.querySelectorAll(".liquid");

function moveText(BuyTextMove) {
  if (BuyTextMove) {
    BuyOnlineText.forEach((text) => {
      text.style.top = "5px";
      text.style.color = "white";
      text.style.transition = "all 0.5s";
    });
    liquid.forEach((liq) => {
      liq.style.display = "block";
      liq.style.bottom = "0";
    });
  } else {
    BuyOnlineText.forEach((text) => {
      text.style.top = "14px";
      text.style.color = "#e8be4c";
    });
    liquid.forEach((liq) => {
      liq.style.display = "block";
      liq.style.bottom = "-23px";
    });
  }
}
navLi.forEach((nav) =>
  nav.addEventListener("mouseenter", function (e) {
    moveText(true);
  })
);

navLi.forEach((nav) =>
  nav.addEventListener("mouseout", function (e) {
    moveText(false);
  })
);
