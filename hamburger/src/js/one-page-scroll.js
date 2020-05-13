$(document).ready(function() {

    const sections = $(".section");
    const display = $(".maincontent");
  
    const transitionOver = 1000;
    const mouseInertionOver = 300;
  
    let inScroll = false;
  
    let md = new MobileDetect(window.navigator.userAgent);
    let isMobile = md.mobile(); 
  
    var generateDots = function (){
      $(".section").each(function (){
        var dot = $('<li>', {
          attr: {
            class : 'pagination__item',
          },
          html : '<div class="pagination__circle"></div>'
        })
  
        $('.pagination__list').append(dot);
        
        $('.pagination__item:first-child').addClass('pagination__item--active');
        
      });
    }
  
    generateDots();
  
    const countSectionPosition = (sectionEq) => {
      const position = -sectionEq * 100;
      if (isNaN(position)) {
        console.error("В функцию countSectionPosition передано неверное значение")
      }
      return position;
    }
  
    const performTransition = (sectionEq) => {
  
      if (inScroll) return;
      inScroll = true;
  
      const position = countSectionPosition(sectionEq);
  
      sections.eq(sectionEq).addClass("section--active").siblings().removeClass("section--active");
    
      display.css({
        transform: `translateY(${position}%)`,
      });
  
      display.on('transitionend', (e) => {
        $(".pagination__item").eq(sectionEq).addClass("pagination__item--active").siblings().removeClass("pagination__item--active");
        inScroll = false;
      })
  
      /*setTimeout(() => {
        $(".pagination__item").eq(sectionEq).addClass("pagination__item--active").siblings().removeClass("pagination__item--active");
        inScroll = false;
      }, transitionOver + mouseInertionOver)*/
  
    };
  
    const scrollSection = direction => {
      const activeSection = sections.filter(".section--active");
      const nextSection = activeSection.next();
      const prevSection = activeSection.prev();
  
      const options = {
        NEXT: "next",
        PREV: "prev"
      }
  
      const choosenDirection = options[direction];
  
      if (nextSection.length && direction === "next") {
        performTransition(nextSection.index())
      }
  
      if (prevSection.length && direction === "prev") {
        performTransition(prevSection.index());
      }
    }
    
  
    $(window).on('wheel', (e) => {
      const deltaY = e.originalEvent.deltaY;
  
      if (deltaY > 0) {
        scrollSection("next");
      } 
  
      if (deltaY < 0) {
        scrollSection("prev");
      } 
    })
  
    $(document).on("keydown", (e) => {
  
      const tagName = e.target.tagName.toLowerCase();
      const userTypingInInputs = tagName === "input" || tagName === "textarea";
  
      if (!userTypingInInputs) {
        switch (e.keyCode) {
          case 38:
            scrollSection("prev");
            break;
          case 40:
            scrollSection("next");
            break;
        } 
      }
    });
  
    $(".pagination__item").on("click", (e) => {
      e.preventDefault();
    
      const $this = $(e.currentTarget);
      const target = $this.index();
    
      performTransition(target);
    });
  
    $("[data-scroll-to]").on("click", (e) => {
      e.preventDefault();
    
      const $this = $(e.currentTarget);
      const target = $this.attr("data-scroll-to");
    
      performTransition(target);
    });
  
    if (isMobile) {
      $("body").swipe({
        swipe: (event, direction) => {
          let scrollDirection;
          if (direction === "up") {
            scrollDirection = "next"; 
          }
          if (direction === "down") {
            scrollDirection = "prev";
          }
    
          scrollSection(scrollDirection);
        }
      });
    }
     
});



