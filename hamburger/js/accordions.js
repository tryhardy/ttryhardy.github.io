
(function(){
    let activeItem = document.querySelector(".team__item--active");
    let contentItem = activeItem.querySelector(".team__content");
    let height = activeItem.querySelector(".team__about").scrollHeight;
    contentItem.style.height = height + 100 + "px";

    var Accordion = function (element, activeClass) {
        this.list = document.querySelector(element);
        this.element = this.list || {};
    
        var item = this.list.children;
    
        for (i=0; i< item.length; i++) {
            let link = item[i];
    
            let linkChildren = link.querySelector('[data-btn]');
            
            linkChildren.addEventListener("click", function(e) {
                const target = e.target.closest('[data-btn]');
                
                if (!target) return;
    
                const currentItem = target.parentNode;
                let contentItem = currentItem.querySelector(".team__content");
                let height = contentItem.querySelector(".team__about").scrollHeight;
                console.log(height);

                const isActive = currentItem.classList.contains(activeClass);
    
                if (!isActive) {
    
                    for (const li of item) {
                        li.classList.remove(activeClass);
                        li.querySelector(".team__content").style.height = "0px";
                    }  
                    currentItem.classList.add(activeClass);
                    contentItem.style.height = height + 100 + "px";

                }   else {
                    currentItem.classList.remove(activeClass);
                    contentItem.style.height = "0px";

                }
            });
        }
    
        
    }
    
    var Accordionv2 = function (element, activeClass) {
        this.list = document.querySelector(element);
        this.element = this.list || {};
    
        var item = this.list.children;
    
        for (i=0; i< item.length; i++) {
            let link = item[i];
    
            let linkChildren = link.querySelector('[data-btn]');
            
            linkChildren.addEventListener("click", function(e) {
                const target = e.target.closest('[data-btn]');
                
                if (!target) return;
    
                const currentItem = target.parentNode;
                let contentItem = currentItem.querySelector(".menu-section__item-wrapper");

                const isActive = currentItem.classList.contains(activeClass);
    
                if (!isActive) {
    
                    for (const li of item) {
                        li.classList.remove(activeClass);
                        li.querySelector(".menu-section__item-wrapper").style.width = "0";
                    }  
                    currentItem.classList.add(activeClass);
                    contentItem.style.width = "530px";

                }   else {
                    currentItem.classList.remove(activeClass);
                    contentItem.style.width = "0";
                }
            });
        }
    
        
    }

  
    var acc= new Accordion(".team__list", 'team__item--active');
    var vertMenu= new Accordionv2(".menu-section__list", 'menu-section__item--active');
    
})();

