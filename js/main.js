$(document).ready(function() {
    /*========== Toggle ==========*/
    $(document).on('click', '.toggle', function() {
        $(".toggle").toggleClass("active");
        $("html").toggleClass("flow");
        $("[nav]").toggleClass("active");
    });
    // $(document).on('click', '[nav] > ul > li > a', function() {
    //     $(".toggle").removeClass("active");
    //     $("html").removeClass("flow");
    //     $("[nav]").removeClass("active");
    // });
    $(".banner-carousel").owlCarousel({
        autoplay: true,
        nav: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        // navText: [ 'prev', 'next' ],
        dots: true,
        loop: true,
        autoWidth: false,
        autoHeight: true,
        smartSpeed: 1000,
        autoplayTimeout: 10000,
        margin: 20,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoHeight: true,
                dots: true,
                nav: false,
            },
            600: {
                items: 1,
            },
            991: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });
    // =================owl===========

    $(document).ready(function() {
        $('.testi-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace) { return; }
            var carousel = e.relatedTarget;
            $('.owl-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
        }).owlCarousel({
            autoplay: true,
            nav: true,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            loop: true,
            center: true,
            smartSpeed: 1000,
            autoplayTimeout: 8000,
            autoplayHoverPause: true,
            margin: 20,
            items: 1,
            responsive: {
                0: {
                    nav: false
                },
                767: {
                    // nav: true
                }
            }
        });
    });
    // money=============
    $(".money-carousel").owlCarousel({
        autoplay: true,
        nav: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        // navText: [ 'prev', 'next' ],
        dots: true,
        loop: true,
        autoWidth: false,
        autoHeight: true,
        smartSpeed: 1000,
        autoplayTimeout: 10000,
        margin: 20,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoHeight: true,
                dots: true,
                nav: false,
            },
            600: {
                items: 1,
            },
            991: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    });
    // ==============datepicker============
    $('.datepicker').datepicker({
        dateFormat: 'MM dd, yy',
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:2060'
    });

});

// ===============fieldset============
$(document).on("click", ".nextBtn", function() {
    var curntField = $(this).parents('fieldset');
    var nextField = curntField.next('fieldset');
    curntField.hide();
    nextField.show();
});

$(document).on("click", ".backBtn", function() {
    var curntField = $(this).parents('fieldset');
    var prevField = curntField.prev('fieldset');
    curntField.hide();
    prevField.show();
});
// file upload
$(document).ready(function() {
    // upload file
    var imgFile;
    $(document).on("click", ".uploadImg", function() {
        $(this).parents("form").find(".uploadFile").trigger("click");
    });
});
// active
$(document).on('click', '.lg_inner_form_quote .cmn_quote_bill', function(e) {
    e.preventDefault();
    let current = $(this);
    let input = current.find("input");
    $(".lg_inner_form_quote .cmn_quote_bill input").attr("checked", false);
    $(".lg_inner_form_quote .cmn_quote_bill").removeClass("active");
    input.attr("checked", true);
    current.addClass("active");
});