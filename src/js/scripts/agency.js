const agency = document.querySelector('[data-element="agency"]')

if (agency) agencyInit()

function agencyInit () {
    const tabs = document.querySelectorAll('.agency__tab')
    const list = document.querySelector('.agency__list')
    const items = document.querySelectorAll('.agency__item')

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabsToggle)
    }

    function tabsToggle () {
        if (this.classList.contains('agency__tab_active')) {
            this.classList.remove('agency__tab_active')
            refreshItems(0)
        } else {
            const oldActiveTab = agency.querySelector('.agency__tab_active')
            if (oldActiveTab) oldActiveTab.classList.remove('agency__tab_active')
            this.classList.add('agency__tab_active')
            const index = +this.getAttribute('data-index')
            refreshItems(index)
        }
    }

    function refreshItems (index) {
        if (index === 0) {
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove('agency__item_hide')
            }
        } else {
            for (let i = 0; i < items.length; i++) {
                items[i].classList.add('agency__item_hide')
            }
            const itemsCurrent = list.querySelectorAll('[data-index="'+index+'"]')
            console.log(itemsCurrent)
            for (let i = 0; i < itemsCurrent.length; i++) {
                itemsCurrent[i].classList.remove('agency__item_hide')
            }
        }
    }
}
