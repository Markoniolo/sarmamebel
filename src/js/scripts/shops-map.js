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
