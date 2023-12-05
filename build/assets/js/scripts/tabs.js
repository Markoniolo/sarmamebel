"use strict";

var tabsContainerArray = document.querySelectorAll('[data-role="tabs-container"]');
if (tabsContainerArray.length) tabsContainerArrayInit();

function tabsContainerArrayInit() {
  for (var i = 0; i < tabsContainerArray.length; i++) {
    tabsContainerInit(tabsContainerArray[i]);
  }

  function tabsContainerInit(container) {
    var tabs = container.querySelectorAll('.tab');
    var steps = container.querySelectorAll('.tab-step');

    for (var _i = 0; _i < tabs.length; _i++) {
      tabs[_i].addEventListener('click', tabToggle);
    }

    function tabToggle() {
      if (this.classList.contains('tab_active')) return;
      var oldActiveTab = container.querySelector('.tab_active');
      oldActiveTab.classList.remove('tab_active');
      var oldActiveStep = container.querySelector('.tab-step_active');
      oldActiveStep.classList.remove('tab-step_active');
      this.classList.add('tab_active');
      var index = this.getAttribute('data-index');
      steps[index].classList.add('tab-step_active');
    }
  }
}
//# sourceMappingURL=tabs.js.map
