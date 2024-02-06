//=require scripts/helpers.js
const APP = {
	name: 'iBrush HTML Starter'
};

$(() => {
    svg4everybody()

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
        autoFocus: false,
    });
})

const headerLinkDropdown = document.querySelectorAll('[data-element="header-link-dropdown"]')

for (let i = 0; i < headerLinkDropdown.length; i++) {
    dropdownInit(headerLinkDropdown[i])
}

function dropdownInit (dropdown) {
    const activeClass = dropdown.getAttribute('data-active-class')
    const className = dropdown.getAttribute('data-class')
    dropdown.addEventListener('click', toggleDropdown)

    function toggleDropdown () {
        if (this.classList.contains(activeClass)) {
            this.classList.remove(activeClass)
        } else {
            const oldActive = document.querySelector(`.${activeClass}`)
            if (oldActive) oldActive.classList.remove(activeClass)
            this.classList.add(activeClass)
        }
    }

    window.addEventListener('click', closeDropdowns)

    function closeDropdowns (e) {
        const closestLink = e.target.closest(`.${className}`)
        if (closestLink) {
            if (closestLink.getAttribute('data-element') === 'header-link-dropdown') return
        }
        const active = document.querySelector(`.${activeClass}`)
        if (active) active.classList.remove(activeClass)
    }
}

const bonusTable = document.querySelector('[data-element="bonus-table"]')

if (bonusTable) bonusTableInit()

function bonusTableInit () {
    const title = document.querySelector('[data-element="bonus-table-title"]')
    title.addEventListener('click', toggleBonus)
}

function toggleBonus () {
    bonusTable.classList.toggle('bonus-table_hide')
}

const faqTopArray = document.querySelectorAll('[data-element="faq-top"]')

for (let i = 0; i < faqTopArray.length; i++) {
    faqTopArray[i].addEventListener('click', toggleFaqTop)
}

function toggleFaqTop () {
    if (this.classList.contains('faq__top_active')) {
        this.classList.remove('faq__top_active')
    } else {
        const oldActive = document.querySelector('.faq__top_active')
        if (oldActive) oldActive.classList.remove('faq__top_active')
        this.classList.add('faq__top_active')
    }
}

const description = document.querySelector('[data-element="description"]')

if (description) descriptionInit()

function descriptionInit () {
    const hiddenTextArray = document.querySelectorAll('[data-element="description-text-hide"]')
    const textClip = document.querySelector('[data-element="description-text-clip"]')
    const button = document.querySelector('[data-element="description-button"]')
    const buttonText = button.getElementsByTagName('span')[0]

    button.addEventListener('click', toggleDescription)

    function toggleDescription () {
        if (button.classList.contains('description__button_active')) {
            hideDescription()
        } else {
            showDescription()
        }
    }

    function showDescription () {
        button.classList.add('description__button_active')
        buttonText.innerHTML = 'Свернуть'
        textClip.classList.remove('description__text_clip')
        for (let i = 0; i < hiddenTextArray.length; i++) {
            hiddenTextArray[i].classList.remove('description__text_hide')
        }
    }

    function hideDescription () {
        button.classList.remove('description__button_active')
        buttonText.innerHTML = 'Развернуть'
        textClip.classList.add('description__text_clip')
        for (let i = 0; i < hiddenTextArray.length; i++) {
            hiddenTextArray[i].classList.add('description__text_hide')
        }
    }
}

const servicesSlider = document.querySelector('.services__slider')

if (servicesSlider) servicesSliderInit()

function servicesSliderInit () {
    let swiper
    window.addEventListener('resize', checkSlider)
    checkSlider()

    function initSlider () {
        swiper = new Swiper(".services__slider", {
            slidesPerView: 'auto',
            scrollbar: {
                el: ".swiper-scrollbar"
            },
        });
    }

    function checkSlider () {
        if (document.body.clientWidth < 1260) {
            initSlider()
        } else {
            if (swiper) swiper.destroy( true, true )
        }
    }
}

const footerHeadlines = document.querySelectorAll('[data-element="footer-headline"]')

for (let i = 0; i < footerHeadlines.length; i++) {
    footerHeadlines[i].addEventListener('click', toggleFooterHeadline)
}

function toggleFooterHeadline () {
    if (this.classList.contains('footer__headline_active')) {
        this.classList.remove('footer__headline_active')
    } else {
        const oldActive = document.querySelector('.footer__headline_active')
        if (oldActive) oldActive.classList.remove('footer__headline_active')
        this.classList.add('footer__headline_active')
    }
}

const specialOffer = document.querySelector('.special-offer')

if (specialOffer) specialOfferInit()

function specialOfferInit () {
    const btnClose = document.querySelector('.special-offer-close')
    btnClose.addEventListener('click', closeOffer)
}

function closeOffer () {
    specialOffer.classList.add('special-offer_hide')
}

const cyclopedia = document.querySelector('.cyclopedia')

if (cyclopedia) cyclopediaInit()

function cyclopediaInit () {
    const scrollbar = cyclopedia.querySelector('.swiper-scrollbar')
    const nextEl = cyclopedia.querySelector('.cyclopedia__nav-button_right')
    const prevEl = cyclopedia.querySelector('.cyclopedia__nav-button_left')

    swiper = new Swiper(".cyclopedia__slider", {
        slidesPerView: 'auto',
        scrollbar: {
            el: scrollbar
        },
        navigation: {
            nextEl: nextEl,
            prevEl: prevEl,
        },
    });
}

//=require scripts/cyclopedia.js
const categoryButtons = document.querySelectorAll('[data-element="header-categories-category"]')
const blockArray = document.querySelectorAll('[data-element="header-categories-category-block"]')
const categoryWrap = document.querySelector('[data-element="header-categories-category-wrap"]')
const categoryLayer = document.querySelector('[data-element="header-category-layer"]')

if (categoryLayer) categoryLayer.addEventListener('click', closeCategoriesCategory )

for (let i = 0; i < categoryButtons.length; i++) {
    categoryButtons[i].addEventListener('click', toggleCategoriesCategory)
}

function toggleCategoriesCategory () {
    if (this.classList.contains('header-categories__category_active')) {
        closeCategoriesCategory()
    } else {
        closeOldCategory()
        categoryWrap.classList.add('header-categories__category-wrap_active')
        this.classList.add('header-categories__category_active')
        const index = this.getAttribute('data-index')
        blockArray[index].classList.add('header-categories__category-block_active')
        categoryLayer.classList.add('header-category-layer_active')
    }
}

function closeCategoriesCategory () {
    const activeCategory = document.querySelector('.header-categories__category_active')
    if (activeCategory) activeCategory.classList.remove('header-categories__category_active')
    const activeBlock = document.querySelector('.header-categories__category-block_active')
    if (activeBlock) activeBlock.classList.remove('header-categories__category-block_active')
    categoryWrap.classList.remove('header-categories__category-wrap_active')
    categoryLayer.classList.remove('header-category-layer_active')
}

function closeOldCategory () {
    const activeCategory = document.querySelector('.header-categories__category_active')
    if (activeCategory) activeCategory.classList.remove('header-categories__category_active')
    const activeBlock = document.querySelector('.header-categories__category-block_active')
    if (activeBlock) activeBlock.classList.remove('header-categories__category-block_active')
}

