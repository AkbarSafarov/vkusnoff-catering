$(function(){


    // start parallax

    let $sceneForm = $('#scene_form');
    let $sceneKeytering = $('#scene_keytering');
    let $sceneSlider = $('#scene_slider');
    let $sceneTr = $('#scene_tr');
        
    $sceneForm.parallax();  
    $sceneKeytering.parallax();  
    $sceneSlider.parallax();  
    $sceneTr.parallax();  
    $('#scene3').parallax(); 
    $('#scene4').parallax(); 
    $('#scene5').parallax(); 

    new Ukiyo(".ukiyo");

    // end parallax

    // start slider

    const sliderImageWrap = $('.image_slider');
    const sliderImage = $(this).find('.swiper');
    const sliderIdImage = sliderImage.data('id');
    const sliderClassImage = '.' + sliderIdImage;   

    const newImageSwiper = new Swiper(sliderClassImage, {
		slidesPerView: 1,
		loopedSlides: 1,
		effect: "creative",
        speed: 1000,
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
		lazy: true,
        loop: true
    });

    const slierTextWrap = $('.text_slider');
    const sliderText = slierTextWrap.find('.swiper');
    const sliderIdText = sliderText.data('id');
    const sliderClassText = '.' + sliderIdText;
    const arrowText = sliderText.data('arrow');    

    const newTextSwiper = new Swiper(sliderClassText, {
        slidesPerView: 1,
        loopedSlides: 1,
        navigation: {
            nextEl: '.swiper-' + arrowText + '-next',
            prevEl: '.swiper-' + arrowText + '-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        thumbs: {
            swiper: newImageSwiper,
        },    
        effect: "fade",
        lazy: true,
        loop: true
    });

    // end slider

    

    // start burger menu

    var $body = $(document.body),
        $html = $(document.documentElement);
        
    var menuBtn = $('.burger'),
        menuWrapper = $('.menu_burger'),
        menuClose = $('.menuClose'),        
        openedMenu = 'opened',
        overflowHidden = 'oveflowHidden';

    menuBtn.on("click", function(event) {
        menuWrapper.toggleClass(openedMenu);
        menuBtn.toggleClass(openedMenu);
        $html.toggleClass(overflowHidden);
        $html.toggleClass('open_menu');
    });
    menuClose.on("click", function(event) {
        menuWrapper.removeClass(openedMenu);
        menuBtn.removeClass(openedMenu);
        $html.removeClass(overflowHidden);
        $html.removeClass('open_menu');
    });

    $(document).on('click touchstart', function(e){
        if( $(e.target).closest(menuBtn).length || $(e.target).closest(menuWrapper).length) 
          return;
        if (menuBtn.hasClass(openedMenu)){
            menuWrapper.removeClass(openedMenu);
            menuBtn.removeClass(openedMenu);
            $html.removeClass(overflowHidden);
            $html.removeClass('open_menu');
        }
    });

    // end burger menu


    let swiper = new Swiper(".recomendSlider", {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 20,   
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            800: {
                slidesPerView: 2,
            },
            900: {
                spaceBetween: 15,
                slidesPerView: 2
            },
            1400: {
                spaceBetween: 20,
                slidesPerView: 2
            }
        },
        navigation: {
            nextEl: ".swiper-activity-next",
            prevEl: ".swiper-activity-prev",
        },
        lazy: true,
    });

    let galleryDuplicateSwiper = new Swiper(".mySwiper_gallery_duplicate", {
        slidesPerView: 1,
        loopedSlides: 1,
        effect: "creative",
        speed: 1000,
        initialSlide: 2,
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        lazy: true,
        loop: true,
    });

    let gallerySwiper = new Swiper(".mySwiper_gallery", {
        slidesPerView: 1,
        loopedSlides: 1,
        effect: "creative",
        speed: 1000,
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        pagination: {
            el: ".swiper-gallery-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? '0' + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? '0' + number : number;
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="swiper-pagination-current"></span>' +
                       ' - ' +
                       '<span class="swiper-pagination-total"></span>';
            }
        },
        navigation: {
            nextEl: ".swiper-gallery-next",
            prevEl: ".swiper-gallery-prev",
        },
        lazy: true,
        loop: true,
        thumbs: {
            swiper: galleryDuplicateSwiper,
        },  
    });

    let galleryTextSwiper = new Swiper(".mySwiper_gallery_text", {
        slidesPerView: 1,
        loopedSlides: 1,
        navigation: {
            nextEl: '.swiper-gallery-text-next',
            prevEl: '.swiper-gallery-text-prev',
        },
        pagination: {
            el: ".swiper-gallery-pagination",
            type: "fraction",
        },
        thumbs: {
            swiper: gallerySwiper,
        },    
        effect: "fade",
        lazy: true,
        loop: true
    });   

    let trustSlider = new Swiper('.trustSlider', {
        spaceBetween: 40,
        centeredSlides: true,
        speed: 6000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        slidesPerView:'auto',
        allowTouchMove: false,
        disableOnInteraction: true
    });

    new WOW().init();
    
    // fixed header
    let header = $('.header'),
        headerOffset = header.offset();

    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 200) {
        header.addClass('fixed'); 
    } else {

        $(window).scroll(function(){
            if (($(window).scrollTop() > headerOffset.top)) {
                header.addClass('fixed'); 
            } else {
                header.removeClass('fixed');
            };
        }); 
    }

    $('.anchor_link').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 170
        },500);
    });

    // Функция для установки куки
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Функция для получения значения куки
    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    $(document).ready(function() {
        let modalShown = getCookie("modalShown");
        if (!modalShown) {
            setTimeout(function() {
                $.fancybox.open({
                    src  : '#discountModal',
                    type : 'inline'
                });

                setCookie("modalShown", "true", 1);
            }, 5000);
        }
    });

    $('.menu_form_wrapper .item .left_block').on('click', function(){
        $(this).closest('.item').siblings().removeClass('opened');
        $(this).closest('.item').siblings().find('.right_block').slideUp();
        $(this).closest('.item').addClass('opened');
        $(this).closest('.item').find('.right_block').slideDown();
    });

    $( ".date_input" ).datepicker({
      dateFormat: 'dd.mm.yy', // Формат даты
      prevText: '&#x3c;Пред', // Текст кнопки "Предыдущий"
      nextText: 'След&#x3e;', // Текст кнопки "Следующий"
      monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], // Названия месяцев
      monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'], // Сокращенные названия месяцев
      dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'], // Названия дней недели
      dayNamesShort: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], // Сокращенные названия дней недели
      dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], // Минимальные сокращенные названия дней недели
      weekHeader: 'Нед', // Заголовок недели
      firstDay: 1, // Первый день недели (0 - воскресенье, 1 - понедельник и т.д.)
      isRTL: false, // Порядок отображения текста (false - слева направо)
      showMonthAfterYear: false, // Отображать месяц после года (true - год, месяц)
      yearSuffix: '' // Суффикс года
    });

    // calc 


    $('.select_set').on('click', function(){
        $(this).closest('.sets_select').addClass('opened');
    });

    $(document).on('click touchstart', function(e){
        if( $(e.target).closest('.select_set').length) 
          return;
        if ($('.sets_select').hasClass('opened')){
            $('.sets_select').removeClass('opened')
        }
    });

    $('.sets_select ul li').on('click', function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        const value = $(this).text();
        const parent =$(this).closest('.sets_select');
        const gost = +$('.gost_set').val();

        if(gost) {
            const delevery = +$('.select_set').data('delevery');
            const priceSet = +$(this).data('price');
            const summ = (priceSet * gost ) + delevery;
            const totalSumm = summ + (summ*0.15);
            $('.field.price .total_price').text(totalSumm);
            $('.field.price').show();
        }
        parent.find('.select_set').val(value);
        parent.removeClass('opened');
    });

    $('input.gost_set').on('input', function(){
        const gost = +$(this).val();
        const priceSet = +$('.sets_select ul li.active').data('price');
        console.log(priceSet)
        if(priceSet) {
            const delevery = +$('.select_set').data('delevery');
            const summ = (priceSet * gost ) + delevery;
            const totalSumm = summ + (summ*0.15);
            $('.field.price .total_price').text(totalSumm);
            $('.field.price').show();
        }
    })


});

