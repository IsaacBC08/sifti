let menu = document.querySelector('#menu-icon')
let navitems = document.querySelector('.nav-items')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navitems.classList.toggle('open')
}
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.sifti-text', {delay: 200, origin: 'top'})
sr.reveal('.sifti-img', {delay: 450, origin: 'top'})
sr.reveal('.icons', {delay: 500, origin: 'left'})
sr.reveal('.scroll-down', {delay: 500, origin: 'right'})