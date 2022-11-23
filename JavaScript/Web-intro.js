let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logo_span = document.querySelector('.logo-parts');

window.addEventListener('DOMContentLoaded', function(){

    setTimeout(()=>{
        logo_span.forEach((span, index) =>{
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1) * 100);
        });

        setTimeout(() => {
            logo_span.forEach((span) =>{
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (span + 1) * 50);
            });   
        }, 2000);

        setTimeout(() => {
           intro.style.top = "-100vh"; 
        }, 2300);
    });
})