const informerSliderArray = document.querySelectorAll('[data-element="informer-slider"]')

if (informerSliderArray.length) informerSliderInit()

function informerSliderInit () {
    for (let i = 0; i < informerSliderArray.length; i++) {
        const swiper = new Swiper(informerSliderArray[i], {
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                delay: 5000,
            },
        });
    }
}

const headerCatalog = document.querySelector('[data-element="header-catalog"]')
const catalog = document.querySelector('[data-element="catalog"]')

if (headerCatalog) headerCatalogInit()

function headerCatalogInit () {
    const sidebarLinks = catalog.querySelectorAll('[data-element="catalog-sidebar-link"]')
    const areas = catalog.querySelectorAll('[data-element="catalog-area"]')
    const categoryLayer = document.querySelector('[data-element="header-category-layer"]')
    categoryLayer.addEventListener('click', closeCatalog )
    headerCatalog.addEventListener('click', toggleCatalog)

    for (let i = 0; i < sidebarLinks.length; i++) {
        sidebarLinks[i].addEventListener('mouseover', toggleSidebarLink)
    }

    function toggleSidebarLink () {
        const oldActiveLink = catalog.querySelector('.catalog__sidebar-link_active')
        if (oldActiveLink) oldActiveLink.classList.remove('catalog__sidebar-link_active')
        this.classList.add('catalog__sidebar-link_active')
        const oldActiveArea = catalog.querySelector('.catalog__area_active')
        if (oldActiveArea) oldActiveArea.classList.remove('catalog__area_active')
        const index = this.getAttribute('data-index')
        areas[index].classList.add('catalog__area_active')
    }

    function toggleCatalog () {
        if (this.classList.contains('header__catalog_active')) {
            closeCatalog()
        } else {
            closeCategoriesCategory()
            this.classList.add('header__catalog_active')
            catalog.classList.add('catalog_active')
            categoryLayer.classList.add('header-category-layer_active')
        }
    }

    function closeCatalog () {
        headerCatalog.classList.remove('header__catalog_active')
        catalog.classList.remove('catalog_active')
        categoryLayer.classList.remove('header-category-layer_active')
    }

    function closeCategoriesCategory () {
        const activeCategory = document.querySelector('.header-categories__category_active')
        if (activeCategory) activeCategory.classList.remove('header-categories__category_active')
        const activeBlock = document.querySelector('.header-categories__category-block_active')
        if (activeBlock) activeBlock.classList.remove('header-categories__category-block_active')
        const categoryWrap = document.querySelector('[data-element="header-categories-category-wrap"]')
        categoryWrap.classList.remove('header-categories__category-wrap_active')
        categoryLayer.classList.remove('header-category-layer_active')
    }
}

const searchBox = document.querySelector('[data-element="header-search-box"]')

if (searchBox) headerSearchInit()

function headerSearchInit () {
    const search = searchBox.querySelector('[data-element="search"]')
    const searchLayer = document.querySelector('[data-element="search-layer"]')
    const headerSearch = document.querySelector('[data-element="header-search"]')

    headerSearch.addEventListener('focus', showSearch)
    headerSearch.addEventListener('blur', hideSearch)
    searchLayer.addEventListener('click', hideSearch)

    function showSearch () {
        search.classList.add('search_active')
        searchLayer.classList.add('search-layer_active')
        searchBox.classList.add('header__search-box_active')
    }

    function hideSearch () {
        search.classList.remove('search_active')
        searchLayer.classList.remove('search-layer_active')
        searchBox.classList.remove('header__search-box_active')
    }
}

const capSlider = document.querySelector('[data-element="cap-slider"]')

if (capSlider) capSliderInit()

function capSliderInit () {
    const pagination = capSlider.querySelector('.swiper-pagination')

    const swiper = new Swiper(capSlider, {
        slidesPerView: 'auto',
        loop: true,
        navigation: {
            nextEl: '.cap__nav_right',
            prevEl: '.cap__nav_left',
        },
        pagination: {
            el: pagination,
        },
    });
}

const categoriesCircleSlider = document.querySelector('[data-element="categories-circle-slider"]')

if (categoriesCircleSlider) categoriesCircleSliderInit()

