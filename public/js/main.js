const cards = document.querySelectorAll(".product__item");
const btnOpen = document.querySelector(".js-nav-open");
const btnClose = document.querySelector(".js-nav-close");
const media = window.matchMedia("(width < 45em)");
const topNavMenu = document.querySelector(".nav__menu");
const body = document.querySelector("body");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

Array.prototype.forEach.call(cards, (card) => {
  let down,
    up,
    link = card.querySelector("h3 a");
  card.onmousedown = () => (down = +new Date());
  card.onmouseup = () => {
    up = +new Date();
    if (up - down < 200) {
      link.click();
    }
  };

  card.style.cursor = "pointer";
});

function openMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "true");
  topNavMenu.removeAttribute("inert");
  topNavMenu.removeAttribute("style");
  main.setAttribute("inert", "");
  footer.setAttribute("inert", "");
  bodyScrollLockUpgrade.disableBodyScroll(body);
  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute("aria-expanded", "false");
  topNavMenu.setAttribute("inert", "");
  main.removeAttribute("inert");
  footer.removeAttribute("inert");
  bodyScrollLockUpgrade.enableBodyScroll(body);
  btnOpen.focus();

  setTimeout(() => {
    topNavMenu.style.transition = "none";
  }, 500);
}

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    console.log("is mobile");
    topNavMenu.setAttribute("inert", "");
    topNavMenu.style.transition = "none";
  } else {
    // is tablet/desktop
    console.log("is desktop");
    closeMobileMenu();
    topNavMenu.removeAttribute("inert");
  }
}

setupTopNav(media);

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);

media.addEventListener("change", function (e) {
  setupTopNav(e);
});
