const shopsVerticalSlider = document.querySelector('.shops__vertical-slider')

if (shopsVerticalSlider) shopsBoxInit()

function shopsBoxInit () {
    new SimpleBar(document.querySelector('.shops__list'));
}
