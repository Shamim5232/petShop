var menuItem=document.querySelector('.menu_items');
var menuBar=document.querySelector('#menuBars');

menuBar.onclick=()=>{
    menuBar.classList.toggle('fa-times');
    menuItem.classList.toggle('MenuActive');
}




  var swiper = new Swiper(".slider", {
    autoplay:true,
    loop:true,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          200: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
      },
  });
  var swiper = new Swiper(".henSlider", {
    autoplay:true,
    loop:true,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          200: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
      },
  });
  var swiper = new Swiper(".goatSlider", {
    autoplay:true,
    loop:true,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          200: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
      },
  });