// Elements
const body = document.querySelector("body");
const header = document.querySelector("#header");
const navMenu = document.querySelector("#header #nav");
const containerMenu = document.querySelector("#header .menu-btn");
const buttonMenu = document.querySelectorAll("#header .menu-btn .icon");
const linksMenu = document.querySelectorAll("#header .menu li a");
const sections = document.querySelectorAll(".section");

// Menu variables

const headerHeight = header.offsetHeight;
const openButton = buttonMenu[0];
const closeButton = buttonMenu[1];

// Background header

const scrollHeader = () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("background");
    header.classList.add("shadow");
  } else {
    header.classList.remove("background");
    header.classList.remove("shadow");
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

const activateLinkMenu = () => {
  const windowScroll = scrollY;
  let heightSections = [
    sections[0].offsetHeight,
    sections[1].offsetHeight,
    sections[2].offsetHeight,
    sections[3].offsetHeight,
  ];
  const checkpoint = 1.3;

  const interSection1e2 = heightSections[0] / checkpoint;
  const interSection2e3 = heightSections[0] + heightSections[1] / checkpoint;
  const interSection3e4 =
    heightSections[0] + heightSections[1] + heightSections[3] / checkpoint;

  linksMenu[0].classList.add("active");
  linksMenu[1].classList.remove("active");
  linksMenu[2].classList.remove("active");
  linksMenu[3].classList.remove("active");

  if (windowScroll >= interSection1e2) {
    linksMenu[0].classList.remove("active");
    linksMenu[1].classList.add("active");
    linksMenu[2].classList.remove("active");
    linksMenu[3].classList.remove("active");
  }
  if (windowScroll >= interSection2e3) {
    linksMenu[0].classList.remove("active");
    linksMenu[1].classList.remove("active");
    linksMenu[2].classList.add("active");
    linksMenu[3].classList.remove("active");
  }
  if (windowScroll >= interSection3e4) {
    linksMenu[0].classList.remove("active");
    linksMenu[1].classList.remove("active");
    linksMenu[2].classList.remove("active");
    linksMenu[3].classList.add("active");
  }
};

// Scroll Reveal

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
  activateLinkMenu();
});
