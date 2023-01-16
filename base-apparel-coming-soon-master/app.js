const emailInput = document.getElementById('email');
const erroImg = document.querySelector('.error__img___container');
const errorMsg = document.querySelector('.error-msg');


window.addEventListener('load',()=>{
    emailInput?.addEventListener('blur',()=>{
        console.log(emailInput?.validity?.valid);
        if(!emailInput?.validity?.valid){
            emailInput?.classList.add('error');
            if(erroImg){
                erroImg?.classList.remove('hide');
            }
            if(errorMsg){
                errorMsg.classList.remove('hide');
            }
        }

    })
    emailInput?.addEventListener('change',()=>{
        console.log(emailInput?.validity?.valid);
        if(emailInput?.validity?.valid){
            emailInput?.classList.remove('error');
            if(erroImg){
                erroImg?.classList.add('hide');
            }
            if(errorMsg){
                errorMsg.classList.add('hide');
            }
        }

    })
})