function categoriesCircleSliderInit () {
    let swiper
    window.addEventListener('resize', checkSlider)
    checkSlider()

    function checkSlider () {
        if (document.body.clientWidth > 1260) {
            initSlider()
        } else {
            if (swiper) swiper.destroy( true, true )
        }
    }
    function initSlider() {
        swiper = new Swiper(categoriesCircleSlider, {
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
}

const tileLineArray = document.querySelectorAll('[data-element="tile-line-slider"]')

if (tileLineArray.length) tileLineArrayInit()

function tileLineArrayInit () {
    for (let i = 0; i < tileLineArray.length; i++) {
        tileLineInit(tileLineArray[i])
    }

    function tileLineInit (slider) {
        const tileLine = slider.closest('.tile-line')
        const nextEl = tileLine.querySelector('.tile-line__nav-btn_right')
        const prevEl = tileLine.querySelector('.tile-line__nav-btn_left')
        const scrollbar = tileLine.querySelector('.swiper-scrollbar')
        const swiper = new Swiper(slider, {
            slidesPerView: 'auto',
            scrollbar: {
                el: scrollbar
            },
            navigation: {
                nextEl: nextEl,
                prevEl: prevEl,
            },
        });
    }
}

const customSelectArray = document.querySelectorAll('.custom-select')

if (customSelectArray.length) customSelectArrayInit()

function customSelectArrayInit() {
    for (let i = 0; i < customSelectArray.length; i++) {
        customSelectInit(customSelectArray[i])
    }

    window.addEventListener('click', closeAllSelect)
}

function customSelectInit(select) {
    const options = select.getElementsByTagName('option')
    createCustomSelect(options, select)
}

function createCustomSelect(options, select) {
    const view = select.querySelector('.custom-select__view')
    view.addEventListener('click', () => openSelect(view))

    const selectHtml = select.getElementsByTagName('select')[0]

    const dropdown = createDropdown()
    createOptions(dropdown, view, options, selectHtml)

    select.appendChild(dropdown)
}

function createDropdown() {
    const dropdown = document.createElement('div')
    dropdown.classList.add('custom-select__dropdown')
    return dropdown
}

function createOptions(dropdown, view, options, selectHtml) {
    for (let i = 0; i < options.length; i++) {
        const customOption = createOption(options[i])
        customOption.addEventListener('click', () => optionClickHandler(customOption, dropdown, view, selectHtml))
        if (options[i].selected) {
            customOption.classList.add('custom-select__option_active')
        }
        dropdown.appendChild(customOption)
    }
}

function createOption(optionHtml) {
    const customOption = document.createElement('div')
    customOption.classList.add('custom-select__option')
    customOption.setAttribute('data-value', optionHtml.getAttribute('value'))
    customOption.innerHTML = optionHtml.innerHTML
    return customOption
}

function optionClickHandler(option, dropdown, view, selectHtml) {
    const oldActiveOption = dropdown.querySelector('.custom-select__option_active')
    if (oldActiveOption) oldActiveOption.classList.remove('custom-select__option_active')
    option.classList.add('custom-select__option_active')
    view.innerHTML = option.innerHTML
    selectHtml.value = option.getAttribute('data-value')
    const event = new Event('change');
    selectHtml.dispatchEvent(event);
}

function openSelect(view) {
    const oldActiveSelect = document.querySelector('.custom-select__view_active')
    if (oldActiveSelect) oldActiveSelect.classList.remove('custom-select__view_active')
    view.classList.add('custom-select__view_active')
}

function closeAllSelect(e) {
    if (e.target.classList.contains('custom-select__view')) return
    const openSelectArray = document.querySelectorAll('.custom-select__view_active')
    for (let i = 0; i < openSelectArray.length; i++) {
        openSelectArray[i].classList.remove('custom-select__view_active')
    }
}

const shopsSlider = document.querySelector('[data-element="shops-slider"]')

if (shopsSlider) shopsSliderInit()

function shopsSliderInit () {
    const swiper = new Swiper(shopsSlider, {
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 5000,
        },
    });
}

const shopsMap = document.querySelector('[data-element="shops-map"]')

if (shopsMap) shopsMapInit()

function shopsMapInit () {
    let myMap
    let MyIconContentLayout
    let select

    const selectComp = document.querySelector('.custom-select_shops')
    if (selectComp) {
        select = selectComp.getElementsByTagName('select')[0]
        select.addEventListener('change', toggleList)
    }

    const shopsBox = document.querySelector('[data-element="shops-box"]')
    const shopsTop = document.querySelector('[data-element="shops-top"]')
    const shopsItems = document.querySelectorAll('[data-element="shops-item"]')
    const shopsAboutBackArray = document.querySelectorAll('[data-element="shops-about-back"]')

    for (let i = 0; i < shopsAboutBackArray.length; i++) {
        shopsAboutBackArray[i].addEventListener('click', closeShopsAbout)
    }

    const shopsCloses = document.querySelectorAll('[data-element="shops-close"]')

    for (let i = 0; i < shopsCloses.length; i++) {
        shopsCloses[i].addEventListener('click', closeShopsBox)
    }

    function closeShopsBox () {
        shopsBox.classList.add('shops__box_hide')
        resetBox()
    }

    function resetBox () {
        const aboutActive = document.querySelector('.shops__about_active')
        if (aboutActive) aboutActive.classList.remove('shops__about_active')
        shopsTop.classList.remove('shops__top_hide')
        const list = document.querySelector('.shops__list_active')
        const items = list.querySelectorAll('.shops__item')
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('shops__item_hide')
        }
    }

    for (let i = 0; i < shopsItems.length; i++) {
        shopsItems[i].addEventListener('click', openShopsAbout)
    }

    function openShopsAbout () {
        const centerCoords = JSON.parse(this.getAttribute('data-coords'))
        myMap.setCenter(getCoordsWithDelta(centerCoords), 14, {duration: 500})
        const inner = this.closest('.shops__inner')
        const about = inner.querySelector('.shops__about')
        const list = this.closest('.shops__list')
        const items = list.querySelectorAll('.shops__item')
        for (let i = 0; i < items.length; i++) {
            items[i].classList.add('shops__item_hide')
        }
        shopsTop.classList.add('shops__top_hide')
        about.classList.add('shops__about_active')
    }

    function closeShopsAbout () {
        const about = this.closest('.shops__about')
        about.classList.remove('shops__about_active')
        shopsTop.classList.remove('shops__top_hide')
        const list = this.closest('.shops__list')
        const items = list.querySelectorAll('.shops__item')
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('shops__item_hide')
        }
    }

    const shopsLists = document.querySelectorAll('[data-element="shops-list"]')

    function toggleList() {
        myMap.geoObjects.removeAll()
        const oldActiveList = document.querySelector('.shops__list_active')
        if (oldActiveList) oldActiveList.classList.remove('shops__list_active')
        const index = select.value
        shopsLists[index].classList.add('shops__list_active')
        createPlacemark(shopsLists[index])
        const newFirstItem = shopsLists[index].querySelector('.shops__item')
        const centerCoords = JSON.parse(newFirstItem.getAttribute('data-coords'))
        myMap.setCenter(getCoordsWithDelta(centerCoords), 14, {duration: 500})
    }

    function getCoordsWithDelta(centerCoords) {
        if (document.body.clientWidth < 1260) {
            centerCoords[0] = centerCoords[0] - 0.012
        } else {
            centerCoords[1] = centerCoords[1] - 0.015
        }
        return centerCoords
    }

    loadMap()

    function loadMap () {
        const mapScript = document.createElement('script')

        mapScript.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'
        document.body.appendChild(mapScript)

        mapScript.addEventListener('load', function () {
            ymaps.ready(contactMapInit)
        })
    }

    function contactMapInit () {
        const zoom = 14
        let centerCoords = JSON.parse(shopsMap.getAttribute('data-coords'))
        centerCoords = getCoordsWithDelta(centerCoords)
        myMap = new ymaps.Map('shops__map', {
            center: centerCoords,
            zoom: zoom, controls: []
        }, {balloonPanelMaxMapArea: 0, autoFitToViewport: 'always', suppressMapOpenBlock: true})

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="placemark-caption">$[properties.iconContent]</div>'
        )

        const activeList = document.querySelector('.shops__list_active')
        createPlacemark(activeList)
    }

    function createPlacemark (list) {
        const items = list.querySelectorAll('[data-element="shops-item"]')
        for (let i = 0; i < items.length; i++) {
            createCurrentPlacemark(items[i], i)
        }
        function createCurrentPlacemark (item, index) {
            const coords = JSON.parse(item.getAttribute('data-coords'))
            const isPlacemarkOrange = item.getAttribute('data-placemark')
            const placemark = new ymaps.Placemark(coords, {
                iconContent: ''
            }, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: isPlacemarkOrange ? 'assets/img/placemark_orange.svg' : 'assets/img/placemark_blue.svg',
                iconImageSize: [48, 48],
                iconImageOffset: [-24, -24],
                iconContentLayout: MyIconContentLayout
            })
            placemark.properties.set('index', index)
            myMap.geoObjects.add(placemark)
            placemark.events.add('click', choseActiveItem)
        }
    }

    function choseActiveItem (e) {
        resetBox()
        const placemark = e.get('target')
        const index = placemark.properties.get('index', 0)
        const list = document.querySelector('.shops__list_active')
        const items = list.querySelectorAll('.shops__item')
        items[index].click()
        const shopsBox = document.querySelector('[data-element="shops-box"]')
        shopsBox.classList.remove('shops__box_hide')
    }
}

const shopsAboutSliders = document.querySelectorAll('[data-element="shops-about-slider"]')

if (shopsAboutSliders.length) shopsAboutSlidersInit()

function shopsAboutSlidersInit () {
    for (let i = 0; i < shopsAboutSliders.length; i++) {
        shopsAboutSliderInit(shopsAboutSliders[i])
    }

    function shopsAboutSliderInit (slider) {
        const scrollbar = slider.querySelector('.swiper-scrollbar')
        const swiper = new Swiper(slider, {
            slidesPerView: 'auto',
            scrollbar: {
                el: scrollbar
            },
        });
    }
}

const shopsVerticalSlider = document.querySelector('.shops__vertical-slider')

