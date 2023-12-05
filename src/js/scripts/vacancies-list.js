const vacanciesList = document.querySelector('[data-element="vacancies-list"]')

if (vacanciesList) vacanciesListInit()

function vacanciesListInit () {
    const tops = vacanciesList.querySelectorAll('.vacancies__top')
    for (let i = 0; i < tops.length; i++) {
        tops[i].addEventListener('click', toggleTop)
    }

    function toggleTop () {
        if (!this.classList.contains('vacancies__top_active')) {
            const oldActive = vacanciesList.querySelector('.vacancies__top_active')
            if (oldActive) oldActive.classList.remove('vacancies__top_active')
        }
        this.classList.toggle('vacancies__top_active')
    }
}
