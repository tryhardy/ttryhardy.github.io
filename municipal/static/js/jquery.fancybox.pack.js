"use strict";!function(n,i,W,d){function p(e){return e&&e.hasOwnProperty&&e instanceof W}function f(e){return e&&"string"===W.type(e)}function S(e){return f(e)&&0<e.indexOf("%")}function T(e,t){var i=parseInt(e,10)||0;return t&&S(e)&&(i*=L.getViewport()[t]/100),Math.ceil(i)}function E(e,t){return T(e,t)+"px"}var o=W("html"),a=W(n),c=W(i),L=W.fancybox=function(){L.open.apply(this,arguments)},r=navigator.userAgent.match(/msie/i),s=null,l=i.createTouch!==d;W.extend(L,{version:"2.1.5",defaults:{padding:0,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!l,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><ul class="fancybox-socials__list"><li class="fancybox-socials__item"><a class="class="fancybox-socials__link href=""><i class="fab fa-facebook-f"></i></a></li><li class="fancybox-socials__item"><a class="class="fancybox-socials__link href=""><i class="fab fa-vk"></i></a></li><li class="fancybox-socials__item"><a class="class="fancybox-socials__link href=""><i class="fab fa-twitter"></i></a></li><li class="fancybox-socials__item"><a class="class="fancybox-socials__link href=""><i class="fab fa-odnoklassniki"></i></i></a></li><li class="fancybox-socials__item"><a class="class="fancybox-socials__link href=""><i class="fas fa-share-alt"></i></a></li></ul><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(r?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',socials:'<ul class="fancybox-socials__list"><li class="fancybox-socials__item"><a class="class="fancybox-socials__link href=""><i class="fab fa-facebook-f"></i></a></li><li class="fancybox-socials__item"><a class="class="fancybox-socials__link href=""><i class="fab fa-vk"></i></a></li><li class="fancybox-socials__item"><a class="class="fancybox-socials__link href=""><i class="fab fa-twitter"></i></a></li><li class="fancybox-socials__item"><a class="class="fancybox-socials__link href=""><i class="fab fa-twitter"></i></a></li><li class="fancybox-socials__item"><a class="class="fancybox-socials__link href=""><i class="fas fa-share-alt"></i></a></li></ul>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:W.noop,beforeLoad:W.noop,afterLoad:W.noop,beforeShow:W.noop,afterShow:W.noop,beforeChange:W.noop,beforeClose:W.noop,afterClose:W.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(l,c){if(l&&(W.isPlainObject(c)||(c={}),!1!==L.close(!0)))return W.isArray(l)||(l=p(l)?W(l).get():[l]),W.each(l,function(e,t){var i,a,n,o,r,s={};"object"===W.type(t)&&(t.nodeType&&(t=W(t)),p(t)?(s={href:t.data("fancybox-href")||t.attr("href"),title:W("<div/>").text(t.data("fancybox-title")||t.attr("title")).html(),isDom:!0,element:t},W.metadata&&W.extend(!0,s,t.metadata())):s=t),i=c.href||s.href||(f(t)?t:null),a=c.title!==d?c.title:s.title||"",!(o=(n=c.content||s.content)?"html":c.type||s.type)&&s.isDom&&(o=(o=t.data("fancybox-type"))||((o=t.prop("class").match(/fancybox\.(\w+)/))?o[1]:null)),f(i)&&(o||(L.isImage(i)?o="image":L.isSWF(i)?o="swf":"#"===i.charAt(0)?o="inline":f(t)&&(o="html",n=t)),"ajax"===o&&(i=(r=i.split(/\s+/,2)).shift(),r=r.shift())),n||("inline"===o?i?n=W(f(i)?i.replace(/.*(?=#[^\s]+$)/,""):i):s.isDom&&(n=t):"html"===o?n=i:o||i||!s.isDom||(o="inline",n=t)),W.extend(s,{href:i,type:o,content:n,title:a,selector:r}),l[e]=s}),L.opts=W.extend(!0,{},L.defaults,c),c.keys!==d&&(L.opts.keys=!!c.keys&&W.extend({},L.defaults.keys,c.keys)),L.group=l,L._start(L.opts.index)},cancel:function(){var e=L.coming;e&&!1===L.trigger("onCancel")||(L.hideLoading(),e&&(L.ajaxLoad&&L.ajaxLoad.abort(),L.ajaxLoad=null,L.imgPreload&&(L.imgPreload.onload=L.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),L.coming=null,L.current||L._afterZoomOut(e)))},close:function(e){L.cancel(),!1!==L.trigger("beforeClose")&&(L.unbindEvents(),L.isActive&&(L.isOpen&&!0!==e?(L.isOpen=L.isOpened=!1,L.isClosing=!0,W(".fancybox-item, .fancybox-nav").remove(),L.wrap.stop(!0,!0).removeClass("fancybox-opened"),L.transitions[L.current.closeMethod]()):(W(".fancybox-wrap").stop(!0).trigger("onReset").remove(),L._afterZoomOut())))},play:function(e){function t(){clearTimeout(L.player.timer)}function i(){t(),L.current&&L.player.isActive&&(L.player.timer=setTimeout(L.next,L.current.playSpeed))}function a(){t(),c.unbind(".player"),L.player.isActive=!1,L.trigger("onPlayEnd")}!0===e||!L.player.isActive&&!1!==e?L.current&&(L.current.loop||L.current.index<L.group.length-1)&&(L.player.isActive=!0,c.bind({"onCancel.player beforeClose.player":a,"onUpdate.player":i,"beforeLoad.player":t}),i(),L.trigger("onPlayStart")):a()},next:function(e){var t=L.current;t&&(f(e)||(e=t.direction.next),L.jumpto(t.index+1,e,"next"))},prev:function(e){var t=L.current;t&&(f(e)||(e=t.direction.prev),L.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,i){var a=L.current;a&&(e=T(e),L.direction=t||a.direction[e>=a.index?"next":"prev"],L.router=i||"jumpto",a.loop&&(e<0&&(e=a.group.length+e%a.group.length),e%=a.group.length),a.group[e]!==d&&(L.cancel(),L._start(e)))},reposition:function(e,t){var i,a=L.current,n=a?a.wrap:null;n&&(i=L._getPosition(t),e&&"scroll"===e.type?(delete i.position,n.stop(!0,!0).animate(i,200)):(n.css(i),a.pos=W.extend({},a.dim,i)))},update:function(t){var i=t&&t.originalEvent&&t.originalEvent.type,a=!i||"orientationchange"===i;a&&(clearTimeout(s),s=null),L.isOpen&&!s&&(s=setTimeout(function(){var e=L.current;e&&!L.isClosing&&(L.wrap.removeClass("fancybox-tmp"),(a||"load"===i||"resize"===i&&e.autoResize)&&L._setDimension(),"scroll"===i&&e.canShrink||L.reposition(t),L.trigger("onUpdate"),s=null)},a&&!l?0:300))},toggle:function(e){L.isOpen&&(L.current.fitToView="boolean"===W.type(e)?e:!L.current.fitToView,l&&(L.wrap.removeAttr("style").addClass("fancybox-tmp"),L.trigger("onUpdate")),L.update())},hideLoading:function(){c.unbind(".loading"),W("#fancybox-loading").remove()},showLoading:function(){var e,t;L.hideLoading(),e=W('<div id="fancybox-loading"><div></div></div>').click(L.cancel).appendTo("body"),c.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),L.cancel())}),L.defaults.fixed||(t=L.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x})),L.trigger("onLoading")},getViewport:function(){var e=L.current&&L.current.locked||!1,t={x:a.scrollLeft(),y:a.scrollTop()};return e&&e.length?(t.w=e[0].clientWidth,t.h=e[0].clientHeight):(t.w=l&&n.innerWidth?n.innerWidth:a.width(),t.h=l&&n.innerHeight?n.innerHeight:a.height()),t},unbindEvents:function(){L.wrap&&p(L.wrap)&&L.wrap.unbind(".fb"),c.unbind(".fb"),a.unbind(".fb")},bindEvents:function(){var t,r=L.current;r&&(a.bind("orientationchange.fb"+(l?"":" resize.fb")+(r.autoCenter&&!r.locked?" scroll.fb":""),L.update),(t=r.keys)&&c.bind("keydown.fb",function(i){var a=i.which||i.keyCode,e=i.target||i.srcElement;if(27===a&&L.coming)return!1;i.ctrlKey||i.altKey||i.shiftKey||i.metaKey||e&&(e.type||W(e).is("[contenteditable]"))||W.each(t,function(e,t){return 1<r.group.length&&t[a]!==d?(L[e](t[a]),i.preventDefault(),!1):-1<W.inArray(a,t)?(L[e](),i.preventDefault(),!1):void 0})}),W.fn.mousewheel&&r.mouseWheel&&L.wrap.bind("mousewheel.fb",function(e,t,i,a){for(var n=W(e.target||null),o=!1;n.length&&!(o||n.is(".fancybox-skin")||n.is(".fancybox-wrap"));)o=n[0]&&!(n[0].style.overflow&&"hidden"===n[0].style.overflow)&&(n[0].clientWidth&&n[0].scrollWidth>n[0].clientWidth||n[0].clientHeight&&n[0].scrollHeight>n[0].clientHeight),n=W(n).parent();0!==t&&!o&&1<L.group.length&&!r.canShrink&&(0<a||0<i?L.prev(0<a?"down":"left"):(a<0||i<0)&&L.next(a<0?"up":"right"),e.preventDefault())}))},trigger:function(i,e){var t,a=e||L.coming||L.current;if(a){if(W.isFunction(a[i])&&(t=a[i].apply(a,Array.prototype.slice.call(arguments,1))),!1===t)return!1;a.helpers&&W.each(a.helpers,function(e,t){t&&L.helpers[e]&&W.isFunction(L.helpers[e][i])&&L.helpers[e][i](W.extend(!0,{},L.helpers[e].defaults,t),a)})}c.trigger(i)},isImage:function(e){return f(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return f(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,i,a={};if(e=T(e),!(t=L.group[e]||null))return!1;if(t=(a=W.extend(!0,{},L.opts,t)).margin,i=a.padding,"number"===W.type(t)&&(a.margin=[t,t,t,t]),"number"===W.type(i)&&(a.padding=[i,i,i,i]),a.modal&&W.extend(!0,a,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),a.autoSize&&(a.autoWidth=a.autoHeight=!0),"auto"===a.width&&(a.autoWidth=!0),"auto"===a.height&&(a.autoHeight=!0),a.group=L.group,a.index=e,L.coming=a,!1===L.trigger("beforeLoad"))L.coming=null;else{if(i=a.type,t=a.href,!i)return L.coming=null,!(!L.current||!L.router||"jumpto"===L.router)&&(L.current.index=e,L[L.router](L.direction));if(L.isActive=!0,"image"!==i&&"swf"!==i||(a.autoHeight=a.autoWidth=!1,a.scrolling="visible"),"image"===i&&(a.aspectRatio=!0),"iframe"===i&&l&&(a.scrolling="scroll"),a.wrap=W(a.tpl.wrap).addClass("fancybox-"+(l?"mobile":"desktop")+" fancybox-type-"+i+" fancybox-tmp "+a.wrapCSS).appendTo(a.parent||"body"),W.extend(a,{skin:W(".fancybox-skin",a.wrap),outer:W(".fancybox-outer",a.wrap),inner:W(".fancybox-inner",a.wrap)}),W.each(["Top","Right","Bottom","Left"],function(e,t){a.skin.css("padding"+t,E(a.padding[e]))}),L.trigger("onReady"),"inline"===i||"html"===i){if(!a.content||!a.content.length)return L._error("content")}else if(!t)return L._error("href");"image"===i?L._loadImage():"ajax"===i?L._loadAjax():"iframe"===i?L._loadIframe():L._afterLoad()}},_error:function(e){W.extend(L.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:L.coming.tpl.error}),L._afterLoad()},_loadImage:function(){var e=L.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,L.coming.width=this.width/L.opts.pixelRatio,L.coming.height=this.height/L.opts.pixelRatio,L._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,L._error("image")},e.src=L.coming.href,!0!==e.complete&&L.showLoading()},_loadAjax:function(){var i=L.coming;L.showLoading(),L.ajaxLoad=W.ajax(W.extend({},i.ajax,{url:i.href,error:function(e,t){L.coming&&"abort"!==t?L._error("ajax",e):L.hideLoading()},success:function(e,t){"success"===t&&(i.content=e,L._afterLoad())}}))},_loadIframe:function(){var e=L.coming,t=W(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",l?"auto":e.iframe.scrolling).attr("src",e.href);W(e.wrap).bind("onReset",function(){try{W(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(L.showLoading(),t.one("load",function(){W(this).data("ready",1),l||W(this).bind("load.fb",L.update),W(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),L._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||L._afterLoad()},_preloadImages:function(){for(var e,t=L.group,i=L.current,a=t.length,n=i.preload?Math.min(i.preload,a-1):0,o=1;o<=n;o+=1)"image"===(e=t[(i.index+o)%a]).type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var i,e,t,a,n,o=L.coming,r=L.current;if(L.hideLoading(),o&&!1!==L.isActive)if(!1===L.trigger("afterLoad",o,r))o.wrap.stop(!0).trigger("onReset").remove(),L.coming=null;else{switch(r&&(L.trigger("beforeChange",r),r.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),L.unbindEvents(),i=o.content,e=o.type,t=o.scrolling,W.extend(L,{wrap:o.wrap,skin:o.skin,outer:o.outer,inner:o.inner,current:o,previous:r}),a=o.href,e){case"inline":case"ajax":case"html":o.selector?i=W("<div>").html(i).find(o.selector):p(i)&&(i.data("fancybox-placeholder")||i.data("fancybox-placeholder",W('<div class="fancybox-placeholder"></div>').insertAfter(i).hide()),i=i.show().detach(),o.wrap.bind("onReset",function(){W(this).find(i).length&&i.hide().replaceAll(i.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":i=o.tpl.image.replace(/\{href\}/g,a);break;case"swf":i='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+a+'"></param>',n="",W.each(o.swf,function(e,t){i+='<param name="'+e+'" value="'+t+'"></param>',n+=" "+e+'="'+t+'"'}),i+='<embed src="'+a+'" type="application/x-shockwave-flash" width="100%" height="100%"'+n+"></embed></object>"}p(i)&&i.parent().is(o.inner)||o.inner.append(i),L.trigger("beforeShow"),o.inner.css("overflow","yes"===t?"scroll":"no"===t?"hidden":t),L._setDimension(),L.reposition(),L.isOpen=!1,L.coming=null,L.bindEvents(),L.isOpened?r.prevMethod&&L.transitions[r.prevMethod]():W(".fancybox-wrap").not(o.wrap).stop(!0).trigger("onReset").remove(),L.transitions[L.isOpened?o.nextMethod:o.openMethod](),L._preloadImages()}},_setDimension:function(){var e,t,i,a,n,o,r,s,l,c=L.getViewport(),d=0,p=!1,f=!1,p=L.wrap,h=L.skin,u=L.inner,g=L.current,f=g.width,y=g.height,m=g.minWidth,x=g.minHeight,b=g.maxWidth,v=g.maxHeight,w=g.scrolling,k=g.scrollOutside?g.scrollbarWidth:0,_=g.margin,C=T(_[1]+_[3]),O=T(_[0]+_[2]);if(p.add(h).add(u).width("auto").height("auto").removeClass("fancybox-tmp"),t=C+(_=T(h.outerWidth(!0)-h.width())),i=O+(e=T(h.outerHeight(!0)-h.height())),a=S(f)?(c.w-t)*T(f)/100:f,n=S(y)?(c.h-i)*T(y)/100:y,"iframe"===g.type){if(l=g.content,g.autoHeight&&1===l.data("ready"))try{l[0].contentWindow.document.location&&(u.width(a).height(9999),o=l.contents().find("body"),k&&o.css("overflow-x","hidden"),n=o.outerHeight(!0))}catch(e){}}else(g.autoWidth||g.autoHeight)&&(u.addClass("fancybox-tmp"),g.autoWidth||u.width(a),g.autoHeight||u.height(n),g.autoWidth&&(a=u.width()),g.autoHeight&&(n=u.height()),u.removeClass("fancybox-tmp"));if(f=T(a),y=T(n),s=a/n,m=T(S(m)?T(m,"w")-t:m),b=T(S(b)?T(b,"w")-t:b),x=T(S(x)?T(x,"h")-i:x),o=b,r=v=T(S(v)?T(v,"h")-i:v),g.fitToView&&(b=Math.min(c.w-t,b),v=Math.min(c.h-i,v)),t=c.w-C,O=c.h-O,g.aspectRatio?(b<f&&(y=T((f=b)/s)),v<y&&(f=T((y=v)*s)),f<m&&(y=T((f=m)/s)),y<x&&(f=T((y=x)*s))):(f=Math.max(m,Math.min(f,b)),g.autoHeight&&"iframe"!==g.type&&(u.width(f),y=u.height()),y=Math.max(x,Math.min(y,v))),g.fitToView)if(u.width(f).height(y),p.width(f+_),c=p.width(),C=p.height(),g.aspectRatio)for(;(t<c||O<C)&&m<f&&x<y&&!(19<d++);)y=Math.max(x,Math.min(v,y-10)),(f=T(y*s))<m&&(y=T((f=m)/s)),b<f&&(y=T((f=b)/s)),u.width(f).height(y),p.width(f+_),c=p.width(),C=p.height();else f=Math.max(m,Math.min(f,f-(c-t))),y=Math.max(x,Math.min(y,y-(C-O)));k&&"auto"===w&&y<n&&f+_+k<t&&(f+=k),u.width(f).height(y),p.width(f+_),c=p.width(),C=p.height(),p=(t<c||O<C)&&m<f&&x<y,f=g.aspectRatio?f<o&&y<r&&f<a&&y<n:(f<o||y<r)&&(f<a||y<n),W.extend(g,{dim:{width:E(c),height:E(C)},origWidth:a,origHeight:n,canShrink:p,canExpand:f,wPadding:_,hPadding:e,wrapSpace:C-h.outerHeight(!0),skinSpace:h.height()-y}),!l&&g.autoHeight&&x<y&&y<v&&!f&&u.height("auto")},_getPosition:function(e){var t=L.current,i=L.getViewport(),a=t.margin,n=L.wrap.width()+a[1]+a[3],o=L.wrap.height()+a[0]+a[2],a={position:"absolute",top:a[0],left:a[3]};return t.autoCenter&&t.fixed&&!e&&o<=i.h&&n<=i.w?a.position="fixed":t.locked||(a.top+=i.y,a.left+=i.x),a.top=E(Math.max(a.top,a.top+(i.h-o)*t.topRatio)),a.left=E(Math.max(a.left,a.left+(i.w-n)*t.leftRatio)),a},_afterZoomIn:function(){var t=L.current;t&&(L.isOpen=L.isOpened=!0,L.wrap.css("overflow","visible").addClass("fancybox-opened"),L.update(),(t.closeClick||t.nextClick&&1<L.group.length)&&L.inner.css("cursor","pointer").bind("click.fb",function(e){W(e.target).is("a")||W(e.target).parent().is("a")||(e.preventDefault(),L[t.closeClick?"close":"next"]())}),t.closeBtn&&W(t.tpl.closeBtn).appendTo(L.skin).bind("click.fb",function(e){e.preventDefault(),L.close()}),t.arrows&&1<L.group.length&&((t.loop||0<t.index)&&W(t.tpl.prev).appendTo(L.outer).bind("click.fb",L.prev),(t.loop||t.index<L.group.length-1)&&W(t.tpl.next).appendTo(L.outer).bind("click.fb",L.next)),L.trigger("afterShow"),t.loop||t.index!==t.group.length-1?L.opts.autoPlay&&!L.player.isActive&&(L.opts.autoPlay=!1,L.play(!0)):L.play(!1))},_afterZoomOut:function(e){e=e||L.current,W(".fancybox-wrap").trigger("onReset").remove(),W.extend(L,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),L.trigger("afterClose",e)}}),L.transitions={getOrigPosition:function(){var e=L.current,t=e.element,i=e.orig,a={},n=50,o=50,r=e.hPadding,s=e.wPadding,l=L.getViewport();return!i&&e.isDom&&t.is(":visible")&&((i=t.find("img:first")).length||(i=t)),p(i)?(a=i.offset(),i.is("img")&&(n=i.outerWidth(),o=i.outerHeight())):(a.top=l.y+(l.h-o)*e.topRatio,a.left=l.x+(l.w-n)*e.leftRatio),"fixed"!==L.wrap.css("position")&&!e.locked||(a.top-=l.y,a.left-=l.x),{top:E(a.top-r*e.topRatio),left:E(a.left-s*e.leftRatio),width:E(n+s),height:E(o+r)}},step:function(e,t){var i,a=t.prop,n=L.current,o=n.wrapSpace,r=n.skinSpace;"width"!==a&&"height"!==a||(i=t.end===t.start?1:(e-t.start)/(t.end-t.start),L.isClosing&&(i=1-i),n=e-(n="width"===a?n.wPadding:n.hPadding),L.skin[a](T("width"===a?n:n-o*i)),L.inner[a](T("width"===a?n:n-o*i-r*i)))},zoomIn:function(){var e=L.current,t=e.pos,i=e.openEffect,a="elastic"===i,n=W.extend({opacity:1},t);delete n.position,a?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===i&&(t.opacity=.1),L.wrap.css(t).animate(n,{duration:"none"===i?0:e.openSpeed,easing:e.openEasing,step:a?this.step:null,complete:L._afterZoomIn})},zoomOut:function(){var e=L.current,t=e.closeEffect,i="elastic"===t,a={opacity:.1};i&&(a=this.getOrigPosition(),e.closeOpacity&&(a.opacity=.1)),L.wrap.animate(a,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:i?this.step:null,complete:L._afterZoomOut})},changeIn:function(){var e,t=L.current,i=t.nextEffect,a=t.pos,n={opacity:1},o=L.direction;a.opacity=.1,"elastic"===i&&(e="down"===o||"up"===o?"top":"left","down"===o||"right"===o?(a[e]=E(T(a[e])-200),n[e]="+=200px"):(a[e]=E(T(a[e])+200),n[e]="-=200px")),"none"===i?L._afterZoomIn():L.wrap.css(a).animate(n,{duration:t.nextSpeed,easing:t.nextEasing,complete:L._afterZoomIn})},changeOut:function(){var e=L.previous,t=e.prevEffect,i={opacity:.1},a=L.direction;"elastic"===t&&(i["down"===a||"up"===a?"top":"left"]=("up"===a||"left"===a?"-":"+")+"=200px"),e.wrap.animate(i,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){W(this).trigger("onReset").remove()}})}},L.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!l,fixed:!0},overlay:null,fixed:!1,el:W("html"),create:function(e){var t;e=W.extend({},this.defaults,e),this.overlay&&this.close(),t=L.coming?L.coming.parent:e.parent,this.overlay=W('<div class="fancybox-overlay"></div>').appendTo(t&&t.lenth?t:"body"),this.fixed=!1,e.fixed&&L.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=W.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(a.bind("resize.overlay",W.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){if(W(e.target).hasClass("fancybox-overlay"))return L.isActive?L.close():t.close(),!1}),this.overlay.css(e.css).show()},close:function(){a.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(W(".fancybox-margin").removeClass("fancybox-margin"),this.el.removeClass("fancybox-lock"),a.scrollTop(this.scrollV).scrollLeft(this.scrollH)),W(".fancybox-overlay").remove().hide(),W.extend(this,{overlay:null,fixed:!1})},update:function(){var e,t="100%";this.overlay.width(t).height("100%"),r?(e=Math.max(i.documentElement.offsetWidth,i.body.offsetWidth),c.width()>e&&(t=c.width())):c.width()>a.width()&&(t=c.width()),this.overlay.width(t).height(c.height())},onReady:function(e,t){var i=this.overlay;W(".fancybox-overlay").stop(!0,!0),i||this.create(e),e.locked&&this.fixed&&t.fixed&&(t.locked=this.overlay.append(t.wrap),t.fixed=!1),!0===e.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){t.locked&&!this.el.hasClass("fancybox-lock")&&(!1!==this.fixPosition&&W("*").filter(function(){return"fixed"===W(this).css("position")&&!W(this).hasClass("fancybox-overlay")&&!W(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin"),this.scrollV=a.scrollTop(),this.scrollH=a.scrollLeft(),this.el.addClass("fancybox-lock"),a.scrollTop(this.scrollV).scrollLeft(this.scrollH)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!L.coming&&this.overlay.fadeOut(e.speedOut,W.proxy(this.close,this))}},L.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t=L.current,i=t.title,a=e.type;if(W.isFunction(i)&&(i=i.call(t.element,t)),f(i)&&""!==W.trim(i)){switch(t=W('<div class="fancybox-title fancybox-title-'+a+'-wrap">'+i+"</div>"),a){case"inside":a=L.skin;break;case"outside":a=L.wrap;break;case"over":a=L.inner;break;default:a=L.skin,t.appendTo("body"),r&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),L.current.margin[2]+=Math.abs(T(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](a)}}},W.fn.fancybox=function(o){function e(e){var t,i,a=W(this).blur(),n=l;e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||a.is(".fancybox-wrap")||(t=o.groupAttr||"data-fancybox-group",(i=a.attr(t))||(t="rel",i=a.get(0)[t]),i&&""!==i&&"nofollow"!==i&&(n=(a=(a=s.length?W(s):r).filter("["+t+'="'+i+'"]')).index(this)),o.index=n,!1!==L.open(a,o)&&e.preventDefault())}var r=W(this),s=this.selector||"",l=(o=o||{}).index||0;return s&&!1!==o.live?c.undelegate(s,"click.fb-start").delegate(s+":not('.fancybox-item, .fancybox-nav')","click.fb-start",e):r.unbind("click.fb-start").bind("click.fb-start",e),this.filter("[data-fancybox-start=1]").trigger("click"),this},c.ready(function(){var e,t,i,a;W.scrollbarWidth===d&&(W.scrollbarWidth=function(){var e=W('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=(t=e.children()).innerWidth()-t.height(99).innerWidth();return e.remove(),t}),W.support.fixedPosition===d&&(W.support.fixedPosition=(i=W('<div style="position:fixed;top:20px;"></div>').appendTo("body"),a=20===i[0].offsetTop||15===i[0].offsetTop,i.remove(),a)),W.extend(L.defaults,{scrollbarWidth:W.scrollbarWidth(),fixed:W.support.fixedPosition,parent:W("body")}),e=W(n).width(),o.addClass("fancybox-lock-test"),t=W(n).width(),o.removeClass("fancybox-lock-test"),W("<style type='text/css'>.fancybox-margin{margin-right:"+(t-e)+"px;}</style>").appendTo("head")})}(window,document,jQuery);