if (shopsVerticalSlider) shopsBoxInit()

function shopsBoxInit () {
    new SimpleBar(document.querySelector('.shops__list'));
}

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

const interiors = document.querySelector('[data-element="interiors"]')

if (interiors) interiorsInit()

function interiorsInit () {
    const slider = interiors.querySelector('[data-element="interiors-slider"]')
    const nextEl = interiors.querySelector('.interiors__nav-btn_right')
    const prevEl = interiors.querySelector('.interiors__nav-btn_left')
    const scrollbar = interiors.querySelector('.swiper-scrollbar')

    let swiper
    window.addEventListener('resize', checkSlider)
    checkSlider()

    function initSlider () {
        swiper = new Swiper(slider, {
            slidesPerView: 'auto',
            scrollbar: {
                el: scrollbar
            },
            navigation: {
                nextEl: nextEl,
                prevEl: prevEl,
            },
        });
    }

    function checkSlider () {
        if (document.body.clientWidth < 1260) {
            if (swiper) swiper.destroy( true, true )
        } else {
            initSlider()
        }
    }
}

const interiorsCircles = document.querySelectorAll('[data-element="interiors-circle"]')

if (interiorsCircles.length) interiorsCirclesInit()

function interiorsCirclesInit () {
    const wraps = document.querySelectorAll('.interiors__wrap')
    const layer = document.querySelector('.interiors__layer')
    const modals = document.querySelectorAll('.interiors__modal_fixed')
    const closeButtons = document.querySelectorAll('.interiors__modal-close')

    window.addEventListener('resize', checkWraps)
    checkWraps()
    interiorsCirclesMobileInit()

    function wrapsDesktopInit() {
        for (let i = 0; i < wraps.length; i++) {
            const top = +wraps[i].getAttribute('data-top')
            const left = +wraps[i].getAttribute('data-left')
            setDesktopCoords(wraps[i], top, left)
            if (left > 600) {
                wraps[i].classList.add('interiors__wrap_left')
            } else {
                wraps[i].classList.add('interiors__wrap_right')
            }
            wraps[i].classList.add('interiors__wrap_active')
            const modal = wraps[i].querySelector('.interiors__modal')
            const height = modal.clientHeight
            if (top < height + 10 - 48) wraps[i].classList.add('interiors__wrap_center')
            wraps[i].classList.remove('interiors__wrap_active')
        }
    }

    function setDesktopCoords (wrap, top, left) {
        wrap.style.top = top + 'px'
        wrap.style.left = left + 'px'
    }

    function setMobileCoords () {
        for (let i = 0; i < wraps.length; i++) {
            const top = +wraps[i].getAttribute('data-top')
            const left = +wraps[i].getAttribute('data-left')
            wraps[i].style.top = (top * 214/570) + 'px'
            wraps[i].style.left = (left * 343/912) + 'px'
        }
    }

    function checkWraps () {
        if (document.body.clientWidth < 1260) {
            setMobileCoords()
        } else {
            wrapsDesktopInit()
        }
    }

    function interiorsCirclesMobileInit () {
        for (let i = 0; i < interiorsCircles.length; i++) {
            interiorsCircleInit(interiorsCircles[i])
        }

        function interiorsCircleInit (circle) {
            circle.addEventListener('click', openModal)
        }

        layer.addEventListener('click', closeModal)

        for (let i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', closeModal)
        }

        function openModal () {
            const index = this.getAttribute('data-index')
            modals[index].classList.add('interiors__modal_active')
            layer.classList.add('interiors__layer_active')
        }

        function closeModal () {
            const activeModal = document.querySelector('.interiors__modal_active')
            activeModal.classList.remove('interiors__modal_active')
            layer.classList.remove('interiors__layer_active')
        }
    }
}

const modalCatalog = document.querySelector('[data-element="modal-catalog"]')

if (modalCatalog) modalCatalogInit()

function modalCatalogInit () {
    const searchInput = modalCatalog.querySelector('[data-element="modal-catalog-search-input"]')
    const searchAutocomplete = modalCatalog.querySelector('[data-element="search"]')
    const searchCloseBtn = modalCatalog.querySelector('[data-element="modal-catalog-search-close"]')
    const searchBackBtn = modalCatalog.querySelector('[data-element="modal-catalog__search-back"]')
    const items = document.querySelectorAll('[data-element="modal-catalog-item"]')
    const fulls = document.querySelectorAll('[data-element="modal-catalog-full"]')
    const catalogBack = document.querySelector('[data-element="modal-catalog-back"]')

    searchInput.addEventListener('focus', searchShow)
    searchCloseBtn.addEventListener('click', searchHide)
    searchBackBtn.addEventListener('click', searchHide)
    catalogBack.addEventListener('click', closeCategory)

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', openCategory)
    }

    function openCategory () {
        const index = this.getAttribute('data-index')
        fulls[index].classList.add('modal-catalog__full_active')
        modalCatalog.classList.add('modal-catalog_category-full')
        catalogBack.innerHTML = this.getAttribute('data-text')
    }

    function closeCategory () {
        const activeFull = document.querySelector('.modal-catalog__full_active')
        if (activeFull) activeFull.classList.remove('modal-catalog__full_active')
        modalCatalog.classList.remove('modal-catalog_category-full')
    }

    function searchShow () {
        modalCatalog.classList.add('modal-catalog_search')
        searchAutocomplete.classList.add('search_active')
        setTimeout(setFocus, 100)
    }

    function setFocus () {
        searchInput.focus()
    }

    function searchHide () {
        modalCatalog.classList.remove('modal-catalog_search')
        searchAutocomplete.classList.remove('search_active')
    }
}

const filters = document.querySelector('[data-element="filters"]')

if (filters) filtersInit()

function filtersInit () {
    const dropdowns = document.querySelectorAll('[data-element="filters-dropdown"]')

    for (let i = 0; i < dropdowns.length; i++) {
        dropdownsInit(dropdowns[i])
    }

    function dropdownsInit (dropdown) {
        const name = dropdown.querySelector('[data-element="filters-dropdown-name"]')
        name.addEventListener('click', toggleDropdown)

        function toggleDropdown () {
            dropdown.classList.toggle('filters__dropdown_active')
        }
    }

    const rangePrice = document.querySelector('.filters__range-slider')

    if (rangePrice) rangePriceInit()

    function rangePriceInit () {
        const minInput = document.querySelector('.filters__range-input_min')
        const maxInput = document.querySelector('.filters__range-input_max')

        const min = rangePrice.getAttribute('data-min')
        const max = rangePrice.getAttribute('data-max')

        let options = {
            container: rangePrice,
            showRuler: false, showValue: false, oninput: updateRangeValue, showLabel: false, oninit: initRangeValue,
            min: min,
            max: max,
            step: 1,
            value_min: min,
            value_max: max,
        };

        let multiRangeSlider1 = new  MultiRangeSlider(options);

        function initRangeValue (e) {
            minInput.value = e.minValue
            maxInput.value = e.maxValue
        }

        function updateRangeValue (e) {
            minInput.value = e.minValue
            maxInput.value = e.maxValue
        }
    }
}

const productCardSlider = document.querySelector('[data-element="product-card-slider"]')

