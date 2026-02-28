const header = document.querySelector(".header");
const iconButtons = document.querySelectorAll(".icon-mobile-nav");
const mobileBtn = document.querySelector(".btn-mobile-nav");

iconButtons[0].addEventListener("click", () => {
  header.classList.add("menu-open");
  mobileBtn.setAttribute("focus", false);
});

iconButtons[1].addEventListener("click", () => {
  header.classList.remove("menu-open");
});

const linkButton = document.querySelectorAll(".header-nav .nav-link");
linkButton.forEach((e) => {
  e.addEventListener("click", () => {
    header.classList.remove("menu-open");
  });
});
