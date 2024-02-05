"use strict";

var specialOffer = document.querySelector('.special-offer');
if (specialOffer) specialOfferInit();

function specialOfferInit() {
  var btnClose = document.querySelector('.special-offer-close');
  btnClose.addEventListener('click', closeOffer);
}

function closeOffer() {
  specialOffer.classList.add('special-offer_hide');
}
//# sourceMappingURL=special-offer.js.map
