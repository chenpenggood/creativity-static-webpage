$(function () {

    //注意事项同之前一样
    $(window).on('scroll', function () {
        if ($(document).scrollTop() > $('.experience').offset().top) {
            $('#mxbicons').stop().animate({'padding-top': '100px'}, 300)
        } else {
            $('#mxbicons').stop().animate({'padding-top': '140px'}, 300)
        }
        $('.yb_conct').stop().animate({
            top:$(document).scrollTop()+200,
        },500)
    })
    $('.yb_conct').mouseenter(function () {
        $(".yb_conct .m_ercode").stop().animate({'height': '190px'}, 300);
        $(this).stop().animate({
            right: '5px',
        }, 300)
    }).mouseleave(function () {
        $(this).stop().animate({
            right: '-127px',
        }, 300)
        $(".yb_conct .m_ercode").stop().animate({'height': '53px'}, 300);
    })
    $('.yb_conct .m_top').click(function () {
        $("html,body").animate({
            'scrollTop': '0px',
        }, 800)
    })
});