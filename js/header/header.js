/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
Drupal.behaviors.smallScreenMenu={attach:function attach(a){var b=a.getElementById("small-screen-menu-control-open"),c=a.getElementById("small-screen-menu-control-close"),d=a.getElementById("small-screen-overlay"),e=a.querySelector("body");b.addEventListener("click",function openOverlayHandler(){d.classList.remove("hidden"),e.classList.add("overflow-hidden")}),c.addEventListener("click",function closeOverlayHandler(){d.classList.add("hidden"),e.classList.remove("overflow-hidden")})}};
/******/ })()
;
//# sourceMappingURL=header.js.map