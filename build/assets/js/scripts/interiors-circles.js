"use strict";

var interiorsCircles = document.querySelectorAll('[data-element="interiors-circle"]');
if (interiorsCircles.length) interiorsCirclesInit();

function interiorsCirclesInit() {
  var wraps = document.querySelectorAll('.interiors__wrap');
  var layer = document.querySelector('.interiors__layer');
  var modals = document.querySelectorAll('.interiors__modal_fixed');
  var closeButtons = document.querySelectorAll('.interiors__modal-close');
  window.addEventListener('resize', checkWraps);
  checkWraps();
  interiorsCirclesMobileInit();

  function wrapsDesktopInit() {
    for (var i = 0; i < wraps.length; i++) {
      var top = +wraps[i].getAttribute('data-top');
      var left = +wraps[i].getAttribute('data-left');
      setDesktopCoords(wraps[i], top, left);

      if (left > 600) {
        wraps[i].classList.add('interiors__wrap_left');
      } else {
        wraps[i].classList.add('interiors__wrap_right');
      }

      wraps[i].classList.add('interiors__wrap_active');
      var modal = wraps[i].querySelector('.interiors__modal');
      var height = modal.clientHeight;
      if (top < height + 10 - 48) wraps[i].classList.add('interiors__wrap_center');
      wraps[i].classList.remove('interiors__wrap_active');
    }
  }

  function setDesktopCoords(wrap, top, left) {
    wrap.style.top = top + 'px';
    wrap.style.left = left + 'px';
  }

  function setMobileCoords() {
    for (var i = 0; i < wraps.length; i++) {
      var top = +wraps[i].getAttribute('data-top');
      var left = +wraps[i].getAttribute('data-left');
      wraps[i].style.top = top * 214 / 570 + 'px';
      wraps[i].style.left = left * 343 / 912 + 'px';
    }
  }

  function checkWraps() {
    if (document.body.clientWidth < 1260) {
      setMobileCoords();
    } else {
      wrapsDesktopInit();
    }
  }

  function interiorsCirclesMobileInit() {
    for (var i = 0; i < interiorsCircles.length; i++) {
      interiorsCircleInit(interiorsCircles[i]);
    }

    function interiorsCircleInit(circle) {
      circle.addEventListener('click', openModal);
    }

    layer.addEventListener('click', closeModal);

    for (var _i = 0; _i < closeButtons.length; _i++) {
      closeButtons[_i].addEventListener('click', closeModal);
    }

    function openModal() {
      var index = this.getAttribute('data-index');
      modals[index].classList.add('interiors__modal_active');
      layer.classList.add('interiors__layer_active');
    }

    function closeModal() {
      var activeModal = document.querySelector('.interiors__modal_active');
      activeModal.classList.remove('interiors__modal_active');
      layer.classList.remove('interiors__layer_active');
    }
  }
}
//# sourceMappingURL=interiors-circles.js.map
