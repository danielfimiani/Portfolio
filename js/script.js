$(document).ready(function () {
    //initialize swiper when document ready
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });

    $(window).on('scroll',function() {
        if ($(window).scrollTop()) {
            $('nav').addClass('sticky-nav');
            $('nav>div>ul>li>a').addClass('white-text');
            $('h1').css("color","white");
        }else{
            $('nav').removeClass('sticky-nav');
            $('nav>div>ul>li>a').removeClass('white-text')
            $('h1').removeClass('white-text');
            $('h1').css("color","black");
        }
    });  
});


