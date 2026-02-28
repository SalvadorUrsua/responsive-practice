function showMenu() {
  const header = document.querySelector(".header");
  const iconButtons = document.querySelectorAll(".icon-mobile-nav");
  const mobileBtn = document.querySelector(".btn-mobile-nav");
  header.classList.add("menu-open");
  iconButtons[0].style.display = "none";
  iconButtons[1].style.display = "block";
  mobileBtn.setAttribute("focus", false);
}

function hideMenu() {
  const header = document.querySelector(".header");
  const iconButtons = document.querySelectorAll(".icon-mobile-nav");
  header.classList.remove("menu-open");
  iconButtons[0].style.display = "block";
  iconButtons[1].style.display = "none";
}

function clearMenu() {
  const header = document.querySelector(".header");
  const iconButtons = document.querySelectorAll(".icon-mobile-nav");
  header.classList.remove("menu-open");
  iconButtons[0].style.display = "block";
  iconButtons[1].style.display = "none";
}
