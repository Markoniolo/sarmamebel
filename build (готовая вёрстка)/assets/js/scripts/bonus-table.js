"use strict";

var bonusTable = document.querySelector('[data-element="bonus-table"]');
if (bonusTable) bonusTableInit();

function bonusTableInit() {
  var title = document.querySelector('[data-element="bonus-table-title"]');
  title.addEventListener('click', toggleBonus);
}

function toggleBonus() {
  bonusTable.classList.toggle('bonus-table_hide');
}
//# sourceMappingURL=bonus-table.js.map
