(function () {
  let hamburgerButton = document.querySelector("#hamburger-menu");
  let primaryMenu = document.querySelector(".primary-menu");
  let primaryMenuLink = document.querySelectorAll(".primary-menu__link");
  let bodyContainer = document.body;
  //console.log(primaryMenuLink);

  hamburgerButton.addEventListener("click", function(e) {
    e.preventDefault();
    hamburgerButton.classList.toggle("hamburger-menu--active");
    primaryMenu.classList.toggle("primary-menu--active");
    bodyContainer.classList.toggle("body--active");
  //  bodyContainer.style.overflow = "hidden";
  });

  for( let i = 0; i < primaryMenuLink.length; i++) {
    primaryMenuLink[i].addEventListener("click", function(e) {
      hamburgerButton.classList.remove("hamburger-menu--active");
      primaryMenu.classList.remove("primary-menu--active");
      bodyContainer.classList.remove("body--active");
    });
  }
})()