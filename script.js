let username = document.getElementById("username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submit = document.querySelector("#btn");
let successAlert=  document.querySelector("#success");
let failAlert = document.querySelector("#failure");
let close = document.querySelector(".close");

let validUsername = false;
let validEmail = false;
let validpassword = false;

username.addEventListener('blur', function(){
    let regname = /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
    let str = username.value;
    if(regname.test(str)){
        username.classList.remove('is-invalid');
        validUsername = true;
    }
    else{
        username.classList.add('is-invalid');
        validUsername = false;
    }
    
})

email.addEventListener('blur', function(){
    let regname = /^([-_a-zA-Z0-9]+)@([-_a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if(regname.test(str)){
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

password.addEventListener('blur', function(){
    let regname = /^[a-zA-Z0-9!@#$%_-]{8,12}$/;
    let str = password.value;
    if(regname.test(str)){
        password.classList.remove('is-invalid');
        validpassword = true;
    }
    else{
        password.classList.add('is-invalid');
        validpassword = false;
    }
})

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if(validUsername && validEmail && validpassword){
        failAlert.classList.remove('show');
        successAlert.classList.add('show');
    }
    else{
        successAlert.classList.remove('show');
        failAlert.classList.add('show');
    }
    
})

close.addEventListener('click', function(){
    failAlert.classList.remove('show');
})