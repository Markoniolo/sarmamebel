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
