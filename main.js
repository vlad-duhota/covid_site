
// call anim function on window resize
window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 992px)").matches) {
        anim();
    } else {
        return;
    }
});

// call anim function on document ready function
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
            if (value * .3 > 84) {
                $('.car').removeClass('fixed');
                value = 0
            }
        } else {
            $('.car').removeClass('fixed');
        }
    });
}

// observer options
const options = {
    // родитель целевого элемента - область просмотра
    root: null,
    // без отступов
    rootMargin: '0px',
    // процент пересечения - половина изображения
    threshold: .75
}

// observer loaction section
const location_observer = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach(entry => {
        // если элемент является наблюдаемым
        if (entry.isIntersecting) {
            $('.location__img path').addClass('anim');
        }
    })
}, options)

// observer faq section
const faq_observer = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach(entry => {
        // если элемент является наблюдае
        if (entry.isIntersecting) {
            $('.faq__img path').addClass('anim');
        }
    })
}, options)

// call observers
location_observer.observe(document.querySelector('.location'));
faq_observer.observe(document.querySelector('.faq__img'));


// pop up form

function form(has_next, has_prev , th, open_btn, close_btn, prev_btn, next_btn) {
    if (has_next) {
        $(th).change(function () {
            $(next_btn).addClass('active');
        });
    }
    if(has_prev){
        $(prev_btn).click(function(e){
            e.preventDefault();
            $(th).removeClass('active');
        });
    }
    $(open_btn).click(function (e) {
        e.preventDefault();
        $(th).addClass('active');
    })
    $(close_btn).click(function (e) {
        e.preventDefault();
        $('.pop-up').removeClass('active');
    })
}

// call form functions
form(true , false, '.pop-up_1', '.book', '.close-btn_1' , '', '.pop-up__next_1');
form(true , true, '.pop-up_2', '.pop-up__next_1', '.close-btn_2', '.pop-up__prev_1', '.pop-up__next_2');
form(false , true, '.pop-up_3', '.pop-up__next_2', '.close-btn_3', '.pop-up__prev_2', '');