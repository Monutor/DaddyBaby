(()=>{var e={362:()=>{try{var e=new Swiper(".hero-slider",{slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),t=document.querySelector(".hero-slider__arrows .slider-arrows__arrow--left"),n=document.querySelector(".hero-slider__arrows .slider-arrows__arrow--right");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))}catch(e){}},937:()=>{new Swiper(".popular-brands__slider",{spaceBetween:40,speed:2500,autoplay:{delay:1},loop:!0,centeredSlides:!0,slidesPerView:"auto",allowTouchMove:!1,disableOnInteraction:!0})},744:()=>{try{var e=new Swiper(".recommends-swiper",{slidesPerView:3,spaceBetween:33,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),t=document.querySelector(".recommends__arrows .slider-arrows__arrow--left"),n=document.querySelector(".recommends__arrows .slider-arrows__arrow--right");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))}catch(e){}},598:()=>{function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function d(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function r(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function s(e){t=!1}function l(){document.addEventListener("mousemove",a),document.addEventListener("mousedown",a),document.addEventListener("mouseup",a),document.addEventListener("pointermove",a),document.addEventListener("pointerdown",a),document.addEventListener("pointerup",a),document.addEventListener("touchmove",a),document.addEventListener("touchstart",a),document.addEventListener("touchend",a)}function a(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",a),document.removeEventListener("mousedown",a),document.removeEventListener("mouseup",a),document.removeEventListener("pointermove",a),document.removeEventListener("pointerdown",a),document.removeEventListener("pointerup",a),document.removeEventListener("touchmove",a),document.removeEventListener("touchstart",a),document.removeEventListener("touchend",a))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(d(e.activeElement)&&r(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),l())}),!0),l(),e.addEventListener("focus",(function(e){var n,o,s;d(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(s=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===s&&!n.readOnly||n.isContentEditable))&&r(e.target)}),!0),e.addEventListener("blur",(function(e){var t;d(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,n),d.exports}(()=>{"use strict";n(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};var t,o,i,d,r,s,l,a,c=function(){var t,n=null===(t=document)||void 0===t?void 0:t.querySelectorAll(".fixed-block"),o=(document.body,parseInt(e.bodyEl.dataset.position,10));n.forEach((function(e){e.style.paddingRight="0px"})),e.bodyEl.style.paddingRight="0px",e.bodyEl.style.top="auto",e.bodyEl.classList.remove("dis-scroll"),window.scroll({top:o,left:0}),e.bodyEl.removeAttribute("data-position"),e.htmlEl.style.scrollBehavior="smooth"};r=null===(t=document)||void 0===t?void 0:t.querySelector("[data-burger]"),s=null===(o=document)||void 0===o?void 0:o.querySelector("[data-menu]"),l=null===(i=document)||void 0===i?void 0:i.querySelectorAll("[data-menu-item]"),a=null===(d=document)||void 0===d?void 0:d.querySelector("body"),document.querySelector(".mobile-menu"),null==r||r.addEventListener("click",(function(t){null==r||r.classList.toggle("burger--active"),null==s||s.classList.toggle("mobile-menu--active"),null!=s&&s.classList.contains("mobile-menu--active")?(null==r||r.setAttribute("aria-expanded","true"),null==r||r.setAttribute("aria-label","Закрыть меню"),null==a||a.classList.add("lock"),function(){var t,n=null===(t=document)||void 0===t?void 0:t.querySelectorAll(".fixed-block"),o=window.scrollY,i="".concat(window.innerWidth-e.bodyEl.offsetWidth,"px");e.htmlEl.style.scrollBehavior="none",n.forEach((function(e){e.style.paddingRight=i})),e.bodyEl.style.paddingRight=i,e.bodyEl.classList.add("dis-scroll"),e.bodyEl.dataset.position=o,e.bodyEl.style.top="-".concat(o,"px")}()):(null==r||r.setAttribute("aria-expanded","false"),null==r||r.setAttribute("aria-label","Открыть меню"),null==a||a.classList.remove("lock"),c())})),null==l||l.forEach((function(e){e.addEventListener("click",(function(){r.classList.remove("burger--active"),s.classList.remove("mobile-menu--active"),null==a||a.classList.remove("lock"),c()}))})),n(362),n(744),n(937)})()})();