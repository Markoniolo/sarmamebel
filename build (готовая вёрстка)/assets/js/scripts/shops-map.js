"use strict";

var shopsMap = document.querySelector('[data-element="shops-map"]');
if (shopsMap) shopsMapInit();

function shopsMapInit() {
  var myMap;
  var MyIconContentLayout;
  var select;
  var selectComp = document.querySelector('.custom-select_shops');

  if (selectComp) {
    select = selectComp.getElementsByTagName('select')[0];
    select.addEventListener('change', toggleList);
  }

  var shopsBox = document.querySelector('[data-element="shops-box"]');
  var shopsTop = document.querySelector('[data-element="shops-top"]');
  var shopsItems = document.querySelectorAll('[data-element="shops-item"]');
  var shopsAboutBackArray = document.querySelectorAll('[data-element="shops-about-back"]');

  for (var i = 0; i < shopsAboutBackArray.length; i++) {
    shopsAboutBackArray[i].addEventListener('click', closeShopsAbout);
  }

  var shopsCloses = document.querySelectorAll('[data-element="shops-close"]');

  for (var _i = 0; _i < shopsCloses.length; _i++) {
    shopsCloses[_i].addEventListener('click', closeShopsBox);
  }

  function closeShopsBox() {
    shopsBox.classList.add('shops__box_hide');
    resetBox();
  }

  function resetBox() {
    var aboutActive = document.querySelector('.shops__about_active');
    if (aboutActive) aboutActive.classList.remove('shops__about_active');
    shopsTop.classList.remove('shops__top_hide');
    var list = document.querySelector('.shops__list_active');
    var items = list.querySelectorAll('.shops__item');

    for (var _i2 = 0; _i2 < items.length; _i2++) {
      items[_i2].classList.remove('shops__item_hide');
    }
  }

  for (var _i3 = 0; _i3 < shopsItems.length; _i3++) {
    shopsItems[_i3].addEventListener('click', openShopsAbout);
  }

  function openShopsAbout() {
    var centerCoords = JSON.parse(this.getAttribute('data-coords'));
    myMap.setCenter(getCoordsWithDelta(centerCoords), 14, {
      duration: 500
    });
    var inner = this.closest('.shops__inner');
    var about = inner.querySelector('.shops__about');
    var list = this.closest('.shops__list');
    var items = list.querySelectorAll('.shops__item');

    for (var _i4 = 0; _i4 < items.length; _i4++) {
      items[_i4].classList.add('shops__item_hide');
    }

    shopsTop.classList.add('shops__top_hide');
    about.classList.add('shops__about_active');
  }

  function closeShopsAbout() {
    var about = this.closest('.shops__about');
    about.classList.remove('shops__about_active');
    shopsTop.classList.remove('shops__top_hide');
    var list = this.closest('.shops__list');
    var items = list.querySelectorAll('.shops__item');

    for (var _i5 = 0; _i5 < items.length; _i5++) {
      items[_i5].classList.remove('shops__item_hide');
    }
  }

  var shopsLists = document.querySelectorAll('[data-element="shops-list"]');

  function toggleList() {
    myMap.geoObjects.removeAll();
    var oldActiveList = document.querySelector('.shops__list_active');
    if (oldActiveList) oldActiveList.classList.remove('shops__list_active');
    var index = select.value;
    shopsLists[index].classList.add('shops__list_active');
    createPlacemark(shopsLists[index]);
    var newFirstItem = shopsLists[index].querySelector('.shops__item');
    var centerCoords = JSON.parse(newFirstItem.getAttribute('data-coords'));
    myMap.setCenter(getCoordsWithDelta(centerCoords), 14, {
      duration: 500
    });
  }

  function getCoordsWithDelta(centerCoords) {
    if (document.body.clientWidth < 1260) {
      centerCoords[0] = centerCoords[0] - 0.012;
    } else {
      centerCoords[1] = centerCoords[1] - 0.015;
    }

    return centerCoords;
  }

  loadMap();

  function loadMap() {
    var mapScript = document.createElement('script');
    mapScript.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    document.body.appendChild(mapScript);
    mapScript.addEventListener('load', function () {
      ymaps.ready(contactMapInit);
    });
  }

  function contactMapInit() {
    var zoom = 14;
    var centerCoords = JSON.parse(shopsMap.getAttribute('data-coords'));
    centerCoords = getCoordsWithDelta(centerCoords);
    myMap = new ymaps.Map('shops__map', {
      center: centerCoords,
      zoom: zoom,
      controls: []
    }, {
      balloonPanelMaxMapArea: 0,
      autoFitToViewport: 'always',
      suppressMapOpenBlock: true
    });
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark-caption">$[properties.iconContent]</div>');
    var activeList = document.querySelector('.shops__list_active');
    createPlacemark(activeList);
  }

  function createPlacemark(list) {
    var items = list.querySelectorAll('[data-element="shops-item"]');

    for (var _i6 = 0; _i6 < items.length; _i6++) {
      createCurrentPlacemark(items[_i6], _i6);
    }

    function createCurrentPlacemark(item, index) {
      var coords = JSON.parse(item.getAttribute('data-coords'));
      var isPlacemarkOrange = item.getAttribute('data-placemark');
      var placemark = new ymaps.Placemark(coords, {
        iconContent: ''
      }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: isPlacemarkOrange ? 'assets/img/placemark_orange.svg' : 'assets/img/placemark_blue.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-24, -24],
        iconContentLayout: MyIconContentLayout
      });
      placemark.properties.set('index', index);
      myMap.geoObjects.add(placemark);
      placemark.events.add('click', choseActiveItem);
    }
  }

  function choseActiveItem(e) {
    resetBox();
    var placemark = e.get('target');
    var index = placemark.properties.get('index', 0);
    var list = document.querySelector('.shops__list_active');
    var items = list.querySelectorAll('.shops__item');
    items[index].click();
    var shopsBox = document.querySelector('[data-element="shops-box"]');
    shopsBox.classList.remove('shops__box_hide');
  }
}
//# sourceMappingURL=shops-map.js.map
