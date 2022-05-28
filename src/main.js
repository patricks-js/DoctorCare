// Background header variables
const header = document.querySelector("#header");
const headerHeight = header.offsetHeight;

// Menu variables
const buttonMenu = document.querySelectorAll("#header .menu-btn img");
const containerMenu = document.querySelector("#header .menu-btn");

const openButton = buttonMenu[0];
const closeButton = buttonMenu[1];

// Background header
window.addEventListener("scroll", () => {
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
});

// Menu
buttonMenu.forEach((img) => {
  img.addEventListener("click", () => {
    containerMenu.classList.toggle("show");
  });
});
