const bonusTable = document.querySelector('[data-element="bonus-table"]')

if (bonusTable) bonusTableInit()

function bonusTableInit () {
    const title = document.querySelector('[data-element="bonus-table-title"]')
    title.addEventListener('click', toggleBonus)
}

function toggleBonus () {
    bonusTable.classList.toggle('bonus-table_hide')
}
