"use strict";

if (document.querySelector('[data-role="scroll-to-anchor"]')) setTimeout(initScrollToAnchor, 0);

function initScrollToAnchor() {
  var anchorElements = document.querySelectorAll('[data-role="scroll-to-anchor"]');

  for (var i = 0, len = anchorElements.length; i < len; i++) {
    _loopAddEventScrollToAnchor(anchorElements[i]);
  }

  function _loopAddEventScrollToAnchor(node) {
    node.addEventListener('click', clickOnTheScrollElement);
  }
}

function clickOnTheScrollElement(event) {
  event.preventDefault();
  var elementId;
  if (this.dataset.link) elementId = this.dataset.link.substr(1);else elementId = this.hash.substr(1);
  var element = document.getElementById(elementId);
  if (element) animateScrollToAnchor(element);
}

function animateScrollToAnchor(theElement) {
  var positionNow = window.pageYOffset;
  var positionElement = theElement.getBoundingClientRect().top + pageYOffset - 50;
  var duration = 300;
  var step = positionElement - positionNow;
  var start = performance.now();
  requestAnimationFrame(function animate(time) {
    var timePassed = time - start;

    if (timePassed > duration) {
      window.scrollTo(0, positionElement);
    } else {
      window.scrollTo(0, positionNow + step * (timePassed / duration));
      requestAnimationFrame(animate);
    }
  });
}
//# sourceMappingURL=scroll-to-anchor.js.map
