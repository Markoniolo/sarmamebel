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
