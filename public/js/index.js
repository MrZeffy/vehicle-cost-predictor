let ourHamburger = null;
let navbarLogo = null;
let hamBurgerMenuOpen = false;
let ourVerticalMenu = null;

let sliderBabyContainer = null;
let sliderLeftArrow


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


document.addEventListener('DOMContentLoaded', ()=>{
    
    ourHamburger = document.getElementsByClassName('breadButton')[0];
    navbarLogo = document.getElementById('navbarLogoImage');
    ourVerticalMenu = document.getElementsByClassName('verticalMenu')[0];
    sliderBabyContainer = document.getElementsByClassName('sliderBabyContainer')[0];
    
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