"use strict";

var compareButtons = document.querySelectorAll('[data-element="compare"]');
if (compareButtons.length) compareButtonsInit();

function compareButtonsInit() {
  var notification = document.querySelector('.notification');
  var notificationTitle = document.querySelector('.notification__title');
  var notificationName = document.querySelector('.notification__name');
  var notificationLink = document.querySelector('.notification__link');

  for (var i = 0; i < compareButtons.length; i++) {
    compareButtons[i].addEventListener('click', addToFavorite);
  }

  function addToFavorite() {
    var name = this.getAttribute('data-name');
    notificationName.innerHTML = name;
    notificationTitle.innerHTML = 'Товар добавлен в сравнение';
    notificationLink.innerHTML = 'В избранное';
    notification.classList.add('notification_active');
    activateTimer();
  }

  function activateTimer() {
    setTimeout(notificationHide, 2000);
  }

  function notificationHide() {
    notification.classList.remove('notification_active');
  }
}
//# sourceMappingURL=compare.js.map
