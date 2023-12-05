"use strict";

var faqTopArray = document.querySelectorAll('[data-element="faq-top"]');

for (var i = 0; i < faqTopArray.length; i++) {
  faqTopArray[i].addEventListener('click', toggleFaqTop);
}

function toggleFaqTop() {
  if (this.classList.contains('faq__top_active')) {
    this.classList.remove('faq__top_active');
  } else {
    var oldActive = document.querySelector('.faq__top_active');
    if (oldActive) oldActive.classList.remove('faq__top_active');
    this.classList.add('faq__top_active');
  }
}
//# sourceMappingURL=faq.js.map
