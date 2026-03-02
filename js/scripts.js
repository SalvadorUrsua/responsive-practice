function showMenu() {
  const header = document.querySelector(".header");
  const iconButtons = document.querySelectorAll(".icon-mobile-nav");
  const mobileBtn = document.querySelector(".btn-mobile-nav");
  header.classList.toggle("menu-open");
  mobileBtn.setAttribute("focus", false);
}

function hideMenu() {
  const header = document.querySelector(".header");
  const iconButtons = document.querySelectorAll(".icon-mobile-nav");
  header.classList.toggle("menu-open");
}

function clearMenu() {
  const header = document.querySelector(".header");
  const iconButtons = document.querySelectorAll(".icon-mobile-nav");
  header.classList.remove("menu-open");
}
