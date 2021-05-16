let sliderBabyContainer = null;
let sliderMover = null;


// Slider image change closure.
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
    
    sliderBabyContainer = document.getElementsByClassName('sliderBabyContainer')[0];

    sliderBabyContainer.addEventListener('mouseover', stopAutoSlider);
    sliderBabyContainer.addEventListener('mouseout', ()=>{
        sliderMover = sliderAutoStart();
    })


    
    document.getElementsByClassName('leftArrow')[0].addEventListener('click', ()=>{
        sliderChangeFunction(false);
    });

    document.getElementsByClassName('rightArrow')[0].addEventListener('click', () => {
        sliderChangeFunction(true);
    });


    // Automatic slider move.

    sliderMover = sliderAutoStart();

    
});


let sliderAutoStart = () => {
    return setInterval(() => {
        sliderChangeFunction(true)
    }, 3000);
}


let stopAutoSlider = ()=>{
    if(sliderMover){
        clearInterval(sliderMover);
        sliderMover = null;
    }
}
