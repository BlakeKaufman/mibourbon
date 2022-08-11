"use strict";

// // variables
const section = document.querySelector(".animation");
const video = document.querySelector(".animationVideo");

const newBourbonText = document.querySelector(".newBourbon");
const bestInClassText = document.querySelector(".BestInClass");
const madeInMichigan = document.querySelector(".MadeInMich");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 5000,
  triggerElement: section,
  triggerHook: 0,
})
  .setPin(section)
  .addTo(controller);

// video animation
let ecellAmount = 0.3;
let scrollPosition = 0;
let delay = 0;
let timer;

scene.on("update", (e) => {
  scrollPosition = (e.scrollPos - e.startPos) / 1000;
});

// function switchText(element, stop) {
//   if (!stop) {
//     element.style.opacity = "1";
//   } else {
//     element.style.opacity = "0";
//   }
// }
function startAnimation(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) clearInterval(timer);
  else {
    timer = setInterval(() => {
      delay += (scrollPosition - delay) * ecellAmount;
      // if (scrollPosition > 1 && scrollPosition < 2) {
      //   // console.log(scrollPosition * 10);
      //   switchText(newBourbonText, false);
      //   switchText(bestInClassText, true);
      //   switchText(madeInMichigan, true);
      // } else if (scrollPosition > 2 && scrollPosition < 3) {
      //   switchText(bestInClassText, false);
      //   switchText(newBourbonText, true);
      //   switchText(madeInMichigan, true);
      // } else if (scrollPosition > 3 && scrollPosition < 4) {
      //   switchText(bestInClassText, true);
      //   switchText(newBourbonText, true);
      //   switchText(madeInMichigan, false);
      // } else {
      //   switchText(madeInMichigan, true);
      //   switchText(bestInClassText, true);
      //   switchText(newBourbonText, true);
      // }
      video.currentTime = delay;
    }, 40);
  }
}

const animationOBS = new IntersectionObserver(startAnimation, {
  root: null,
  threshold: 0.8,
});
animationOBS.observe(section);

// second try

// grabbing elements

// const html = document.documentElement;
// const canvas = document.querySelector(".hero-lightpass");
// const context = canvas.getContext("2d");

// const frameCount = 52;
// const currentFrame = (index) =>
//   `./includes/images/AnimationFrames/ezgif-frame-${index
//     .toString()
//     .padStart(3, "0")}.jpg`;

// const preloadImages = () => {
//   for (let i = 1; i < frameCount; i++) {
//     const img = new Image();
//     img.src = currentFrame(i);
//   }
// };

// const img = new Image();
// img.src = currentFrame(1);
// canvas.width = 1158;
// canvas.height = 770;
// img.onload = function () {
//   context.drawImage(img, 0, 0);
// };

// const updateImage = (index) => {
//   img.src = currentFrame(index);
//   context.drawImage(img, 0, 0);
// };

// window.addEventListener("scroll", () => {
//   const scrollTop = html.scrollTop;
//   const maxScrollTop = html.scrollHeight - window.innerHeight;
//   const scrollFraction = scrollTop / maxScrollTop;
//   const frameIndex = Math.min(
//     frameCount - 1,
//     Math.ceil(scrollFraction * frameCount)
//   );

//   requestAnimationFrame(() => updateImage(frameIndex + 1));
// });

// preloadImages();