if (productCardSlider) productCardSliderInit()

function productCardSliderInit () {
    let swiper
    const pagination = productCardSlider.querySelector('.swiper-pagination')

    window.addEventListener('resize', checkSlider)
    checkSlider()

    function checkSlider () {
        if (document.body.clientWidth < 1260) {
            initSlider()
        } else {
            if (swiper) swiper.destroy( true, true )
        }
    }

    function initSlider () {
        swiper = new Swiper(productCardSlider, {
            slidesPerView: 'auto',
            loop: true,
            pagination: {
                el: pagination,
            },
        });
    }
}

const productAboutItemTopArray = document.querySelectorAll('[data-element="product-about-item-top"]')

if (productAboutItemTopArray.length) productAboutItemTopArrayInit()

function productAboutItemTopArrayInit () {
    for (let i = 0; i < productAboutItemTopArray.length; i++) {
        productAboutItemTopArray[i].addEventListener('click', toggleItem)
    }

    function toggleItem () {
        const old = document.querySelector('.product-about__item-top_active')
        if (old) old.classList.remove('product-about__item-top_active')
        this.classList.toggle('product-about__item-top_active')
    }

}

const modalBasketSlider = document.querySelector('[data-element="modal-basket-slider"]')

if (modalBasketSlider) modalBasketSliderInit()

function modalBasketSliderInit () {
    const scrollbar = modalBasketSlider.querySelector('.modal-basket__scrollbar')

    const modalBasket = document.querySelector('.modal-basket')
    const close = modalBasket.querySelector('.modal-basket__close')
    close.addEventListener('click', closeModalBasket)

    function closeModalBasket () {
        const closeFancyboxBtn = modalBasket.querySelector('.f-button')
        closeFancyboxBtn.click()
    }

    const swiper = new Swiper(modalBasketSlider, {
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.modal-basket__nav_right',
            prevEl: '.modal-basket__nav_left',
        },
        scrollbar: {
            el: scrollbar,
        },
    });
}

const favoriteButtons = document.querySelectorAll('[data-element="favorite"]')

if (favoriteButtons.length) favoriteButtonsInit()

function favoriteButtonsInit () {
    const notification = document.querySelector('.notification')
    const notificationTitle = document.querySelector('.notification__title')
    const notificationName = document.querySelector('.notification__name')
    const notificationLink = document.querySelector('.notification__link')

    for (let i = 0; i < favoriteButtons.length; i++) {
        favoriteButtons[i].addEventListener('click', addToFavorite)
    }

    function addToFavorite () {
        const name = this.getAttribute('data-name')
        notificationName.innerHTML = name
        notificationTitle.innerHTML = 'Товар добавлен в избранное'
        notificationLink.innerHTML = 'В избранное'
        notification.classList.add('notification_active')
        activateTimer()
    }

    function activateTimer () {
        setTimeout(notificationHide, 2000)
    }

    function notificationHide () {
        notification.classList.remove('notification_active')
    }
}

const compareButtons = document.querySelectorAll('[data-element="compare"]')

if (compareButtons.length) compareButtonsInit()

function compareButtonsInit () {
    const notification = document.querySelector('.notification')
    const notificationTitle = document.querySelector('.notification__title')
    const notificationName = document.querySelector('.notification__name')
    const notificationLink = document.querySelector('.notification__link')

    for (let i = 0; i < compareButtons.length; i++) {
        compareButtons[i].addEventListener('click', addToFavorite)
    }

    function addToFavorite () {
        const name = this.getAttribute('data-name')
        notificationName.innerHTML = name
        notificationTitle.innerHTML = 'Товар добавлен в сравнение'
        notificationLink.innerHTML = 'В избранное'
        notification.classList.add('notification_active')
        activateTimer()
    }

    function activateTimer () {
        setTimeout(notificationHide, 2000)
    }

    function notificationHide () {
        notification.classList.remove('notification_active')
    }
}

const productInfoItems = document.querySelectorAll('.product-info__item')

if (productInfoItems.length) productInfoItemsInit()

function productInfoItemsInit () {
    const navItems = document.querySelectorAll('[data-element="product-card-nav-item"]')

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', toggleProductNavItem)
    }

    function toggleProductNavItem () {
        const old = document.querySelector('.product-info__item_active')
        if (old) old.classList.remove('product-info__item_active')
        const index = this.getAttribute('data-index')
        if (productInfoItems[index]) productInfoItems[index].classList.add('product-info__item_active')
    }

    for (let i = 0; i < productInfoItems.length; i++) {
        productInfoItems[i].addEventListener('click', toggleProductItem)
    }

    function toggleProductItem () {
        const old = document.querySelector('.product-info__item_active')
        if (old) old.classList.remove('product-info__item_active')
        this.classList.add('product-info__item_active')
    }
}

if (document.querySelector('[data-role="scroll-to-anchor"]')) setTimeout(initScrollToAnchor, 0)

function initScrollToAnchor() {
    const anchorElements = document.querySelectorAll('[data-role="scroll-to-anchor"]')

    for (let i = 0, len = anchorElements.length; i < len; i++) _loopAddEventScrollToAnchor(anchorElements[i])

    function _loopAddEventScrollToAnchor(node) {
        node.addEventListener('click', clickOnTheScrollElement)
    }
}

function clickOnTheScrollElement(event) {
    event.preventDefault()
    let elementId
    if (this.dataset.link) elementId = this.dataset.link.substr(1)
    else elementId = this.hash.substr(1)
    const element = document.getElementById(elementId)
    if (element) animateScrollToAnchor(element)
}

function animateScrollToAnchor(theElement) {
    const positionNow = window.pageYOffset
    const positionElement = theElement.getBoundingClientRect().top + pageYOffset - 50
    const duration = 300
    const step = positionElement - positionNow
    const start = performance.now()

    requestAnimationFrame(function animate(time) {
        const timePassed = time - start

        if (timePassed > duration) {
            window.scrollTo(0, positionElement)
        } else {
            window.scrollTo(0, positionNow + step * (timePassed / duration))
            requestAnimationFrame(animate)
        }
    })
}

const modalLogin = document.querySelector('.modal-login')

if (modalLogin) modalLoginInit()

