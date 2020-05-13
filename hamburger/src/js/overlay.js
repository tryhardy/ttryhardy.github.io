(function(){
  const wrapper = document.querySelector(".wrapper");
  const template = document.querySelector("#overlayReviews").innerHTML;
  const reviewList = document.querySelector(".review__list");
  let openButtons = reviewList.querySelectorAll(".btn__link");
  const overlay = createOverlay(template);

  for (i=0; i < openButtons.length; i++) {
    openButtons[i].addEventListener("click", function(e) {
      let target = e.currentTarget;
      let parent = target.closest(".review__content");
      let content = parent.querySelector(".review__text").innerHTML;
      overlay.open();
      overlay.setContent(content);
    });
  }
  
  
  function createOverlay(template) {
    const fragment = document.createElement('div');
  
    fragment.innerHTML = template;
  
    const overlayElement = fragment.querySelector(".review__overlay");
    const contentElement = fragment.querySelector(".review__desc");
    const closeElement = fragment.querySelector(".close-btn");
    
    overlayElement.addEventListener("click", e => {
      if (e.target === overlayElement) {
        closeElement.click();
      }
    });
    closeElement.addEventListener("click", () => {
      wrapper.removeChild(overlayElement);
    });
  
    return {
      open() {
        wrapper.appendChild(overlayElement);
      },
      close() {
        closeElement.click();
      },
      setContent(content) {
        contentElement.innerHTML = content;
      }
    };
  }
  
  
})()
