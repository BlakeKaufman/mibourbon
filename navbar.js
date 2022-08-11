"use strict";
// Making the nav pop donw
const menu = document.querySelectorAll(".hamburger");
let mobileNav = document.querySelector(".mobileNav");
let moblileUl = document.querySelector(".mobileUl");
let on = "block";
function display() {
  if (on === "block") {
    mobileNav.style.display = "block";
    mobileNav.style.animation = "dropNav 2s";
    on = "none";
  } else {
    mobileNav.style.animation = "raiseNav 2s";
    on = "block";
  }
  mobileNav.addEventListener("animationend", function () {
    if (on === "block") {
      mobileNav.style.display = "none";
    }
  });
}

menu.forEach((ham) => {
  ham.addEventListener("click", display);
});

// giving the dropdown arrow a change

const i1up = document.querySelector(".i1up");
const i1d = document.querySelector(".i1d");
const i2up = document.querySelector(".i2up");
const i2d = document.querySelector(".i2d");
const d1 = document.querySelector(".d1");
const d2 = document.querySelector(".d2");

d1.addEventListener("mouseover", function () {
  i1up.classList.remove("active");
  i1d.classList.add("active");
});
d1.addEventListener("mouseout", function () {
  i1up.classList.add("active");
  i1d.classList.remove("active");
});

d2.addEventListener("mouseover", function () {
  i2up.classList.remove("active");
  i2d.classList.add("active");
});
d2.addEventListener("mouseout", function () {
  i2up.classList.add("active");
  i2d.classList.remove("active");
});

// making the mobile nav diapreer on window resize
window.addEventListener("resize", function (e) {
  if (window.innerWidth > 1180 && on === "none") {
    mobileNav.style.animation = "raiseNav 2s";

    mobileNav.addEventListener("animationend", function () {
      if (on === "none") {
        mobileNav.style.display = "none";
        on = "block";
      }
    });
  }
});