function modalLoginInit () {
    const goRegistration = modalLogin.querySelector('[data-element="modal-login-go-registration"]')
    const title = modalLogin.querySelector('.modal-login__title')
    const recoveryLink = modalLogin.querySelector('.modal-login__recovery')
    const phoneValueSpan = modalLogin.querySelector('.modal-login__phone-value')
    const codeInputs = modalLogin.querySelectorAll('.modal-login__code-input')
    const changeNumberBtn = modalLogin.querySelector('.modal-login__change-number')
    const modalSubmit = modalLogin.querySelector('.modal-login__submit')
    const loginInput = modalLogin.querySelector('.modal-login__input_login')
    const pasInput = modalLogin.querySelector('.modal-login__input_password')

    modalSubmit.addEventListener('click', loginNextStep, {once: true})
    loginInput.addEventListener('input', validate)
    goRegistration.addEventListener('click', closeModalLogin)
    recoveryLink.addEventListener('click', closeModalLogin)

    function closeModalLogin () {
        const closeBtn = modalLogin.querySelector('.f-button.is-close-btn')
        closeBtn.click()
    }

    function resetValidateCode () {
        for (let i = 0; i < codeInputs.length; i++) {
            codeInputs[i].removeEventListener('input', () => nextInput(codeInputs[i],i+1))
            codeInputs[i].value = ''
        }
    }

    function validateCode () {
        for (let i = 0; i < codeInputs.length; i++) {
            codeInputs[i].addEventListener('input', () => nextInput(codeInputs[i],i+1))
        }
    }

    function nextInput (input, i) {
        input.value = input.value.substring(0, 1)
        input.value = input.value.replace(/[^0-9]/g,'');
        if (codeInputs[i]) {
            codeInputs[i].focus()
        } else {
            codeInputs[i-1].blur()
        }
        checkCode()
    }

    function checkCode () {
        let isValid = true
        for (let i = 0; i < codeInputs.length; i++) {
            if (!codeInputs[i].value) isValid = false
        }
        modalSubmit.disabled = !isValid
    }

    function loginNextStep () {
        const isPhone = checkIsPhone()
        if (isPhone) {
            modalLogin.classList.add('modal-login_phone')
            modalSubmit.disabled = true
            modalSubmit.innerHTML = 'Войти'
            phoneValueSpan.innerHTML = loginInput.value
            modalSubmit.addEventListener('click', sendPhone, {once: true})
            changeNumberBtn.addEventListener('click', loginPrevStep, {once: true})
            codeInputs[0].focus()
            validateCode()
        } else {
            modalLogin.classList.add('modal-login_email')
            modalSubmit.innerHTML = 'Войти'
            modalSubmit.disabled = true
            pasInput.addEventListener('input', validate)
            modalSubmit.addEventListener('click', sendEmail, {once: true})
        }
    }

    function loginPrevStep () {
        modalSubmit.removeEventListener('click', sendPhone, {once: true})
        modalLogin.classList.remove('modal-login_phone')
        modalSubmit.disabled = true
        modalSubmit.addEventListener('click', loginNextStep, {once: true})
        resetValidateCode()
    }

    function sendPhone () {
        showLoader()
        let code = ''
        for (let i = 0; i < codeInputs.length; i++) {
            code = code + codeInputs[i].value
        }
        console.log({
            login: loginInput.value,
            code: code
        })
    }

    function sendEmail () {
        showLoader()
        console.log({
            login: loginInput.value,
            password: pasInput.value
        })
    }

    function showLoader () {
        modalSubmit.disabled = true
        title.innerHTML = 'Ещё пару секунд'
        modalLogin.classList.add('modal-login_loader')
    }

    function checkIsPhone () {
        const regex = new RegExp('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$')
        return regex.test(loginInput.value)
    }

    function closeModal () {
        modalLogin.classList.remove('modal-login_phone')
        modalLogin.classList.remove('modal-login_email')
    }

    function validate () {
        if (this.value) {
            modalSubmit.disabled = false
        } else {
            modalSubmit.disabled = true
        }
    }
}

const modalRegistration = document.querySelector('.modal-registration')

if (modalRegistration) modalRegistrationInit()

function modalRegistrationInit () {
    const goLogin = modalRegistration.querySelector('[data-element="modal-registration-go-login"]')

    goLogin.addEventListener('click', closeModalRegistration)

    function closeModalRegistration () {
        const closeBtn = modalRegistration.querySelector('.f-button.is-close-btn')
        closeBtn.click()
    }
}

const modalRecovery = document.querySelector('.modal-recovery')

if (modalRecovery) modalRecoveryInit()

function modalRecoveryInit () {
    const links = modalRecovery.querySelectorAll('.modal-recovery__link')
    const navBtns = modalRecovery.querySelectorAll('.modal-recovery__nav-btn')
    const phoneSpan = modalRecovery.querySelector('.modal-recovery__text-value-phone')
    const emailSpan = modalRecovery.querySelector('.modal-recovery__text-value-email')
    const emailInput = modalRecovery.querySelector('.modal-recovery__input_email')
    const phoneInput = modalRecovery.querySelector('.modal-recovery__input_phone')
    const submit = modalRecovery.querySelector('.modal-recovery__submit')
    const changeLogin = modalRecovery.querySelectorAll('.modal-recovery__change-login')
    const codeInputs = modalRecovery.querySelectorAll('.modal-recovery__code-input')

    submit.addEventListener('click', nextStep, {once: true})

    for (let i = 0; i < changeLogin.length; i++) {
        changeLogin[i].addEventListener('click', prevStep)
    }

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', closeModalRecovery)
    }

    for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].addEventListener('click', toggleNavBtn)
    }

    function nextStep () {
        modalRecovery.classList.add('modal-recovery_active')
        phoneSpan.innerHTML = phoneInput.value
        emailSpan.innerHTML = emailInput.value
        codeInputs[0].focus()
        validateCode()
        submit.removeEventListener('click', nextStep, {once: true})
        submit.addEventListener('click', doneStep, {once: true})
        submit.innerHTML = 'Восстановить'
    }

    function prevStep () {
        submit.innerHTML = 'Продолжить'
        modalRecovery.classList.remove('modal-recovery_active')
        phoneSpan.innerHTML = phoneInput.value
        emailSpan.innerHTML = emailInput.value
        resetValidateCode()
        submit.addEventListener('click', nextStep, {once: true})
        submit.removeEventListener('click', doneStep, {once: true})
    }

    function doneStep () {
        modalRecovery.classList.add('modal-recovery_done')
    }

    function toggleNavBtn () {
        if (this.classList.contains('modal-recovery__nav-btn_active')) return
        const oldActive = modalRecovery.querySelector('.modal-recovery__nav-btn_active')
        oldActive.classList.remove('modal-recovery__nav-btn_active')
        this.classList.add('modal-recovery__nav-btn_active')
        const value = this.getAttribute('data-value')
        if (value === 'email') {
            modalRecovery.classList.add('modal-recovery_email')
            modalRecovery.classList.remove('modal-recovery_phone')
        } else if (value === 'phone') {
            modalRecovery.classList.remove('modal-recovery_email')
            modalRecovery.classList.add('modal-recovery_phone')
        }
    }

    function closeModalRecovery () {
        const closeBtn = modalRecovery.querySelector('.f-button.is-close-btn')
        closeBtn.click()
    }

    function resetValidateCode () {
        for (let i = 0; i < codeInputs.length; i++) {
            codeInputs[i].removeEventListener('input', () => nextInput(codeInputs[i],i+1))
            codeInputs[i].value = ''
        }
        submit.disabled = false
    }

    function validateCode () {
        submit.disabled = true
        for (let i = 0; i < codeInputs.length; i++) {
            codeInputs[i].addEventListener('input', () => nextInput(codeInputs[i],i+1))
        }
    }

    function nextInput (input, i) {
        input.value = input.value.substring(0, 1)
        input.value = input.value.replace(/[^0-9]/g,'');
        if (codeInputs[i]) {
            codeInputs[i].focus()
        } else {
            codeInputs[i-1].blur()
        }
        checkCode()
    }

    function checkCode () {
        let isValid = true
        for (let i = 0; i < codeInputs.length; i++) {
            if (!codeInputs[i].value) isValid = false
        }
        submit.disabled = !isValid
    }
}

