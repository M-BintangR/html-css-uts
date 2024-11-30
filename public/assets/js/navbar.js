const burgerMenus = document.querySelector(".burger-menus");
const navbarMobile = document.querySelector(".navbar-mobile");

burgerMenus.addEventListener("click", function () {
  if (navbarMobile.style.display === "block") {
    navbarMobile.style.display = "none";
  } else {
    navbarMobile.style.display = "block";
  }
});
