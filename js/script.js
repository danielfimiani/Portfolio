$(document).ready(function () {
  
  $(window).on('scroll', function () {
    var $top = $(this).scrollTop() + $(this).outerHeight(true)/2 ;

    $('nav div ul li a').removeClass('active');

    if ($top >= $('#fotografia').offset().top && $top <= $('#fotografia').offset().top + $('#fotografia').outerHeight(true)) {
      $('#btn-fotografia').addClass('active');
    }

    if ($top >= $('#proyectos').offset().top && $top <= $('#proyectos').offset().top + $('#proyectos').outerHeight(true)) {
      $('#btn-proyectos').addClass('active');
    }

    if ($top >= $('#fortalezas').offset().top && $top <= $('#fortalezas').offset().top + $('#fortalezas').outerHeight(true)) {
      $('#btn-fortalezas').addClass('active');
    }

    if ($top >= $('#contacto').offset().top && $top <= $('#contacto').offset().top + $('#contacto').outerHeight(true)) {
      $('#btn-contacto').addClass('active');
    }

    if ($(window).scrollTop()) {
      $('nav').addClass('sticky-nav');
      $('nav>div>ul>li>a').addClass('white-text');
      $('h1').css("color", "white");
    } else {
      $('nav').removeClass('sticky-nav');
      $('nav>div>ul>li>a').removeClass('white-text')
      $('h1').removeClass('white-text');
      $('h1').css("color", "black");
    }
  });

  $('.swiper-container').css("overflow", "visible");
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
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
});


