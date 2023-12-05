const specialOffer = document.querySelector('.special-offer')

if (specialOffer) specialOfferInit()

function specialOfferInit () {
    const btnClose = document.querySelector('.special-offer-close')
    btnClose.addEventListener('click', closeOffer)
}

function closeOffer () {
    specialOffer.classList.add('special-offer_hide')
}
