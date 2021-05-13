let ourHamburger = null;
let navbarLogo = null;
let hamBurgerMenuOpen = false;
let ourVerticalMenu = null;
let loggedInOptions = null;
let loggedInOptionsContainer = null;

let sliderBabyContainer = null;

// Slider Manager Closure.
let sliderChangeFunction = (function (){
    let sliderCurrentImageCount = 1;
    return (function (next){
        if(sliderCurrentImageCount != 1){
            sliderBabyContainer.classList.remove(`sliderBaby${sliderCurrentImageCount}`);
        }

        if(next){

            sliderCurrentImageCount += 1;
            if(sliderCurrentImageCount > 3){
                sliderCurrentImageCount = 1;
            }
        }else{
            sliderCurrentImageCount -= 1;
            if(sliderCurrentImageCount < 1){
                sliderCurrentImageCount = 3;
            }
        }

        if(sliderCurrentImageCount != 1){
            sliderBabyContainer.classList.add(`sliderBaby${sliderCurrentImageCount}`);
        }

    });
})();

// after DOM loaded.
document.addEventListener('DOMContentLoaded', ()=>{
    
    ourHamburger = document.getElementsByClassName('breadButton')[0];
    navbarLogo = document.getElementById('navbarLogoImage');
    ourVerticalMenu = document.getElementsByClassName('verticalMenu')[0];
    sliderBabyContainer = document.getElementsByClassName('sliderBabyContainer')[0];
    loggedInOptionsContainer = document.getElementsByClassName('loggedInItem')[0];
    if(loggedInOptionsContainer){
        loggedInOptions = document.getElementsByClassName('userOptionsContainer')[0];
        console.log(loggedInOptionsContainer.firstElementChild);
        loggedInOptionsContainer.firstElementChild.addEventListener('focus', () => {
            loggedInOptions.classList.remove('hideMe');
        });

        loggedInOptionsContainer.firstElementChild.addEventListener('blur', () => {
            console.log('I got lost');
            loggedInOptions.classList.add('hideMe');
        })
    }

    
    document.getElementsByClassName('leftArrow')[0].addEventListener('click', ()=>{
        sliderChangeFunction(false);
    });

    document.getElementsByClassName('rightArrow')[0].addEventListener('click', () => {
        sliderChangeFunction(true);
    });

    


    ourHamburger.addEventListener('click', toggleMenu);
    checkWidthForBurger();
    
    
    
    window.addEventListener('resize', checkWidthForBurger);

    
});

// Turns the vertical menu on/off.
function toggleMenu(event){
    if(!hamBurgerMenuOpen){
        ourVerticalMenu.classList.add('verticalMenuVisible');
        event.target.src = '/images/hamburgerActive.png';
        hamBurgerMenuOpen = true;
    }else{
        ourVerticalMenu.classList.remove('verticalMenuVisible');
        event.target.src = '/images/hamburger.png';
        hamBurgerMenuOpen = false;
    }
}

// Enables burger icon
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