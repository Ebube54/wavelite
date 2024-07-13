const navbarHarmburger = document.querySelector('.navbar_harmburger');
const closes = document.querySelector('.closes')

navbarHarmburger.addEventListener('click', function() {
    closes.style.display = 'flex';
    navbarHarmburger.style.opacity = '0'

    const drop = document.querySelector('.dropdown_section')
    drop.style.display = 'flex';
});

closes.addEventListener('click', function() {
    closes.style.display = 'none';
    navbarHarmburger.style.opacity = '100'

    const drop = document.querySelector('.dropdown_section')
    drop.style.display = 'none';
})