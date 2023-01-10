const questions = document.getElementsByClassName('faq_item');

window.addEventListener('load',()=>{
    if(questions){
        for (const question of questions) {
            question?.childNodes;
            
            if(question&&question?.children){
                question?.children[0].addEventListener('click',()=>{
                    if(question?.children[0]?.children.length>1){
                        question?.children[0]?.children[1]?.classList.toggle('rotate');
                    }
                    question?.children[0]?.children[0]?.classList.toggle('bold');
                    if(question.children.length>1){
                        question.children[1].classList.toggle('hide') 
                    }
                })
                
            }
        }
    }
});