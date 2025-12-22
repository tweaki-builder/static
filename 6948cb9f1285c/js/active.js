"use strict";

try {
    window.addEventListener("DOMContentLoaded", function () {

        // 1.1.0 Sticky Header

        const navarToggler = document.querySelector('.navbar-toggler');
        const header = document.querySelector('.header-area');

        if (navarToggler && header) {
            navarToggler.addEventListener('click', () => {
                if (header) {
                    header.classList.toggle('mobile-menu-open');
                }
            });
        }

    if (header) {
        function stickyNavigation() {
            if (window.pageYOffset > 10) {
                header.classList.add('sticky-on');
            } else {
                header.classList.remove('sticky-on');
            }
        }

        window.addEventListener('load', stickyNavigation);
        window.addEventListener('scroll', stickyNavigation);
    }

    // 1.2.0 Mobile Dropdown Menu

    function mobileDropdownMenu() {
        const sbdropdown = document.querySelectorAll('.fandi-dd');
        if (sbdropdown.length > 0) {
            const navUrl = document.querySelectorAll('.navbar-nav li ul');
            navUrl.forEach(url => {
                url.insertAdjacentHTML('beforebegin', '<div class="dropdown-toggler"><i class="bi bi-caret-down-fill"></i></div>');
            });

            const ddtrogglers = document.querySelectorAll('.dropdown-toggler');
            ddtrogglers.forEach(ddtoggler => {
                ddtoggler.addEventListener('click', () => {
                    const ddNext = ddtoggler.nextElementSibling;
                    slideToggle(ddNext, 250);
                });
            });
        }
    }
    window.addEventListener('load', mobileDropdownMenu);

    // 1.3.0 Anchor Prevent Default

    const anchors = document.querySelectorAll('a[href="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', e => e.preventDefault());
    });

    // 1.4.0 Search Form

    try {
        const searchButton = document.getElementById('searchButton');
        const searchClose = document.getElementById('searchClose');
        const searchFormPopup = document.querySelector('.search-form-popup');
        const searchOverlay = document.getElementById('searchOverlay');

        if (searchButton && searchClose && searchFormPopup && searchOverlay) {
            searchButton.addEventListener('click', () => {
                if (searchFormPopup && searchOverlay) {
                    searchFormPopup.classList.add('open');
                    searchOverlay.classList.add('open');
                }
            });
            searchClose.addEventListener('click', () => {
                if (searchFormPopup && searchOverlay) {
                    searchFormPopup.classList.remove('open');
                    searchOverlay.classList.remove('open');
                }
            });
        }
    } catch (error) {
        console.error('Error initializing search form:', error);
    }

    // 2.1.0 Project Swiper Slide

    const projectSwiper = document.getElementById('projectSwiper');

    if (projectSwiper) {
        new Swiper(projectSwiper, {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 24,
            navigation: {
                nextEl: '.project-button-next',
                prevEl: '.project-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                }
            },
        });
    }

    // 2.2.0 Project Swiper Slide Two

    const projectSwiperTwo = document.getElementById('projectSwiperTwo');

    if (projectSwiperTwo) {
        new Swiper(projectSwiperTwo, {
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 24,
            grabCursor: true,
            centeredSlides: true,
            pagination: {
                el: ".project-pagination",
                clickable: true,
            },
        });
    }

    // 2.3.0 Testimonial Swiper Slide

    const testimonialSwiper = document.querySelector('.testimonial-swiper-one');

    if (testimonialSwiper) {
        new Swiper(testimonialSwiper, {
            loop: true,
            spaceBetween: 0,
            slidesPerView: 1,
            navigation: {
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    }

    // 2.4.0 Testimonial Swiper Slide Two

    const testimonialSwiperTwo = document.getElementById('testimonialSwiperTwo');

    if (testimonialSwiperTwo) {
        new Swiper(testimonialSwiperTwo, {
            loop: true,
            spaceBetween: 24,
            slidesPerView: 2,
            navigation: {
                nextEl: '.testimonial-two-button-next',
                prevEl: '.testimonial-two-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
            },
        });
    }

    // 2.5.0 Testimonial Swiper Slide Three

    const testimonialSwiperThree = document.getElementById('testimonialSwiperThree');

    if (testimonialSwiperThree) {
        new Swiper(testimonialSwiperThree, {
            loop: true,
            spaceBetween: 0,
            slidesPerView: 1,
            navigation: {
                nextEl: '.testimonial-three-button-next',
                prevEl: '.testimonial-three-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    }

    // 2.6.0 Testimonial Swiper Slide Four

    const testimonialSwiperFour = document.getElementById('testimonialSwiperFour');

    if (testimonialSwiperFour) {
        new Swiper(testimonialSwiperFour, {
            loop: true,
            spaceBetween: 24,
            slidesPerView: 2,
            navigation: {
                nextEl: '.testimonial-four-button-next',
                prevEl: '.testimonial-four-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
            },
        });
    }

    // 2.7.0 Hero Swiper Slide

    const heroSwiper = document.getElementById('heroSwiper');

    if (heroSwiper) {
        new Swiper(heroSwiper, {
            loop: true,
            spaceBetween: 0,
            slidesPerView: 1,
            navigation: {
                nextEl: '.hero-button-next',
                prevEl: '.hero-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            speed: 800,
            on: {
                init: function (swiper) {
                    const firstSlide = swiper.slides[swiper.activeIndex];
                    firstSlide.classList.add('active-slide');
                    animateSlide(firstSlide);
                },
                slideChangeTransitionStart: function (swiper) {
                    swiper.slides.forEach(slide => {
                        const heroContent = slide.querySelector('.hero-slide-content');
                        if (heroContent) {
                            heroContent.classList.remove('hero-animate');
                            heroContent.querySelectorAll('[data-fade-in-up]').forEach(el => {
                                el.style.opacity = '0';
                                el.style.transform = 'translateY(40px)';
                            });
                        }
                    });
                },
                slideChangeTransitionEnd: function (swiper) {
                    const activeSlide = swiper.slides[swiper.activeIndex];
                    activeSlide.classList.add('active-slide');
                    animateSlide(activeSlide);
                }
            }
        });

        function animateSlide(slide) {
            const heroContent = slide.querySelector('.hero-slide-content');
            if (!heroContent) return;

            heroContent.classList.add('hero-animate');
            heroContent.querySelectorAll('[data-fade-in-up]').forEach(el => {
                const delay = parseInt(el.getAttribute('data-animation-delay')) || 0;

                el.style.opacity = '0';
                el.style.transform = 'translateY(40px)';

                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                }, delay);
            });
        }
    }

    // 2.8.0 Features Swiper Slide

    const featuresSwiper = document.getElementById('featuresSwiper');

    if (featuresSwiper) {
        new Swiper(featuresSwiper, {
            loop: true,
            spaceBetween: 24,
            slidesPerView: 4,
            pagination: {
                el: '.features-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        });
    }

    // 2.9.0 Partner Swiper Slide

    const partnerSwiper = document.getElementById('partnerSwiper');

    if (partnerSwiper) {
        new Swiper(partnerSwiper, {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 5,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
                1400: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                },
            },
        });
    }

    // 2.10.0 Partner Swiper Slide Two

    const partnerSwiperTwo = document.getElementById('partnerSwiperTwo');

    if (partnerSwiperTwo) {
        new Swiper(partnerSwiperTwo, {
            loop: true,
            spaceBetween: 24,
            slidesPerView: 6,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 5,
                },
                992: {
                    slidesPerView: 6,
                },
            },
        });
    }

    // 2.11.0 Price Plan Switch

    try {
        const toggleSwitch = document.getElementById("flexSwitchCheckDefault");

        if (toggleSwitch) {
            function updatePrices() {
                try {
                    const monthlyPrices = document.querySelectorAll(".monthly-price");
                    const yearlyPrices = document.querySelectorAll(".yearly-price");

                    if (monthlyPrices && yearlyPrices) {
                        if (toggleSwitch.checked) {
                            monthlyPrices.forEach(p => {
                                if (p) p.style.display = "none";
                            });
                            yearlyPrices.forEach(p => {
                                if (p) p.style.display = "block";
                            });
                        } else {
                            monthlyPrices.forEach(p => {
                                if (p) p.style.display = "block";
                            });
                            yearlyPrices.forEach(p => {
                                if (p) p.style.display = "none";
                            });
                        }
                    }
                } catch (error) {
                    console.error('Error updating prices:', error);
                }
            }

            updatePrices();
            toggleSwitch.addEventListener("change", updatePrices);
        }
    } catch (error) {
        console.error('Error initializing price switch:', error);
    }

    // 2.12.0 Progress Bar

    const progressBars = document.querySelectorAll('.team-progress-bar');

    if (progressBars.length > 0) {
        progressBars.forEach(function (progressBar) {
            const value = parseInt(progressBar.getAttribute('data-value'), 10);
            progressBar.style.width = value + '%';
            const spanElements = progressBar.closest('.progress-item').querySelectorAll('.progress-info span');
            if (spanElements.length > 1) {
                const percentSpan = spanElements[1];
                percentSpan.textContent = value + '%';
                percentSpan.style.marginRight = (100 - value) + '%';
            }
        });
    }

    // 2.13.0 Counter Up

    const counterElements = document.querySelectorAll('.counter');

    if (counterElements.length > 0) {
        const counterUp = window.counterUp;

        const callback = (entries) => {
            entries.forEach(entry => {
                const counterElement = entry.target;
                if (entry.isIntersecting && !counterElement.classList.contains('is-visible')) {
                    counterUp(counterElement, {
                        duration: 2000,
                        delay: 20
                    });
                    counterElement.classList.add('is-visible');
                }
            });
        };

        const IO = new IntersectionObserver(callback, {
            threshold: 1
        });

        counterElements.forEach(element => IO.observe(element));
    }

    // 2.14.0 Scroll to Top

    try {
        const scrollButton = document.getElementById('scrollTopButton');
        const topDistance = 600;

        if (scrollButton) {
            window.addEventListener('scroll', () => {
                try {
                    if (!scrollButton) return;
                    if (document.body.scrollTop > topDistance || document.documentElement.scrollTop > topDistance) {
                        scrollButton.classList.add('scrolltop-show');
                        scrollButton.classList.remove('scrolltop-hide');
                    } else {
                        scrollButton.classList.add('scrolltop-hide');
                        scrollButton.classList.remove('scrolltop-show');
                    }
                } catch (error) {
                    console.error('Error updating scroll button:', error);
                }
            });

        scrollButton.addEventListener('click', () => {
            try {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            } catch (error) {
                console.error('Error scrolling to top:', error);
            }
        });

        function updateScrollProgress() {
            try {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
                if (scrollButton) {
                    scrollButton.style.setProperty('--scroll-progress', `${scrollPercent}%`);
                }
            } catch (error) {
                console.error('Error updating scroll progress:', error);
            }
        }

        window.addEventListener('scroll', updateScrollProgress);
        }
    } catch (error) {
        console.error('Error initializing scroll-to-top button:', error);
    }

    // 2.15.0 Video Popup

    try {
        const videoPopup = document.getElementById("videoPopup");
        const videoFrame = document.getElementById("videoFrame");
        const closeBtn = document.getElementById("videoCloseButton");
        const videoBtns = document.querySelectorAll(".video-btn");

        if (videoPopup && videoFrame && closeBtn && videoBtns.length > 0) {
            videoBtns.forEach(button => {
                if (button) {
                    button.addEventListener("click", function () {
                        try {
                            let videoUrl = this.getAttribute("data-video");

                            if (videoUrl && videoFrame && videoPopup) {
                                let separator = videoUrl.includes("?") ? "&" : "?";

                                if (videoUrl.includes("youtu.be")) {
                                    let videoId = videoUrl.split("/").pop();
                                    videoUrl = `https://www.youtube.com/embed/${videoId}`;
                                }

                                if (videoUrl.includes("youtube.com/watch")) {
                                    let videoId = new URL(videoUrl).searchParams.get("v");
                                    videoUrl = `https://www.youtube.com/embed/${videoId}`;
                                }

                                if (videoUrl.includes("youtube.com") || videoUrl.includes("vimeo.com")) {
                                    videoUrl += `${separator}autoplay=1`;
                                }

                                videoFrame.src = videoUrl;
                                videoFrame.setAttribute("allow", "autoplay; encrypted-media");
                                videoPopup.style.display = "flex";
                            }
                        } catch (error) {
                            console.error('Error handling video button click:', error);
                        }
                    });
                }
            });

            closeBtn.addEventListener("click", () => {
                try {
                    if (videoPopup && videoFrame) {
                        videoPopup.style.display = "none";
                        videoFrame.src = "";
                    }
                } catch (error) {
                    console.error('Error closing video popup:', error);
                }
            });

            window.addEventListener("click", (event) => {
                try {
                    if (event.target === videoPopup && videoPopup && videoFrame) {
                        videoPopup.style.display = "none";
                        videoFrame.src = "";
                    }
                } catch (error) {
                    console.error('Error handling video popup click:', error);
                }
            });
        }
    } catch (error) {
        console.error('Error initializing video popup:', error);
    }

    // 2.16.0 Isotope

    const grids = document.querySelectorAll('.fandi-filter');

    if (grids.length > 0) {
        grids.forEach(grid => {
            imagesLoaded(grid, () => {
                const iso = new Isotope(grid, {
                    itemSelector: '.filter-item',
                    percentPosition: true,
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: '.filter-item'
                    }
                });

                const filtersElem = grid.closest('.fandi-container').querySelector('.fandi-filter-nav');

                if (filtersElem) {
                    filtersElem.addEventListener('click', (event) => {
                        if (!event.target.matches('button')) return;
                        const filterValue = event.target.getAttribute('data-filter');
                        iso.arrange({
                            filter: filterValue
                        });
                    });

                    const radioButtonGroup = (buttonGroup) => {
                        buttonGroup.addEventListener('click', (event) => {
                            if (!event.target.matches('button')) return;
                            buttonGroup.querySelector('.active').classList.remove('active');
                            event.target.classList.add('active');
                        });
                    };

                    radioButtonGroup(filtersElem);
                }
            });
        });
    }

    // 2.17.0 Copyright Year

    try {
        const year = document.getElementById("year");
        if (year) {
            const currentYear = new Date().getFullYear();
            if (year) year.textContent = currentYear;
        }
    } catch (error) {
        console.error('Error setting copyright year:', error);
    }

    // 2.18.0 Jarallax

    try {
        const jarallaxElements = document.querySelectorAll('.jarallax');
        if (jarallaxElements && jarallaxElements.length > 0) {
            jarallax(jarallaxElements, {
                speed: 0.6,
            });
        }
    } catch (error) {
        console.error('Error initializing jarallax:', error);
    }

    // 2.19.0 WOW

    try {
        const wowElements = document.querySelectorAll('.wow');
        if (wowElements && wowElements.length > 0) {
            new WOW().init();
        }
    } catch (error) {
        console.error('Error initializing WOW:', error);
    }

    // 2.20.0 Preloader

    try {
        const preloader = document.getElementById('preloader');

        if (preloader) {
            window.addEventListener('load', function () {
                try {
                    let fadeOut = setInterval(function () {
                        try {
                            if (preloader && preloader.style) {
                                if (!preloader.style.opacity) {
                                    preloader.style.opacity = 1;
                                }
                                if (parseFloat(preloader.style.opacity) > 0) {
                                    preloader.style.opacity = parseFloat(preloader.style.opacity) - 0.1;
                                } else {
                                    clearInterval(fadeOut);
                                    if (preloader && preloader.parentNode) {
                                        preloader.remove();
                                    }
                                }
                            }
                        } catch (error) {
                            console.error('Error fading out preloader:', error);
                            clearInterval(fadeOut);
                        }
                    }, 10);
                } catch (error) {
                    console.error('Error initializing preloader fade:', error);
                }
            });
        }
    } catch (error) {
        console.error('Error initializing preloader:', error);
    }
    });
} catch (error) {
    console.error('Critical error in active.js:', error);
}