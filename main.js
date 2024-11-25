/*=============== SHOW MENU ===============*/
// تعريف عناصر القائمة
const navMenu = document.getElementById('nav-menu');   
      navToggle = document.getElementById('nav-toggle');    
     navClose = document.getElementById('nav-close');    

// عرض القائمة
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');     
    });
}

// إخفاء القائمة
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu'); 
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
// إزالة القائمة في الموبايل
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu'); 
    navMenu.classList.remove('show-menu');
}

// إضافة مستمع للحدث لكل رابط
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/

const bgHeader = () => {
    const header = document.getElementById('header');

    if (this.scrollY >= 50) {
        header.classList.add('bg-header');
    } else {
        header.classList.remove('bg-header');
    }
}

window.addEventListener('scroll', bgHeader);
/*=============== SWIPER SERVICES ===============*/ 
const swiperServices = new Swiper('.services__swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

