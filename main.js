

window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 992px)").matches) {
        anim();
    } else {
        return;
    }
});


$(document).ready(function () {
    if (window.matchMedia("(min-width: 992px)").matches) {
        anim();
    } else {
        return;
    }
});

function anim() {
    $(window).scroll(function () {
        var scrollY = window.scrollY - 175;
        if (scrollY > 0) {
            var width = $('.car').css('width').replace('px', '');
            var value = scrollY / width * 350;
            $('.car-img').css("left", value * .3 + "%")
            $('.car').addClass('fixed');
            if (value * .3 > 16) {
                $('.flag_1').addClass('active');
                $('.car__item_1').addClass('active');
            } else {
                $('.flag_1').removeClass('active');
                $('.car__item_1').removeClass('active');
            }
            if (value * .3 > 36) {
                $('.flag_2').addClass('active');
                $('.car__item_2').addClass('active');
            } else {
                $('.flag_2').removeClass('active');
                $('.car__item_2').removeClass('active');
            }
            if (value * .3 > 60) {
                $('.flag_3').addClass('active');
                $('.car__item_3').addClass('active');
            } else {
                $('.flag_3').removeClass('active');
                $('.car__item_3').removeClass('active');
            }
            if (value * .3 > 88) {
                $('.car').removeClass('fixed');
                value = 0
            }
        } else {
            $('.car').removeClass('fixed');
        }
    });
}