const modalNewPas = document.querySelector('.modal-new-pas')

if (modalNewPas) modalNewPasInit()

function modalNewPasInit () {
    const title = document.querySelector('.modal-new-pas__title')
    const submit = document.querySelector('.modal-new-pas__submit')

    submit.addEventListener('click', sendPassword, {once: true})

    function sendPassword () {
        submit.removeEventListener('click', sendPassword, {once: true})
        submit.addEventListener('click', closeModalNewPas)
        submit.innerHTML = 'Хорошо'
        modalNewPas.classList.add('modal-new-pas_done')
        title.innerHTML = 'Пароль установлен'
    }

    function closeModalNewPas () {
        const closeBtn = modalNewPas.querySelector('.f-button.is-close-btn')
        closeBtn.click()
    }
}

const modalClear = document.querySelector('.modal-clear')

if (modalClear) modalClearInit()

function modalClearInit () {
    const modalClearCancel = modalClear.querySelector('.modal-clear__cancel')
    modalClearCancel.addEventListener('click', closeModal)

    function closeModal () {
        const btnCloseFancybox = modalClear.querySelector('.f-button.is-close-btn')
        btnCloseFancybox.click()
    }
}

const basketSidebar = document.querySelector('.basket__sidebar')

if (basketSidebar) basketSidebarInit()

function basketSidebarInit () {
    initRange()

    initNav()

    function initNav () {
        const navButtons = basketSidebar.querySelectorAll('.basket__sidebar-nav-btn')
        const steps = basketSidebar.querySelectorAll('.basket__sidebar-step')

        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].addEventListener('click', toggleNav)
        }

        function toggleNav () {
            if (this.classList.contains('basket__sidebar-nav-btn_active')) return
            const oldActiveNav = basketSidebar.querySelector('.basket__sidebar-nav-btn_active')
            if (oldActiveNav) oldActiveNav.classList.remove('basket__sidebar-nav-btn_active')
            const index = this.getAttribute('data-index')
            this.classList.add('basket__sidebar-nav-btn_active')
            const oldActiveStep = basketSidebar.querySelector('.basket__sidebar-step_active')
            if (oldActiveStep) oldActiveStep.classList.remove('basket__sidebar-step_active')
            steps[index].classList.add('basket__sidebar-step_active')
        }
    }

    function initRange () {
        const basketRangeSlider = basketSidebar.querySelector('.basket__range-slider')
        const basketRangeInput = basketSidebar.querySelector('.basket__sidebar-bonus-input')

        basketRangeInput.addEventListener('input', setSliderValue)

        function setSliderValue () {
            basketRangeSlider.value = this.value
            basketRangeInput.value = basketRangeSlider.value
        }

        basketRangeSlider.addEventListener('change', (evt) => {
            basketRangeInput.value = evt.detail.value1
        })
    }
}

const basket = document.querySelector('.basket')

if (basket) basketInit()

function basketInit () {
    const basketProducts = basket.querySelectorAll('.basket__area')

    for (let i = 0; i < basketProducts.length; i++) {
        basketProductInit(basketProducts[i])
    }

    function basketProductInit (product) {
        const deleteBtn = product.querySelector('.basket__delete')
        const recoveryBtn = product.querySelector('.basket__delete-recovery')
        deleteBtn.addEventListener('click', deleteProduct)
        recoveryBtn.addEventListener('click', recoveryProduct)

        function deleteProduct () {
            product.classList.add('basket__area_delete')
            console.log('delete request')
        }

        function recoveryProduct () {
            product.classList.remove('basket__area_delete')
            console.log('recovery request')
        }
    }

    const basketMoreArray = basket.querySelectorAll('.basket__more')
    for (let i = 0; i < basketMoreArray.length; i++) {
        basketMoreInit(basketMoreArray[i])
    }

    function basketMoreInit (more) {
        const scrollbar = more.querySelector('.basket__more__scrollbar')
        const moreButton = more.querySelector('.basket__more-button')
        const left = more.querySelector('.basket__more-nav_left')
        const right = more.querySelector('.basket__more-nav_right')
        const basketMoreSlider = more.querySelector('[data-element="basket__more-slider"]')

        moreButton.addEventListener('click', toggleMore)

        function toggleMore () {
            more.classList.toggle('basket__more_expand')
        }

        const swiper = new Swiper(basketMoreSlider, {
            slidesPerView: 'auto',
            navigation: {
                nextEl: right,
                prevEl: left,
            },
            scrollbar: {
                el: scrollbar,
            },
        });
    }
}

const basketFixed = document.querySelector('.basket-fixed')

if (basketFixed) basketFixedInit()

function basketFixedInit () {
    const sidebar = document.querySelector('.basket__sidebar')
    window.addEventListener('scroll', checkScroll)
    checkScroll()

    function checkScroll () {
        const position = window.pageYOffset + sidebar.getBoundingClientRect().top
        const currentScroll = window.pageYOffset
        if (position + 150 - currentScroll - sidebar.clientHeight < 0) {
            basketFixed.classList.remove('basket-fixed_active')
        } else {
            basketFixed.classList.add('basket-fixed_active')
        }
    }
}

const order = document.querySelector('.order')

if (order) orderInit()

function orderInit () {
    const orderMore = document.querySelector('.order__sidebar-more')
    const sidebarHideItems = document.querySelectorAll('.order__sidebar-item_hide')

    if (orderMore) orderMore.addEventListener('click', orderMoreToggle)

    function orderMoreToggle () {
        if (orderMore.classList.contains('order__sidebar-more_active')) {
            orderMore.classList.remove('order__sidebar-more_active')
            orderMore.innerHTML = 'Развернуть'
            for (let i = 0; i < sidebarHideItems.length; i++) {
                sidebarHideItems[i].classList.add('order__sidebar-item_hide')
            }
        } else {
            orderMore.classList.add('order__sidebar-more_active')
            orderMore.innerHTML = 'Свернуть'
            for (let i = 0; i < sidebarHideItems.length; i++) {
                sidebarHideItems[i].classList.remove('order__sidebar-item_hide')
            }
        }
    }
}

const tabsContainerArray = document.querySelectorAll('[data-role="tabs-container"]')

if (tabsContainerArray.length) tabsContainerArrayInit()

function tabsContainerArrayInit () {
    for (let i = 0; i < tabsContainerArray.length; i++) {
        tabsContainerInit(tabsContainerArray[i])
    }

    function tabsContainerInit (container) {
        const tabs = container.querySelectorAll('.tab')
        const steps = container.querySelectorAll('.tab-step')

        for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', tabToggle)
        }

        function tabToggle () {
            if (this.classList.contains('tab_active')) return
            const oldActiveTab = container.querySelector('.tab_active')
            oldActiveTab.classList.remove('tab_active')
            const oldActiveStep = container.querySelector('.tab-step_active')
            oldActiveStep.classList.remove('tab-step_active')
            this.classList.add('tab_active')
            const index = this.getAttribute('data-index')
            steps[index].classList.add('tab-step_active')
        }
    }
}

const canvas = document.getElementById('confetti');

if (canvas) canvasInit()

