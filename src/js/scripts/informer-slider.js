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
