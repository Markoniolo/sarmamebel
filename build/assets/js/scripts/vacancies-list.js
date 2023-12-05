"use strict";

var vacanciesList = document.querySelector('[data-element="vacancies-list"]');
if (vacanciesList) vacanciesListInit();

function vacanciesListInit() {
  var tops = vacanciesList.querySelectorAll('.vacancies__top');

  for (var i = 0; i < tops.length; i++) {
    tops[i].addEventListener('click', toggleTop);
  }

  function toggleTop() {
    if (!this.classList.contains('vacancies__top_active')) {
      var oldActive = vacanciesList.querySelector('.vacancies__top_active');
      if (oldActive) oldActive.classList.remove('vacancies__top_active');
    }

    this.classList.toggle('vacancies__top_active');
  }
}
//# sourceMappingURL=vacancies-list.js.map
