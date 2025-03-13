document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Javascript is loaded successfully");
    console.log("navMenu:", document.getElementById("nav-menu"));
    console.log("navToggle:", document.getElementById("nav-toggle"));
    console.log("navClose:", document.getElementById("nav-close"));
    const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

    console.log("Script loaded and elements found:",navMenu,navClose,navToggle);

      /*Menu show*/

      if(navToggle){
        navToggle.addEventListener('click', () => {
            console.log("Toggle menu clicked")
            navMenu.classList.add("show-menu");
            console.log("Class added: ", navMenu.classList)
        });
      }

      /*Hide menu*/

      if(navClose){
        navClose.addEventListener('click',() => {
            navMenu.classList.remove("show-menu");
        });
      }

      /*Remove menu onclick in mobile*/
      const navLink = document.querySelectorAll('.nav__link')

      const linkAction = () => {
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
      }

      navLink.forEach(n => n.addEventListener('click', linkAction))
      window.addEventListener('scroll',showHeader)

      //POPULAR SWIPER//
      const swiperPopular = new Swiper('.popular__swiper', {
        loop: true,
        grabCursor:true,
        spaceBetween:32,
        slidesPerView:'auto',
        centeredSlides:'auto',
      
        breakPoints:{
          1150:{
            spaceBetween:80,
          }
        }
      })
});



