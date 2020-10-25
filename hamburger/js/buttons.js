(function () {
  // КНОПКА ЗАКРЫТИЯ В ВЕРТИКАЛЬНОМ МЕНЮ 
  let menuSectionList = document.querySelector(".menu-section__list").children;
  //console.log(menuSectionList);

  for (i = 0; i < menuSectionList.length; i++) {
    let sectionItem = menuSectionList[i];
    let closeButton = sectionItem.querySelector('.menu-section__close-btn');
    //console.log(sectionItem);
    //console.log(closeButton);

    closeButton.addEventListener('click', (event) => {
      event.preventDefault();
      sectionItem.classList.remove('menu-section__item--active');
      sectionItem.querySelector(".menu-section__item-wrapper").style.width = "0";
    });
  }



  //КНОПКИ B МЕНЮ СЛАЙДЕРЕ
  let items = document.querySelector(".slider__list").children;
  //console.log(sliderList);

  for (item of items) {
    let openBtn = item.querySelector(".slider__btn");
    let compList = item.querySelector(".slider__composition-list");


    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let isActive = openBtn.classList.contains("slider__btn--active");

      if (!isActive) {
          openBtn.classList.add("slider__btn--active");
          compList.classList.add("slider__composition-list--active");
      } else {
          openBtn.classList.remove("slider__btn--active");
          compList.classList.remove("slider__composition-list--active");
      }   


      document.addEventListener("click", function(e) {
        isActive=openBtn.classList.contains("slider__btn--active");
        let target = e.target;

        let isBtn = e.target == openBtn || openBtn.contains(target);
        let isList = e.target == compList || compList.contains(target);

        //console.log(isBtn);
        //console.log(isList);
        if (isActive && !isBtn && !isList) {
          openBtn.classList.remove("slider__btn--active");
          compList.classList.remove("slider__composition-list--active");

          isActive=openBtn.classList.contains("slider__btn--active");
        }
      });
    });

    let closeButton = item.querySelector(".close-btn");
    closeButton.addEventListener('click', (e) => {
      e.preventDefault();
      openBtn.classList.remove("slider__btn--active");
      compList.classList.remove("slider__composition-list--active");
    });

    
  }



})()

