"use strict";

var certificatesSlider = document.querySelector('[data-element="certificates-slider"]');
if (certificatesSlider) certificatesSliderInit();

function certificatesSliderInit() {
  var scrollbar = certificatesSlider.querySelector('.swiper-scrollbar');
  swiper = new Swiper(certificatesSlider, {
    slidesPerView: 'auto',
    scrollbar: {
      el: scrollbar
    }
  });
}
//# sourceMappingURL=sertificates-slider.js.map
