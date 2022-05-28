// Elements
const body = document.querySelector("body");
const header = document.querySelector("#header");
const navMenu = document.querySelector("#header #nav");
const containerMenu = document.querySelector("#header .menu-btn");
const buttonMenu = document.querySelectorAll("#header .menu-btn img");

// Menu variables

const headerHeight = header.offsetHeight;
const openButton = buttonMenu[0];
const closeButton = buttonMenu[1];

// Background header

const scrollHeader = () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("background");
    header.classList.add("shadow");
    openButton.setAttribute("src", `/src/assets/icons/light/open-menu.svg`);
    closeButton.setAttribute("src", `/src/assets/icons/light/close-menu.svg`);
  } else {
    header.classList.remove("background");
    header.classList.remove("shadow");
    openButton.setAttribute("src", `/src/assets/icons/green/open-menu.svg`);
    closeButton.setAttribute("src", `/src/assets/icons/green/close-menu.svg`);
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

window.addEventListener("scroll", () => {
  scrollHeader();
});
