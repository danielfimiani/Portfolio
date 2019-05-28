$(document).ready(function () {
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