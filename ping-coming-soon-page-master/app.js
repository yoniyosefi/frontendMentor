const email = document.getElementById('email');
const errorMsg = document.querySelector('.error_msg');

window.addEventListener('load',()=>{
    console.dir(email);
    if(email){
        email?.addEventListener('blur',()=>{
            if(!email?.validity?.valid){
                email.classList.add('invalid_border');
                email.classList.add('email_error');
                errorMsg?.classList.remove('hide');
                email.placeholder = 'Exaple@email.com';
            }else{
                email.classList.remove('invalid_border');
                email.classList.remove('email_error');
                errorMsg?.classList.add('hide');
            }
            
        });
    }
});