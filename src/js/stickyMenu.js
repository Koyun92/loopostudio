const openBtnOffset = openBtn.offsetTop
const header = document.querySelector('header')
const portfolio = document.querySelector('.portfolio')

window.addEventListener('scroll', () => {



    // changing color
    if (window.scrollY >= header.offsetHeight) {
        openBtn.classList.add('black')
    } else {
        openBtn.classList.remove('black')
    }

    if (window.scrollY >= portfolio.offsetTop) {

        openBtn.classList.toggle('black')
    }
    // sticking button
    if (window.scrollY >= openBtnOffset) {

        openBtn.classList.add('sticky')
    } else {

        openBtn.classList.remove('sticky')
    }

})