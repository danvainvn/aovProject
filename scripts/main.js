$(document).ready(function(){
    $(window).on('scroll load', function(){
        if($(window).scrollTop()>30) {
            $('.navBar').addClass('navBarActive');
        } else {
            $('.navBar').removeClass('navBarActive');
        }

        $('section').each(function(){
            var top = $(window).scrollTop();
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            if(top >= offset && top < height + offset){
                $('.navBar .navContent .navItem .navLink').removeClass('active');
                $('.navBar').find('[href="#' + id + '"]').addClass('active');
            }

        });

    });

});