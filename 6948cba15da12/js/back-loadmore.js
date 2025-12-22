(function ($) {
    "use strict";

    // Load More Post Script
    $(document).ready(function ($) {
        let posts_per_page = $('.easyel-case-port-filter').attr('data-perload');
        let pageNumber = $('.easyel-case-port-filter').attr('data-paged');
        
        $(document).on("click", ".easyel-filter--item", function () {
            let category = $(this).data('category');
            let back_this = $('.easyel-load-more');            
            let layout = back_this.attr('data-layout');
            let portfolio_column = back_this.attr('data-column'); 
            let back_thumbnail = back_this.attr('data-thumbnail'); 
            let posts_sort_orderby = back_this.attr('data-orderby'); 
            let posts_sort = back_this.attr('data-sort'); 
            $('.easy-port-posts').html('');
            back_this.addClass("back-active");
            back_this.removeClass("back-disabled");
            back__load_more_posts(back_this, pageNumber, category, layout, portfolio_column, back_thumbnail, posts_sort_orderby, posts_sort);
        });

        $('.easyel-case--filter li').click(function () {
            if ($(this).hasClass('easyel-crn')) {
                $(this).removeClass('easyel-crn');
            } else {
                $('.easyel-case--filter li.easyel-crn').removeClass('easyel-crn');
                $(this).addClass('easyel-crn');    
            }
        });

        function back__load_more_posts(back_this, pageNumber, category, layout, portfolio_column, back_thumbnail, posts_sort_orderby, posts_sort) {
            let page_count = 0;
            
            let str =
                "&pageNumber=" +
                pageNumber +
                "&posts_per_page=" +
                posts_per_page + 
                "&action=back_load_more_post_ajax" +
                "&category=" +
                category + 
                "&layout=" + 
                layout +
                "&portfolio_column=" + 
                portfolio_column + "&back_thumbnail=" + back_thumbnail + "&posts_sort_orderby=" + posts_sort_orderby + "&posts_sort=" + posts_sort;
            
            if (!back_this.hasClass("back-disabled")) {
                jQuery.ajax({
                    type: "POST",
                    dataType: "html",
                    url: ajax_posts.ajaxurl,
                    data: str,
                    success: function (response) {
                        if (response) {
                            back_this.removeClass("back-active");
                            var json_html = JSON.parse(response);
                            if (json_html.html.length) {
                                page_count = parseInt(pageNumber) + parseInt(1);
                                back_this.attr("data-page", page_count);
                                back_this.attr("data-cate", category);
                                back_this
                                    .parents(".easy-post-wrap")
                                    .find(".easy-port-posts")
                                    .append(json_html.html);
                            } else {
                                back_this.addClass("back-disabled");
                            }
                        }
                    },
                });
            }
            return false;
        }

        $(document).on("click", ".easyel-load-more", function () {
            let back_this = $(this);
            let pageNumber = back_this.attr("data-page");
            let category = back_this.attr("data-cate");
            let layout = back_this.attr('data-layout');
            let back_thumbnail = back_this.attr('data-thumbnail'); 
            let portfolio_column = back_this.attr('data-column'); 
            let posts_sort_orderby = back_this.attr('data-orderby'); 
            let posts_sort = back_this.attr('data-sort');
            back_this.addClass("back-active");
            back__load_more_posts(back_this, pageNumber, category, layout, portfolio_column, back_thumbnail, posts_sort_orderby, posts_sort);
            back_this.insertAfter(".easy-port-posts");
        });
    });

    // image hover effetc 
    function initEasyHoverImage($scope) {
        const items = $scope.find(".easy-hover-image");
        items.each(function () {
            const imgUrl = $(this).attr("data-img");
            if (imgUrl && !$(this).find(".hover-img").length) {
                const hoverImg = $("<img>", {
                    class: "hover-img",
                    src: imgUrl
                });
                $(this).append(hoverImg);
            }
        });
    }
    $(document).ready(function () {
        initEasyHoverImage($(document));
    });    
    $(window).on("elementor/frontend/init", function () {
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/easyel-portfolio-filter.default", 
            function ($scope) {
                initEasyHoverImage($scope);
            }
        );
    });

})(jQuery);
