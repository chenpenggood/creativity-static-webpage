
$(function () {
    $('.bottom').children('.bottom-left').mouseenter(function () {
        $('.tm1').css('top', '0').stop().slideDown(100)
    }).mouseleave(function () {
        $('.tm1').css('top', '100').stop().slideUp(100)
    });
    $('.bottom').children('.bottom-center').mouseenter(function () {
        $('.tm2').css('top', '0').stop().slideDown(100)
    }).mouseleave(function () {
        $('.tm2').css('top', '100').stop().slideUp(100)
    });
    $('.bottom').children('.bottom-right').mouseenter(function () {
        $('.tm3').css('top', '0').stop().slideDown(100)
    }).mouseleave(function () {
        $('.tm3').css('top', '100').stop().slideUp(100)
    });
})

$(function () {
    window.addEventListener('scroll',showCaseScroll);
    var showCaseFlag=true;
    function showCaseScroll(){
        if($(document).scrollTop()>1450){
            if(showCaseFlag){
                showCaseFlag=false;
                $('.top').stop().animate({
                    left:0+"px"
                })
                $('.bottom').stop(true).animate({
                    bottom:520+"px"
                },1000)
            }
        }else{
            if(!showCaseFlag){
                showCaseFlag=true;
                $('.top').stop().animate({
                    left:-347+"px"
                })
                $('.bottom').stop(false).animate({
                    bottom:0+"px"
                },1000)
            }
        }
    }
})

