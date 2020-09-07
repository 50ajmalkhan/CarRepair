/**
  * themesflatSearch();
  * menuCanvas();
  * toggleExtramenu();
  * toggleMenu();
  * priceFilter();
  * rangeYear();
  * zoomPic();
  * tabs();
  * flatSpacer();
  * flatOwl();
  * overviewSlide();
  * flatIsotope();
  * whyusToggle();     
  * goTop();
  * flatCounter();
  * progressBar();
  * VideoPopup();
  * accordionToggle();
  * googleMap();
  * flatEqualizeHeight();
  * flatIsotopeProduct();
  * responsiveMenu();
  * parallax();
  * changeImg();
  * headerFixed();
  * flatRetinaLogo();
  * swClick();
  * ajaxContactForm();
  * ajaxSubscribe();
  * inViewport();
  * preLoader();
**/
    
;(function($) {
    "use strict";

    var isMobile = {

        Android: function() {

            return navigator.userAgent.match(/Android/i);

        },

        BlackBerry: function() {

            return navigator.userAgent.match(/BlackBerry/i);

        },

        iOS: function() {

            return navigator.userAgent.match(/iPhone|iPad|iPod/i);

        },

        Opera: function() {

            return navigator.userAgent.match(/Opera Mini/i);

        },

        Windows: function() {

            return navigator.userAgent.match(/IEMobile/i);

        },

        any: function() {

            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());

        }

    };

    var parallax = function() {

        if ( $().parallax && isMobile.any() === null ) {

            $('.parallax1').parallax("50%", -0.6); 

            $('.parallax2').parallax("50%", -0.5);   

            $('.parallax3').parallax("50%", -0.5); 

            $('.parallax4').parallax("50%", -0.5); 

            $('.parallax5').parallax("50%", -0.5); 

            $('.parallax6').parallax("50%", -0.3); 

            $('.parallax7').parallax("50%", -0.5);         

        }

    };


    var themesflatSearch = function () {
       $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 's' ) ) {
                $('.top-search').removeClass('show');   
                $('.show-search').removeClass('active');             
            } 
        });

        $('.show-search').on('click', function(event){
            event.stopPropagation();
        });

        $('.search-form').on('click', function(event){
            event.stopPropagation();
        });        

        $('.show-search').on('click', function (e) {           
            if( !$( this ).hasClass( "active" ) )
                $( this ).addClass( 'active' );
            else
                $( this ).removeClass( 'active' );
             e.preventDefault();

            if( !$('.top-search' ).hasClass( "show" ) )
                $( '.top-search' ).addClass( 'show' );
            else
                $( '.top-search' ).removeClass( 'show' );
        });
    };

    var menuCanvas = function() {
        var buttonCavas = $('.box-canvas span.ti-align-right');
        var closeCanvas = $('.menu-canvas .close');
        buttonCavas.on('click', function() {
            $(this).closest('section').children('.menu-canvas').css({
                opacity: '1',
                visibility: 'visible',
                right: '0'
            });
        });

        closeCanvas.on('click', function() {
            $(this).parent('.menu-canvas').css({
                opacity: '0',
                visibility: 'hidden',
                right: '-520px',
            });
        });
    }; // Menu Canvas

    var toggleExtramenu = function() {
        $('.btn-canvas a').on('click', function() {
            $('body').toggleClass('off-canvas-active');
        });
        $('#site-off-canvas .close').on('click', function() {
            $('body').removeClass('off-canvas-active');
        });
    };

    var toggleMenu = function(){
        $('#site-off-canvas ul.menu > li > a').on('click',function(e){
            $('#site-off-canvas ul > li').removeClass('show');
            $(this).closest('#site-off-canvas ul > li').addClass('show');   
            var checkElement = $(this).next();
            if((checkElement.is('#site-off-canvas ul')) && (checkElement.is(':visible'))) {
                $(this).closest('li').removeClass('show');
                checkElement.slideUp();
            }
            if((checkElement.is('#site-off-canvas ul')) && (!checkElement.is(':visible'))) {
                $('#site-off-canvas ul ul:visible').slideUp();
                checkElement.slideDown();
            }
            if($(this).closest('li').find('ul').children().length == 0) {
                $(this).closest('li').removeClass('show');
                return true;
            } else {
                return false;   
            }   
        });
    }; 

    var priceFilter =  function() {
        $('#slider-range').each(function() { 
            $( "#slider-range" ).slider({
                range: true,
                min: 0,
                max: 1000,
                values: [ 200, 800 ],
                slide: function( event, ui ) {
                    $( "#amount" ).html( "$ " + ui.values[ 0 ] + " - $ " + ui.values[ 1 ] );
                }
            });
            $( "#amount" ).html( "$" + $( "#slider-range" ).slider( "values", 0 ) +
                " - $" + $( "#slider-range" ).slider( "values", 1 ) );
        });
    }; 

    var rangeYear =  function() {
        $('#slider-range-year').each(function() {
            $( "#slider-range-year" ).slider({
               range: "min",
               value: 2012,
               min: 1900,
               max: 2018,
               slide: function( event, ui ) {
                    $( "#amount" ).val(ui.value);
                    $( ".year-hover" ).html(ui.value);
                }
            });
            $( "#amount" ).val( $("#slider-range-year").slider( "value"));
            $( ".year-hover" ).html( $("#slider-range-year").slider( "value"));
            $('#slider-range-year span').append('<span class="year-hover">'+$("#slider-range-year").slider( "value")+'</span>');
            $("#amount").change( function(){
               $( "#slider-range-year" ).slider({
                 range: "min",
                 value: $("#amount").val(),
                 min: 1900,
                 max: 2018,
                 slide: function( event, ui ) {
                    $( "#amount" ).val(ui.value);
                    $( ".year-hover" ).html(ui.value);
                }
            });
               $( "#amount" ).val( $("#slider-range-year").slider( "value"));
               $( ".year-hover" ).html( $("#slider-range-year").slider( "value"));
           });
        });
    }; 

    var zoomPic  = function(){
        $('.zoom-pic').each(function(){
                $('.zoom-pic').fancybox();
        });
    };

    var tabs =  function() {
        $('.flat-tabs').each(function(){
            var 
            list ="",
            title = $(this).find('.item-title'),
            titleWrap = $(this).children('.tab-title') ;

            title.each(function() {
                list = list + "<li>" + $(this).html() + "</li>";
            }).appendTo(titleWrap);

            $(this).find('.tab-title li').filter(':first').addClass('active');
            $(this).find('.tab-content-wrap').children().hide().filter(':first').show();

            $(this).find('.tab-title li').on('click', function(e) {
                var
                idx = $(this).index(),
                content = $(this).closest('.flat-tabs').find('.tab-content-wrap').children().eq(idx);

                $(this).addClass('active').siblings().removeClass('active');
                content.fadeIn('slow').siblings().hide();

                e.preventDefault();
            });
        });
    };

    var flatSpacer = function() {
        $(window).on('load resize', function(){
            var mode = 'desktop';
            if(matchMedia('only screen and (max-width: 991px)').matches) 
                mode = 'mobile';
            if(matchMedia('only screen and (max-width: 767px)').matches)
                mode = 'smobile';
            $('.flat-spacer').each( function(){
                if( mode === 'desktop'){
                    $(this).attr('style','height:' + $(this).data('desktop') + 'px')
                }else if( mode == 'mobile') {
                    $(this).attr('style','height:' + $(this).data('mobile') + 'px')
                }else {
                    $(this).attr('style','height:' + $(this).data('smobile') + 'px')
                }
            });
        });
    };

    var flatOwl = function() {
        if ( $().owlCarousel ) {
            $('.flat-carousel').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                nav = $this.data("nav"),
                dots = $this.data("dots"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    dots:dots,
                    nav: nav,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    paginationNumbers: 2,
                    loop: true,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
                $('.owl-dot').each(function(){
                    $(this).children('span').html($(this).index()+1);
                    $(this).children('span').addClass(" btn-dots btn-defect");
                });
            });

            $('.flat-carousel-not-numb').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                dots = $this.data("dots"),
                nav = $this.data("nav"),
                loop = $this.data("loop"),
                gap = Number($this.data("gap"));


                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    dots:dots,
                    nav: nav,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    paginationNumbers: 2,
                    loop: loop,
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });

            $('.contact-carousel').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                dots = $this.data("dots"),
                nav = $this.data("nav"),
                loop = $this.data("loop"),
                gap = Number($this.data("gap"));


                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    dots:dots,
                    nav: nav,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    paginationNumbers: 2,
                    loop: loop,
                    responsive: {
                        0:{
                            items:item3
                        },
                        480:{
                            items:item3
                        },
                        767:{
                            items:item3
                        },
                        991:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var overviewSlide = function(){
        $('.flat-overviews-slider').each(function(){
            $('.content-part.part-tese').addClass('show');
            $('.gallery_container').gallery_slider({
                imgNum: 3,
                imgArr: [
                'images/home1/overview-1.png',
                'images/home1/overview-2.png',
                'images/home1/overview-3.png',
                ]
            });
        });
    };

    var flatIsotope = function() {         
        if ( $().isotope ) {           
            var $container = $('.isotope-project');
            $container.imagesLoaded(function(){
                if ($('.isotope-project').contents().is('.imgbox-masonry')) {
                    $container.isotope({
                        itemSelector: '.imgbox',
                        layoutMode: 'masonry',
                        transitionDuration: '1s',
                        masonry: {
                            columnWidth: '.imgbox.v2'
                        }
                    });
                } else {
                    $container.isotope({
                        itemSelector: '.imgbox',
                        transitionDuration: '1s',
                        layoutMode: 'fitRows'
                    });
                }
            });

            $('.flat-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.flat-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        };
    };

    var whyusToggle = function() {
        $('.flat-why-us').each(function () {
            var speed = {duration: 400};
            $('.toggle-content').hide();
            $('.accordion-toggle.active .toggle-title').siblings('.toggle-content').show();
            $('.accordion').find('.toggle-title').on('click', function() {
                $(this).closest('.accordion-toggle').toggleClass('active');
                $(this).next().slideToggle(speed);
                $(".toggle-content").not($(this).next()).slideUp(speed);
                if ($(this).closest('.accordion-toggle').is('.active')) {
                    $(this).closest('.accordion').find('.accordion-toggle.active').toggleClass('active')
                    $(this).closest('.accordion-toggle').toggleClass('active');
                };
            });
        });
    };

    var preLoader =function handlePreloader() {
        $(window).on("load", function () {
            if($('.preloader').length){
                $('.preloader').delay(400).fadeOut(600);
            }
        });
    };

    var goTop = function(){
        $(window).scroll(function() {
            var wh = window.innerWidth;
            if ($(this).scrollTop() > 100) {
                $('.gotop').addClass('goto');
            } else {
                $('.gotop').removeClass('goto');
            }
        });

        $(".gotop").on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false
        });
    };

    var flatCounter = function() {
        if ( $().countTo ) {
            $('.counter').on('on-appear', function() {
                $(this).find('.numb').each(function() {
                    var to = $(this).data('to'),
                    speed = $(this).data('speed');

                    $(this).countTo({
                        to: to,
                        speed: speed
                    });
                });
            });
        }
    };

    var inViewport =  function() {
        $('[data-inviewport="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            }, 100);
        });
    };

    var progressBar = function() {        
        $('.progres-bar').on('on-appear', function() {
            $(this).each(function() {
                $(this).css("overflow", "inherit");
                var percent = $(this).data('percent');                
                $(this).find('.progress-animate').animate({
                    "overflow":"inherit",
                    "width": percent + '%'
                }, $(this).find('.progress-animate').data('duration') );

                $(this).parent('.progress-item').find('.perc').addClass('show').animate({
                    "overflow":"inherit",
                    "width": percent + '%'
                }, $(this).find('.progress-animate').data('duration') );
            });
        });
    }; // Progress Bar

     var VideoPopup =  function() {

        $(".fancybox").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type")
            }); // fancybox
            return false   
        }); // on
    };

    var accordionToggle = function() {
        $('.flat-question').each(function () {
            var speed = {duration: 400};
            $('.flat-question .toggle-content').hide();
            $('.flat-question .accordion-toggle .toggle-title.active').siblings('.toggle-content').show();
            $('.flat-question .accordion').find('.toggle-title').on('click', function() {
                $(this).toggleClass('active');
                $(this).next().slideToggle(speed);
                $(".flat-question .toggle-content").not($(this).next()).slideUp(speed);
                if ($(this).is('.active')) {
                    $(this).closest('.accordion').find('.toggle-title.active').toggleClass('active')
                    $(this).toggleClass('active');
                };
            });
        });

        $('.flat-achevement').each(function () {
            var speed = {duration: 400};
            $('.toggle-content').hide();
            $('.accordion-toggle .toggle-title.active').siblings('.toggle-content').show();
            $('.accordion').find('.toggle-title').on('click', function() {
                $(this).toggleClass('active');
                $(this).next().slideToggle(speed);
                $(".toggle-content").not($(this).next()).slideUp(speed);
                if ($(this).is('.active')) {
                    $(this).closest('.accordion').find('.toggle-title.active').toggleClass('active')
                    $(this).toggleClass('active');
                };
            });
        });

        $('.flat-support').each(function () {
            var speed = {duration: 400};
            $('.flat-support .toggle-content').hide();
            $('.flat-support .accordion-toggle .toggle-title.active').siblings('.toggle-content').show();
            $('.flat-support .accordion').find('.toggle-title').on('click', function() {
                $(this).toggleClass('active');
                $(this).next().slideToggle(speed);
                $(".flat-support .toggle-content").not($(this).next()).slideUp(speed);
                if ($(this).is('.active')) {
                    $(this).closest('.accordion').find('.toggle-title.active').toggleClass('active')
                    $(this).toggleClass('active');
                };
            });
        });
    }; // Accordion Toggle

    var googleMap = function () {
        // gmap default
        if ($().gmap3) {
            var data = JSON.parse('[{"address":"Westwell Leacon, Ashford, Vương Quốc Anh","content":""}]');
            $(".flat-map")
            .gmap3({
                map: {
                    options: {
                        zoom: 10,
                        center: [51.1946026,0.8140602,14.5],
                        mapTypeId: 'AutoMov',
                        mapTypeControlOptions: {
                            mapTypeIds: ['AutoMov', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: true
                    },
                },
            });

        }
        // json loop
        $.each(data, function (key, val) {
            $('.flat-map').gmap3({
                marker: {
                    values: [{
                        address: val.address,
                        options: {
                            icon: "./images/map/icon.png"
                        }

                    }]
                },
                styledmaptype: {
                    id: "AutoMov",
                    options: {
                        name: "AutoMov"
                    },
                    styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": "-100"
                        }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "all",
                        "stylers": [
                        {
                            "visibility": "off"
                        }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 65
                        },
                        {
                            "visibility": "on"
                        }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": "50"
                        },
                        {
                            "visibility": "simplified"
                        }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": "-100"
                        }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                        {
                            "visibility": "simplified"
                        }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "all",
                        "stylers": [
                        {
                            "lightness": "30"
                        }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "all",
                        "stylers": [
                        {
                            "lightness": "40"
                        }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "visibility": "simplified"
                        }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "hue": "#ffff00"
                        },
                        {
                            "lightness": -25
                        },
                        {
                            "saturation": -97
                        }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                        {
                            "lightness": -25
                        },
                        {
                            "saturation": -100
                        }
                        ]
                    }
                    ]
                }
            });
        });
    };

    var flatEqualizeHeight = function() {
        $(window).on('load resize', function () {
            setTimeout(function () {
                $(document).imagesLoaded(function () {
                    if ( matchMedia( 'only screen and (max-width: 767px)' ).matches ) {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                        $('.equalize.sm-equalize-auto').children().css("height", "");
                        return false;
                    } else if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                        $('.equalize.sm-equalize-auto').children().css("height", "");
                        return false;
                    } else if ( matchMedia( 'only screen and (max-width: 1199px)' ).matches ) {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                        return false;
                    } else {
                        $('.equalize').equalize({equalize: 'outerHeight', reset: true});
                    }
                });
            }, 500);
        });
    };

    var flatIsotopeProduct = function() {
        $(".products").each(function () {
            if ( $().isotope ) {           
                var $container = $('.isotope-product');
                $container.imagesLoaded(function(){

                    $container.isotope({
                        itemSelector: '.product-item',
                        transitionDuration: '1s',
                        layoutMode: 'fitRows'
                    });
                });

                $('.flat-filter li').on('click',function() {                           
                    var selector = $(this).find("a").attr('data-filter');
                    $('.flat-filter li').removeClass('active');
                    $(this).addClass('active');
                    $container.isotope({ filter: selector });
                    return false;
                });
            };
        });         
    };

    var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header .container-header ').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header .container-header ').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.mobile-button').on('click', function() {         
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    };


    var changeImg = function () {
        $('.img-double').each(function () {
            $('.img-double .img').on("click",function(){
                $('.img-double .img').removeClass("active");
                $(this).addClass("active");
            });
        });
    }

    var headerFixed = function() {
        var nav = $('#header');
        $(window).on('load', function(){
            var header = $('#header');           
            var offsetTop = $('#header').offset().top;
            var headerHeight = $('#header').height();             
            var buffer  = $('<div>', { height: headerHeight }).insertAfter(header);   
                buffer.hide();                 

            $(window).on('load scroll', function(){
                if ( $(window).scrollTop() > offsetTop  ) {
                    $('#header').addClass('fixed-header');
                    buffer.show();
                } else {
                    $('#header').removeClass('fixed-header');
                    buffer.hide();
                }
            });
        });
    };

    var flatRetinaLogo = function() {
        var retina = window.devicePixelRatio > 1 ? true : false;

        var $logo = $('#logo img');
        var $logo_retina = $logo.data('retina');

        var $logo_ft = $('#logo-ft img');
        var $logo_retina_ft = $logo_ft.data('retina');
        
        if ( retina && $logo_retina ) {
            $logo.attr({
                src: $logo.data('retina'),
                width: $logo.data('width'),
                height: $logo.data('height')
            });
        } 

        if ( retina && $logo_retina_ft ) {
            $logo_ft.attr({
                src: $logo_ft.data('retina'),
                width: $logo_ft.data('width'),
                height: $logo_ft.data('height')
            });
        }
    };

    var swClick = function () {
        function activeLayout () {
            $(".switcher-container" ).on( "click", "a.sw-light", function() {
                $(this).toggleClass( "active" );
                $('body').addClass('home-boxed');  
                $('body').css({'background': '#f6f6f6' });                
                $('.sw-pattern.pattern').css ({ "top": "100%", "opacity": 1, "z-index": "10"});
            }).on( "click", "a.sw-dark", function() {
                $('.sw-pattern.pattern').css ({ "top": "98%", "opacity": 0, "z-index": "-1"});
                $(this).removeClass('active').addClass('active');
                $('body').removeClass('home-boxed');
                $('body').css({'background': '#fff' });
                return false;
            })       
        }

        function activePattern () {
            $('.sw-pattern').on('click', function () {
                $('.sw-pattern.pattern a').removeClass('current');
                $(this).addClass('current');
                $('body').css({'background': 'url("' + $(this).data('image') + '")', 'background-size' : '30px 30px', 'background-repeat': 'repeat' });
                return false;
            })
        }
        activeLayout(); 
        activePattern();
    } // Swicher Click

    var ajaxContactForm = function() {  
        $('#contact-form').each(function() {
            $(this).validate({
                rules: {
                    phone: {
                        required: true,
                        number: true
                    }
                },
                submitHandler: function( form ) {
                    var $form = $(form),
                    str = $form.serialize();
                    $.ajax({
                        type: "POST",
                        url:  $form.attr('action'),
                        data:  str,
                        beforeSend: function () {},
                        success: function( msg ) {
                            var result, cls;                            
                            if ( msg === 'Success' ) {                                
                                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text' : result
                                }).append(
                                $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                                );
                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                        }
                    });
                }
            });
        }); // each contactform
    };

    var ajaxSubscribe = function () {
        $('#subscribe-form').each(function () {
            $(this).validate({
                submitHandler: function (form) {
                    var $form = $(form);
                    $form.serialize();
                    $.ajax({
                        type: "POST",
                        url: $form.attr('action'),
                        dataType: 'json',
                        data: {
                            subscribeEmail: $('#subscribe-email').val()
                        },
                        beforeSend: function () { },
                        success: function (responseData, textStatus, jqXHR) {

                            var subscribeEmail = $('#subscribe-email'),
                                subscribeButton = $('#subscribe-button'),
                                subscribeMsg = $('#subscribe-msg'),
                                subscribeContent= $("#subscribe-content"),
                                success_message = '<div class="notification_ok">Thank you for joining our mailing list! Please check your email for a confirmation link.</div>',
                                failure_message = '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
                                noticeError = '<div class="notification_error">{msg}</div>',
                                noticeInfo = '<div class="notification_error">{msg}</div>';
                            var messageDiv = subscribeMsg.html('').hide();
                            if (responseData.status) {
                                subscribeContent.fadeOut(500, function () {
                                    messageDiv.html(success_message).fadeIn(500);
                                });
                            } else {
                                switch (responseData.msg) {
                                    case "errormail":
                                    messageDiv.html(noticeError.replace('{msg}', 'Error! <strong>Error send email.</strong>'));
                                    break;
                                    case "duplicate":
                                    messageDiv.html(noticeError.replace('{msg}', 'Error! <strong>Email is duplicate.</strong>'));
                                    break;
                                    case "filewrite":
                                    messageDiv.html(noticeInfo.replace('{msg}', 'Error! <strong>Mail list file is open.</strong>'));
                                    break;
                                    case "undefined":
                                    messageDiv.html(noticeInfo.replace('{msg}', 'Error! <strong>undefined error.</strong>'));
                                    break;
                                    case "api-error":
                                    subscribeContent.fadeOut(500, function () {
                                        messageDiv.html(failure_message);
                                    });
                                }
                                messageDiv.fadeIn(500);
                            }
                        },
                        complete: function (xhr, status, error_thrown) {
                        }
                    });
                }
            });
         }); 
    };

 

           

     
    $(function() {
        themesflatSearch();
        googleMap();
        menuCanvas();
        toggleExtramenu();
        toggleMenu();
        priceFilter();
        rangeYear();
        zoomPic();
        tabs();
        flatSpacer();
        flatOwl();
        overviewSlide();
        flatIsotope();
        whyusToggle();     
        goTop();
        flatCounter();
        progressBar();
        VideoPopup();
        accordionToggle();
        flatEqualizeHeight();
        flatIsotopeProduct();
        responsiveMenu();
        parallax();
        changeImg();
        headerFixed();
        flatRetinaLogo();
        ajaxContactForm();
        ajaxSubscribe();
        $( window ).load(function() {
            inViewport();
        });
        swClick();
        preLoader();
    });
})(jQuery);