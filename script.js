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

// making the scroll to top feature on button
const mybutton = document.querySelector("#myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTo({ top: 0, behavior: "smooth" }); // For Safari
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" }); // For Chrome, Firefox, IE and Opera
}

// adding scrole functionality to buttons
function scrollToPosition(position) {
  let y =
    document.querySelector(`.${position}`).getBoundingClientRect().top +
    window.pageYOffset -
    100;
  if (position === "ourStory" || position === "contact") {
    mobileNav.style.display = "none";
    moblileUl.style.display = "none";
  } else if (position === "barrels") {
    y =
      document.querySelector(`.${position}`).getBoundingClientRect().top +
      window.pageYOffset +
      0;
  }
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}

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
