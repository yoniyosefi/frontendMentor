const stars = document.getElementById('stars').children;
const submitBtn = document.getElementById('submit-btn');
const firstScreen = document.getElementById('first-screen');
const secendScreen = document.getElementById('secend-screen');
const summary = document.getElementById('summary');

let score=0;

const resetStars = ()=>{
    for (const star of stars) {
        star.classList.remove('star-pushed');
    }
}



window.addEventListener('load', ()=>{
    for (let index = 0; index < stars?.length; index++) {
        stars[index]?.addEventListener('click',()=>{
            resetStars();
            score = index+1
            stars[index].classList.add('star-pushed');
        })
    }

    submitBtn?.addEventListener('click',()=>{
        firstScreen?.classList.add('hide');
        secendScreen?.classList.remove('hide');
        summary?.append(`You selected ${score} out of 5`);
    })
});