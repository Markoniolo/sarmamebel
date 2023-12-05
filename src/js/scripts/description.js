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
