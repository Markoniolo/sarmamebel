const modalCitySearch = document.querySelector('[data-element="modal-city-search-input"]')

if (modalCitySearch) modalCitySearchInit()

function modalCitySearchInit () {
    new SimpleBar(document.querySelector('.modal-city__result'));

    const searchLayer = document.querySelector('[data-element="modal-city-layer"]')
    const searchBox = document.querySelector('[data-element="modal-city-search"]')
    const close = document.querySelector('[data-element="modal-city-search-close"]')

    modalCitySearch.addEventListener('focus', showSearch)
    modalCitySearch.addEventListener('blur', hideSearch)
    searchLayer.addEventListener('click', hideSearch)

    function showSearch () {
        searchBox.classList.add('modal-city__search_active')
        close.classList.add('modal-city__search-close_active')
        searchLayer.classList.add('modal-city__search-layer_active')
    }

    function hideSearch () {
        searchBox.classList.remove('modal-city__search_active')
        close.classList.remove('modal-city__search-close_active')
        searchLayer.classList.remove('modal-city__search-layer_active')
    }

}
