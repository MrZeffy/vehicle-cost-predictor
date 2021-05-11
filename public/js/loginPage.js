let signUpLink = null;
let loginHeading = null;
let loginButton = null;
let loginEnabled = true;
let ourSubmitForm = null;
document.addEventListener('DOMContentLoaded', ()=>{
    signUpLink = document.getElementById('signUp');
    loginHeading = document.getElementById('loginHeading');
    loginButton = document.getElementsByClassName('submitButton')[0];
    ourSubmitForm = document.getElementsByClassName('ourForm')[0];
    signUpLink.addEventListener('click', clickSignUp);

    ourSubmitForm.addEventListener('submit', formSubmitActions);
});


function formSubmitActions(event){

    event.target.action = loginEnabled?'/loginPage':'/register';
    
    
}


function clickSignUp(){
    if(loginEnabled){
        loginHeading.innerText = 'Register';
        loginButton.innerText = 'Sign up'
    }else{
        loginHeading.innerText = 'Login';
        loginButton.innerText = 'Sign in';
    }

    loginEnabled = !loginEnabled;
}