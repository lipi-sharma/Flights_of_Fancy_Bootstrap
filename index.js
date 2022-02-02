let loginBtn = document.getElementById('login-button');
loginBtn.addEventListener('click', loginMsg);

function loginMsg(){
    alert('You have been successfully logged in!');
}
let signupBtn = document.getElementById('signup-button');
signupBtn.addEventListener('click', signupMsg);

function signupMsg(){
    alert('Your account has been successfully created!');
}

