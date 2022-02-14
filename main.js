

window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 992px)").matches) {
    } else {
        return;
    }
});


$(document).ready(function () {
    if (window.matchMedia("(min-width: 992px)").matches) {
    } else {
        return;
    }
});

const options = {
    // родитель целевого элемента - область просмотра
    root: null,
    // без отступов
    rootMargin: '0px',
    // процент пересечения - половина изображения
    threshold: .5
}

const observer = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach(entry => {
        // если элемент является наблюдаемым
        if (entry.isIntersecting) {
            var value = 0;
            $('body').addClass('no-scroll');

            $('body').bind('mousewheel', function (e) {
                var scrollY = e.originalEvent.deltaY / 20;
                value = value + scrollY;
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
                    if (value * .3 > 88 || value * .3 < 0) {
                        $('.car-img').css("left", 0 + "%")
                        $('.car').removeClass('fixed');
                        $('body').removeClass('no-scroll');
                        value=0;
                    }
            });
            
            
        }
    })
}, options)

const car = document.querySelector('.car');
observer.observe(car);


