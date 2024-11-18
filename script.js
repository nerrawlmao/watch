const swiper = new Swiper('.swiper', {
    loop: false, 
    slidesOffsetAfter: 70,
    slidesOffsetBefore: 70,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        500: {
            slidesPerView: 1.4,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 2.42,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 4.4,
            spaceBetween: 20,
        }
    }
});
const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', function(){
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')){
        body.classList.add('scroll-down');
    }
    if (currentScroll < lastScroll && body.classList.contains('scroll-down')){
        body.classList.remove('scroll-down');
    }

    lastScroll = currentScroll;
});

const button = document.querySelector('.light-mode-button');
const video = document.querySelector('video');
let lightmode = localStorage.getItem('light-mode');

const enableLightMode = function(){
    video.setAttribute('src', 'videos/lightmode1.mp4');
    document.body.classList.add('light-mode');
    document.body.classList.add('navbar-light-mode');
    document.querySelector('i').className = 'fa-solid fa-sun';
    localStorage.setItem('light-mode', 'active');
}

const disableLightMode = function(){
    video.setAttribute('src', 'videos/darkmode.mp4');
    document.body.classList.remove('light-mode');
    document.body.classList.remove('navbar-light-mode');
    document.querySelector('i').className = 'fa-solid fa-moon';
    localStorage.setItem('light-mode', null);
}

if (lightmode === 'active'){
    enableLightMode();
}

button.addEventListener('click', function(){
    lightmode = localStorage.getItem('light-mode');
    if (lightmode !== 'active'){
       enableLightMode();
    } else {
        disableLightMode();
    }
});
