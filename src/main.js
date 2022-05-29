// Elements
const body = document.querySelector("body");
const header = document.querySelector("#header");
const navMenu = document.querySelector("#header #nav");
const containerMenu = document.querySelector("#header .menu-btn");
const buttonMenu = document.querySelectorAll("#header .menu-btn .icon");
const linksMenu = document.querySelectorAll("#header .menu li a");

// Menu variables

const headerHeight = header.offsetHeight;
const openButton = buttonMenu[0];
const closeButton = buttonMenu[1];

// Background header

const scrollHeader = () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("background");
    header.classList.add("shadow");
    // openButton.setAttribute("src", `/src/assets/icons/light/open-menu.svg`);
    // closeButton.setAttribute("src", `/src/assets/icons/light/close-menu.svg`);
  } else {
    header.classList.remove("background");
    header.classList.remove("shadow");
    // openButton.setAttribute("src", `/src/assets/icons/green/open-menu.svg`);
    // closeButton.setAttribute("src", `/src/assets/icons/green/close-menu.svg`);
  }
};

// Menu toggle

buttonMenu.forEach((img) => {
  img.addEventListener("click", () => {
    containerMenu.classList.toggle("show");
    navMenu.classList.toggle("show");
    body.classList.toggle("overflow");
  });
});

// Close menu on click

const linksHeader = document.querySelectorAll("#header .menu a");
linksHeader.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    containerMenu.classList.remove("show");
    body.classList.remove("overflow");
  });
});

// Scroll effects

ScrollReveal({
  reset: true,
}).reveal(".section1", { delay: 300 });
ScrollReveal({
  reset: true,
}).reveal(".section2 .title, .section2 .subtitle", { delay: 300 });
ScrollReveal({
  reset: true,
}).reveal(".section2 .service", { delay: 300 });
ScrollReveal({
  reset: true,
}).reveal(".section3 img", { delay: 300 });
ScrollReveal({
  reset: true,
}).reveal(".section3 .content", { delay: 400 });
ScrollReveal({
  reset: true,
}).reveal(".section4 img", { delay: 400 });
ScrollReveal({
  reset: true,
}).reveal(".section4 .content", { delay: 300 });

window.addEventListener("scroll", () => {
  scrollHeader();
});
