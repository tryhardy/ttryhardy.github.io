
var coloringDots = function(index) {
  $('.slider__carousel')
    .find('.slider__dot-item')
    .eq(index)
    .addClass('slider__dot-item--active')
    .siblings()
    .removeClass('slider__dot-item--active')
}

var moveSlide = function(container, slideNumber) {

    var items = container.find(".slider__item"),
        activeSlide = items.filter(".slider__item--active"),
        reqItem = items.eq(slideNumber),
        reqIndex = reqItem.index(),
        list = container.find(".slider__list"),
        duration = 500;
  
    if(reqItem.length) {
      list.animate({
        'left': -reqIndex * 100 + "%"
      }, duration, function(){
        activeSlide.removeClass("slider__item--active");
        reqItem.addClass("slider__item--active");
        coloringDots(slideNumber);
      });
    }
}

$(".slider__arrow").on('click', function(e) {
  e.preventDefault();

    var $this = $(this),
      container = $this.closest('.slider__carousel'),
      items = $(".slider__item"),
      activeItem = items.filter(".slider__item--active"),
      nextItem = activeItem.next(),
      prevItem = activeItem.prev(),
      existedItem, edgeItem, regItem;

    if ($this.hasClass('slider__arrow--right')) {
      existedItem = activeItem.next();
      edgeItem = items.first(); 
    } 
    
    if ($this.hasClass('slider__arrow--left')) {
      existedItem = activeItem.prev();
      edgeItem = items.last();
    }

    regItem = existedItem.length ? existedItem.index() :  edgeItem.index();

    moveSlide(container, regItem);

});

 
  