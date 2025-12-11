(function ($) {
    "use strict";

    $(document).ready(function() {
        $('#laundryka-user-table').DataTable();
    } );

    /*----------------------------
       		Preloader Active
       	------------------------------*/

    $(window).on('load', function () {
        $(".preloader").fadeOut(500);
    });


    /*----------------------------
       		Lbtn Active
       	------------------------------*/
    $('.lbtn')
        .on('mouseenter', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({
                top: relY,
                left: relX
            })
        })
        .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({
                top: relY,
                left: relX
            })
        });

    /*----------------------------
    		Video popup active
    	------------------------------*/

    $(".popup-video").magnificPopup({
        type: "iframe"
    });

    /*----------------------------
    		Team popup active
    	------------------------------*/

    $(document).ready(function() {
        $(".popup-team").magnificPopup({type: "image"});
      });

    /*----------------------------
        		Laundryka Slider2 Active
        	------------------------------*/

    $(".laundryka-main-slider2-all").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*----------------------------
        		testimonial slider Active
        	------------------------------*/

    $(".testimonial-wraper").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*----------------------------
    		Counter Active
    	------------------------------*/

    $('.counter').counterUp({
        delay: 2,
        time: 1000
    });

    /*----------------------------
       		Team Slider Active
       	------------------------------*/
    $(".team-all-member-box").owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left '></i>", "<i class='fa fa-angle-right '></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            },
            12000: {
                items: 4
            }
        }
    });
    /*----------------------------
       		client Slider Active
       	------------------------------*/
    $(".laundryka-client-slider-wraper").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /*----------------------------
       		Blog Slider Active
       	------------------------------*/
    $(".blog-img-slider").owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left '></i>", "<i class='fa fa-angle-right '></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*----------------------------
    		Blog Video Popup Active
    	------------------------------*/

    $(".blog-popup-video").magnificPopup({
        type: "iframe"
    });
    /*----------------------------
       		tooltip Active
           ------------------------------*/

    $('[data-toggle="tooltip"]').tooltip()

    /*----------------------------
    		Product Popup Active
    	------------------------------*/

    $(".product-popup").magnificPopup({
        type: "image"
    });

    /*----------------------------
    		single product slider active
    	------------------------------*/
    $('.product-big-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-big-img-thumb'
    });
    $('.product-big-img-thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-big-img',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    /*----------------------------
       		main menu Active
       	------------------------------*/

    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199"
    });

    /*----------------------------
       		search form Active
       	------------------------------*/

    $('#close-btn').on('click', function () {
        $('#search-overlay').fadeOut();
        $('#search-btn').show();
    });
    $('#search-btn').on('click', function () {
        $('#search-overlay').fadeIn();
    });

    /*----------------------------
         		scrolltop active
         	------------------------------*/

    $('body').materialScrollTop();

    /*----------------------------
        		WOW active
        	------------------------------*/

    AOS.init();

})(jQuery);
