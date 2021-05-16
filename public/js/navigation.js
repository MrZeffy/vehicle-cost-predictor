

document.addEventListener('DOMContentLoaded', () => {

    let ourHamburger = null;
    let navbarLogo = null;
    let hamBurgerMenuOpen = false;
    let ourVerticalMenu = null;





    ourHamburger = document.getElementsByClassName('breadButton')[0];
    navbarLogo = document.getElementById('navbarLogoImage');
    ourVerticalMenu = document.getElementsByClassName('verticalMenu')[0];
    ourHamburger.addEventListener('click', (event)=>{
        hamBurgerMenuOpen = toggleMenu(event, hamBurgerMenuOpen, ourVerticalMenu);
    });
    checkWidthForBurger(navbarLogo, ourHamburger);
    window.addEventListener('resize', ()=>{
        checkWidthForBurger(navbarLogo, ourHamburger);
    });
});




// Toggles vertical menu on hamburger click

function toggleMenu(event, hamBurgerMenuOpen, ourVerticalMenu) {
    if (!hamBurgerMenuOpen) {
        ourVerticalMenu.classList.add('verticalMenuVisible');
        event.target.src = '/images/hamburgerActive.png';
        hamBurgerMenuOpen = true;
    } else {
        ourVerticalMenu.classList.remove('verticalMenuVisible');
        event.target.src = '/images/hamburger.png';
        hamBurgerMenuOpen = false;
    }

    return hamBurgerMenuOpen;
}


// Enables burger button while checking burger button
function checkWidthForBurger(navbarLogo, ourHamburger) {

    if (window.innerWidth <= 500) {
        navbarLogo.src = '/images/logo-navbar-mini.png'
    }

    if (window.innerWidth < 1120) {

        ourHamburger.classList.remove('hideMe');
    } else {

        ourHamburger.classList.add('hideMe');
    }
}