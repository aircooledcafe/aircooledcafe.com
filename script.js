"use strict";

const imageBoxs = document.querySelectorAll(".image-box");
const heroImageBox = document.querySelector(".hero-image-box");
const heroImage = document.querySelector(".hero-image");
const overlay = document.querySelector(".overlay");
const imageWeb = document.querySelectorAll(".image-web");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");

const unhide = function () {
  heroImageBox.classList.remove("hidden");
  heroImage.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("noscroll");
};

const hide = function () {
  heroImageBox.classList.add("hidden");
  heroImage.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("noscroll");
};

for (let i = 0; i < imageBoxs.length; i++) {
  imageBoxs[i].addEventListener("click", function () {
    let imageName = imageWeb[i].src;
    console.log(imageName);
    heroImage.src = imageName;
    unhide();
  });
}

overlay.addEventListener("click", hide);

heroImageBox.addEventListener("click", hide);


