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
