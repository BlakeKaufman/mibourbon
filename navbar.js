"use strict";
// Making the nav pop donw
const menu = document.querySelector(".hamburger");
let mobileNav = document.querySelector(".mobileNav");
let moblileUl = document.querySelector(".mobileUl");

function switchNav() {
  if (mobileNav.style.display === "none") {
    mobileNav.style.display = "block";
    moblileUl.style.display = "flex";
  } else {
    mobileNav.style.display = "none";
    moblileUl.style.display = "none";
  }
}

menu.addEventListener("click", switchNav);

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
