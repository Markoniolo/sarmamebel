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
