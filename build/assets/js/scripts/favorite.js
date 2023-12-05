"use strict";

var favoriteButtons = document.querySelectorAll('[data-element="favorite"]');
if (favoriteButtons.length) favoriteButtonsInit();

function favoriteButtonsInit() {
  var notification = document.querySelector('.notification');
  var notificationTitle = document.querySelector('.notification__title');
  var notificationName = document.querySelector('.notification__name');
  var notificationLink = document.querySelector('.notification__link');

  for (var i = 0; i < favoriteButtons.length; i++) {
    favoriteButtons[i].addEventListener('click', addToFavorite);
  }

  function addToFavorite() {
    var name = this.getAttribute('data-name');
    notificationName.innerHTML = name;
    notificationTitle.innerHTML = 'Товар добавлен в избранное';
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
//# sourceMappingURL=favorite.js.map
