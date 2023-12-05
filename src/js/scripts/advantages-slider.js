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
