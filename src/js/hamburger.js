const openBtn = document.querySelector('.header__hamburger-icon');
const closeBtn = document.querySelector('.header__hamburger-icon-close');
const navMobile = document.querySelector('.nav-mobile')


openBtn.addEventListener('click', () => {
    console.log("klikOpen");
    navMobile.classList.add('active')
})
closeBtn.addEventListener('click', () => {
    console.log("clickClose");
    navMobile.classList.remove('active')
})