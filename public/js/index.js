let ourHamburgerContainer = null;
let navbarLogo = null;
document.addEventListener('DOMContentLoaded', ()=>{
    
    ourHamburger = document.getElementsByClassName('breadButton')[0];
    navbarLogo = document.getElementById('navbarLogoImage');
    checkWidthForBurger();
    
    
    
    window.addEventListener('resize', checkWidthForBurger);

    
});


function checkWidthForBurger(){

    if(window.innerWidth <= 500){
        navbarLogo.src = '/images/logo-navbar-mini.png'
    }

    if (window.innerWidth < 1120) {

        ourHamburger.classList.remove('hideMe');
    } else {
        console.log('large');
        ourHamburger.classList.add('hideMe');
    }
}