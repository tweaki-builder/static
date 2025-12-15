(function ($) {
    'use strict';

    $(window).on('load', function () {
        if ($('.char-animation').length > 0) {

            let charElements = gsap.utils.toArray(".char-animation");

            charElements.forEach(splitTextLine => {
                // Make sure it's visible before animating
                gsap.set(splitTextLine, { visibility: "visible" });

                // Split into characters
                const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });

                // GSAP timeline with ScrollTrigger
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: splitTextLine,
                        start: 'top 95%',
                        end: 'bottom 60%',
                        scrub: false,
                        markers: false,
                        toggleActions: 'play none none none'
                    }
                });

                gsap.set(splitTextLine, { perspective: 300 });

                // Animate chars from RIGHT → LEFT
                tl.from(itemSplitted.chars, {
                    duration: 1,
                    delay: 0.5,
                    x: 30,
                    autoAlpha: 0,
                    stagger: 0.05,
                    ease: "power3.out",
                });
            });

            ScrollTrigger.refresh();
        }
    });
})(jQuery);


