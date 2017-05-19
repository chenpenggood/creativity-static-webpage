$(function(){

    //注意事项同之前一样
$(window).on('scroll',function(){
    if($(document).scrollTop()>=$('.choice').offset().top-$('.choice').height()/2){
        $('.choice li').stop().animate({
            width:215,
            height:180
        },1000);
    }
    if($(document).scrollTop()<$('.choice').offset().top-$('.choice').height()/2){
        $('.choice li').stop().animate({
            width:900,
            height:55
        },1000);
    }
})


});