function canvasInit () {
    let W = window.innerWidth;
    let H = canvas.clientHeight;
    const context = canvas.getContext("2d");
    const maxConfettis = 100;
    const particles = [];
    let endAnimation = false

    const possibleColors = [
        "#0063BD",
        "#B16EE4",
        "#D44A1B",
        "#7BBF3F",
        "#33DAFF",
    ];

    function randomFromTo(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

    function confettiParticle() {
        this.x = Math.random() * W; // x
        this.y = Math.random() * H - H; // y
        this.r = randomFromTo(11, 33); // radius
        this.d = Math.random() * maxConfettis + 11;
        this.color =
            possibleColors[Math.floor(Math.random() * possibleColors.length)];
        this.tilt = Math.floor(Math.random() * 33) - 11;
        this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
        this.tiltAngle = 0;

        this.draw = function() {
            context.beginPath();
            context.lineWidth = this.r / 2;
            context.strokeStyle = this.color;
            context.moveTo(this.x + this.tilt + this.r / 3, this.y);
            context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
            return context.stroke();
        };
    }

    function Draw() {
        const results = [];

        requestAnimationFrame(Draw);

        context.clearRect(0, 0, W, window.innerHeight);

        for (var i = 0; i < maxConfettis; i++) {
            results.push(particles[i].draw());
        }

        let particle = {};
        let remainingFlakes = 0;
        for (var i = 0; i < maxConfettis; i++) {
            particle = particles[i];

            particle.tiltAngle += particle.tiltAngleIncremental;
            particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
            particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

            if (particle.y <= H) remainingFlakes++;

            if (particle.x > W + 30 || particle.x < -30 || particle.y > H && !endAnimation) {
                particle.x = Math.random() * W;
                particle.y = -30;
                particle.tilt = Math.floor(Math.random() * 10) - 20;
            }
        }

        return results;
    }

    window.addEventListener(
        "resize",
        function() {
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        },
        false
    );

    for (var i = 0; i < maxConfettis; i++) {
        particles.push(new confettiParticle());
    }

    canvas.width = W;
    canvas.height = H;
    Draw();

    setTimeout(stopAnimation,1000)

    function stopAnimation () {
        endAnimation = true
        setTimeout(deleteCanvas,10000)
    }

    function deleteCanvas () {
        canvas.remove()
    }
}

const refundDropdownArray = document.querySelectorAll('.refund__dropdown')

if (refundDropdownArray.length) refundDropdownInit()

function refundDropdownInit () {
    for (let i = 0; i < refundDropdownArray.length; i++) {
        refundDropdownArray[i].addEventListener('click', toggleDropdown)
    }

    function toggleDropdown () {
        this.classList.toggle('refund__dropdown_active')
    }
}

const refundForm = document.querySelector('.refund__form')

if (refundForm) refundFormInit()

function refundFormInit () {
    const fileInput = refundForm.querySelector('.refund__file-input')
    const fileNote = refundForm.querySelector('.refund__file-note')
    const icon = refundForm.querySelector('.refund__file-icon')

    fileInput.addEventListener('change', setFileName)

    function setFileName () {
        fileNote.innerHTML = this.value.split("\\").pop()
        fileNote.classList.add('refund__file-note_active')
        icon.classList.add('refund__file-icon_active')
    }
}

const articleSliderArray = document.querySelectorAll('[data-element="article-slider"]')

if (articleSliderArray.length) articleSliderArrayInit()

function articleSliderArrayInit () {
    for (let i = 0; i < articleSliderArray.length; i++) {
        articleSliderInit(articleSliderArray[i])
    }

    function articleSliderInit (slider) {
        const area = slider.closest('.article__slider-area')
        const nextEl = area.querySelector('.article__slider-btn_right')
        const prevEl = area.querySelector('.article__slider-btn_left')
        const scrollbar = slider.querySelector('.swiper-scrollbar')
        const swiper = new Swiper(slider, {
            slidesPerView: 'auto',
            scrollbar: {
                el: scrollbar
            },
            navigation: {
                nextEl: nextEl,
                prevEl: prevEl,
            },
        });
    }
}

const articleSlider = document.querySelector('[data-element="article-slider-pagination"]')

if (articleSlider) articleSliderInit()

function articleSliderInit () {
    const pagination = articleSlider.querySelector('.swiper-pagination')
    const area = articleSlider.closest('.article__slider-area')
    const nextEl = area.querySelector('.article__slider-btn_right')
    const prevEl = area.querySelector('.article__slider-btn_left')

    const swiper = new Swiper(articleSlider, {
        slidesPerView: 'auto',
        navigation: {
            nextEl: nextEl,
            prevEl: prevEl,
        },
        pagination: {
            el: pagination,
        },
    });
}

const vacanciesList = document.querySelector('[data-element="vacancies-list"]')

if (vacanciesList) vacanciesListInit()

function vacanciesListInit () {
    const tops = vacanciesList.querySelectorAll('.vacancies__top')
    for (let i = 0; i < tops.length; i++) {
        tops[i].addEventListener('click', toggleTop)
    }

    function toggleTop () {
        if (!this.classList.contains('vacancies__top_active')) {
            const oldActive = vacanciesList.querySelector('.vacancies__top_active')
            if (oldActive) oldActive.classList.remove('vacancies__top_active')
        }
        this.classList.toggle('vacancies__top_active')
    }
}

const certificatesSlider = document.querySelector('[data-element="certificates-slider"]')

if (certificatesSlider) certificatesSliderInit()

function certificatesSliderInit () {
    const scrollbar = certificatesSlider.querySelector('.swiper-scrollbar')

    swiper = new Swiper(certificatesSlider, {
        slidesPerView: 'auto',
        scrollbar: {
            el: scrollbar
        },
    });
}

const advantagesSlider = document.querySelector('[data-element="advantages-slider"]')

if (advantagesSlider) advantagesSliderInit()

function advantagesSliderInit () {
    let swiper
    const scrollbar = advantagesSlider.querySelector('.swiper-scrollbar')

    window.addEventListener('resize', checkSlider)
    checkSlider()

    function checkSlider () {
        if (document.body.clientWidth < 1260) {
            initSlider()
        } else {
            if (swiper) swiper.destroy( true, true )
        }
    }

    function initSlider () {
        swiper = new Swiper(advantagesSlider, {
            slidesPerView: 'auto',
            scrollbar: {
                el: scrollbar,
            },
        });
    }
}

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

const anotherStockArray = document.querySelectorAll('[data-element="another-stock-slider"]')

if (anotherStockArray.length) anotherStockArrayInit()

function anotherStockArrayInit () {
    for (let i = 0; i < anotherStockArray.length; i++) {
        anotherStockInit(anotherStockArray[i])
    }

    function anotherStockInit (slider) {
        const tileLine = slider.closest('.another-stock')
        const nextEl = tileLine.querySelector('.another-stock__nav-btn_right')
        const prevEl = tileLine.querySelector('.another-stock__nav-btn_left')
        const scrollbar = tileLine.querySelector('.swiper-scrollbar')
        const swiper = new Swiper(slider, {
            slidesPerView: 'auto',
            scrollbar: {
                el: scrollbar
            },
            navigation: {
                nextEl: nextEl,
                prevEl: prevEl,
            },
        });
    }
}

"use strict";
//# sourceMappingURL=main.js.map
