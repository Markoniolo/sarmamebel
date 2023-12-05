const partners = document.querySelector('[data-element="partners"]')

if (partners) partnersInit()

function partnersInit () {
    const tabs = partners.querySelectorAll('.partners__tab')
    const items = partners.querySelectorAll('.partners__item')

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', toggleTab)
    }

    function toggleTab () {
        if (this.classList.contains('partners__tab_active')) return

        const oldActiveTab = partners.querySelector('.partners__tab_active')
        if (oldActiveTab) oldActiveTab.classList.remove('partners__tab_active')
        this.classList.add('partners__tab_active')

        const oldActiveItem = partners.querySelector('.partners__item_active')
        if (oldActiveItem) oldActiveItem.classList.remove('partners__item_active')

        const index = this.getAttribute('data-index')
        items[index].classList.add('partners__item_active')
    }
}
