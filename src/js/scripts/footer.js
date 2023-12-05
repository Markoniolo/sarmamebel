const footerHeadlines = document.querySelectorAll('[data-element="footer-headline"]')

for (let i = 0; i < footerHeadlines.length; i++) {
    footerHeadlines[i].addEventListener('click', toggleFooterHeadline)
}

function toggleFooterHeadline () {
    if (this.classList.contains('footer__headline_active')) {
        this.classList.remove('footer__headline_active')
    } else {
        const oldActive = document.querySelector('.footer__headline_active')
        if (oldActive) oldActive.classList.remove('footer__headline_active')
        this.classList.add('footer__headline_active')
    }
}
