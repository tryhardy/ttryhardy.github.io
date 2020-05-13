(function(){
    var Accordion = function (element, activeClass) {
        this.list = document.querySelector(element);
        this.element = this.list || {};
    
        var item = this.list.children;
    
        
    
    
        for (i=0; i< item.length; i++) {
            let link = item[i];
    
            //как можно более универсальным способом получить ссылку с атрибутом data-btn?
            //let linkChildren = link.querySelector('.team__name');
            let linkChildren = link.querySelector('[data-btn]');
            //console.log(linkChildren);
            
            linkChildren.addEventListener("click", function(e) {
                const target = e.target.closest('[data-btn]');
                
                if (!target) return;
    
                const currentItem = target.parentNode;
    
                const isActive = currentItem.classList.contains(activeClass);
    
                if (!isActive) {
    
                    for (const li of item) {
                        li.classList.remove(activeClass);
                    }
    
                    currentItem.classList.add(activeClass);
                }   else {
                    currentItem.classList.remove(activeClass);
                }
            });
        }
    
        
    }
    
    
    var acc= new Accordion(".team__list", 'team__item--active');
    var vertMenu= new Accordion(".menu-section__list", 'menu-section__item--active');
    
})()


    