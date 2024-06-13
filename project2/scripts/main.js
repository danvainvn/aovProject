$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.bar').toggleClass('bar-toggle');

    });

    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.bar').removeClass('bar-toggle');

        if($(window).scrollTop()>30) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }

        $('section').each(function(){
            var top = $(window).scrollTop();
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            if(top >= offset && top < height + offset){
                $('.bar ul li a').removeClass('active');
                $('.bar').find('[href="#' + id + '"]').addClass('active');
            }

        });

    });

});