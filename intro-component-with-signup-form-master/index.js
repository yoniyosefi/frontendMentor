const inputs = document.querySelectorAll('input');
const submitform = document.getElementById('submit-btn')

window.addEventListener('load',()=>{
    submitform?.addEventListener('click',()=>{
        
     for (const input of inputs) {
        input.classList.add('input-error')
        if(!input?.validity?.valid){
            input.classList.add('input-error')
            input.nextElementSibling?.classList.remove('valid')
        }else{
            input.classList.remove('input-error')
            input.nextElementSibling?.classList.add('valid');               
        }
        }       
    })
})

// window.addEventListener('load',()=>{
//     for (const input of inputs) {
//         input.addEventListener('blur',()=>{
//             if(!input?.validity?.valid){
//                 input.nextElementSibling?.classList.remove('valid')
//             }else{
//                 input.nextElementSibling?.classList.add('valid');               
//             }
//         })
//     }
// })