(()=>{var e={817:()=>{try{Fancybox.bind('[data-fancybox="gallery"]',{})}catch(e){}},679:()=>{document.querySelectorAll(".product-card--order").forEach((function(e){var t=e.querySelector(".counter__btn--minus"),n=e.querySelector(".counter__btn--plus"),o=e.querySelector(".counter__number");function i(e){var t=parseInt(o.value)+e;return t<1&&(t=1),t}n.addEventListener("click",(function(){o.value=i(1)})),t.addEventListener("click",(function(){o.value=i(-1)})),o.value=1}))},362:()=>{try{var e=new Swiper(".hero-slider",{slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),t=document.querySelector(".hero-slider__arrows .slider-arrows__arrow--left"),n=document.querySelector(".hero-slider__arrows .slider-arrows__arrow--right");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))}catch(e){}},937:()=>{try{new Swiper(".popular-brands__slider",{spaceBetween:40,speed:2500,autoplay:{delay:1},loop:!0,centeredSlides:!0,slidesPerView:"auto",allowTouchMove:!1,disableOnInteraction:!0}),new Swiper(".about-us__slider",{spaceBetween:40,speed:2500,autoplay:{delay:1},loop:!0,centeredSlides:!0,slidesPerView:"auto",allowTouchMove:!1,disableOnInteraction:!0})}catch(e){}},744:()=>{try{var e=window.matchMedia("(max-width: 639px)"),t=function(){if(!0!==e.matches)return!1===e.matches?n():void 0},n=function(){var e=new Swiper(".recommends-swiper",{slidesPerView:3,spaceBetween:33,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{spaceBetween:18,slidesPerView:3},1200:{slidesPerView:3,spaceBetween:33}}}),t=document.querySelector(".recommends__arrows .slider-arrows__arrow--left"),n=document.querySelector(".recommends__arrows .slider-arrows__arrow--right");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))};e.addListener(t),t()}catch(e){}},474:()=>{try{new Splide(".reviews__slider--top",{autoWidth:!0,type:"loop",gap:70,autoScroll:{speed:.5}}).mount(window.splide.Extensions),new Splide(".reviews__slider--center",{autoWidth:!0,type:"loop",gap:70,autoScroll:{speed:-.5}}).mount(window.splide.Extensions),new Splide(".reviews__slider--bottom",{autoWidth:!0,type:"loop",gap:70,autoScroll:{speed:.5}}).mount(window.splide.Extensions)}catch(e){}},158:()=>{try{var e=$(".js-section-2-tabs a"),t=$(".js-section-2-content"),n=0;e.on("click",(function(o){o.preventDefault();var i=$(this),r=i.data("index");n!==r&&($(e[n]).removeClass("active"),$(t[n]).jqt().exit(),i.addClass("active"),$(t[r]).jqt({delay:200,display:"flex"}).enter(),n=r)}))}catch(e){}},598:()=>{function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function d(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function s(e){t=!1}function a(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(r(e.activeElement)&&d(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),a())}),!0),a(),e.addEventListener("focus",(function(e){var n,o,s;r(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(s=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===s&&!n.readOnly||n.isContentEditable))&&d(e.target)}),!0),e.addEventListener("blur",(function(e){var t;r(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(()=>{"use strict";n(598),window,document,document.documentElement,document.body,n(817),n(362),n(744),n(937),n(679),n(474),n(158)})()})();