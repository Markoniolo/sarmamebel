"use strict";

var modalNewPas = document.querySelector('.modal-new-pas');
if (modalNewPas) modalNewPasInit();

function modalNewPasInit() {
  var title = document.querySelector('.modal-new-pas__title');
  var submit = document.querySelector('.modal-new-pas__submit');
  submit.addEventListener('click', sendPassword, {
    once: true
  });

  function sendPassword() {
    submit.removeEventListener('click', sendPassword, {
      once: true
    });
    submit.addEventListener('click', closeModalNewPas);
    submit.innerHTML = 'Хорошо';
    modalNewPas.classList.add('modal-new-pas_done');
    title.innerHTML = 'Пароль установлен';
  }

  function closeModalNewPas() {
    var closeBtn = modalNewPas.querySelector('.f-button.is-close-btn');
    closeBtn.click();
  }
}
//# sourceMappingURL=modal-new-pas.js.map
