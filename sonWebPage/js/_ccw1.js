$(function(){

    //注意事项同之前一样
    //微信部分JS开始
    var gaodu=$(".provide").offset().top-500;
    var gaodu1=$(".ccw_ul").offset().top-500;
    window.addEventListener("scroll",wechat_provide) ;


    function wechat_provide(){
        if ($(document).scrollTop() > gaodu) {
            $(".ccw_title").stop().animate({padding:"0px"},300);
        }else{
            $(".ccw_title").stop().animate({padding:"30px"},300);
        }
        if ($(document).scrollTop() > gaodu) {
            $(".ccw_vmhudong").stop().animate({padding:"30px 0px 0px"},350);
        }else{
            $(".ccw_vmhudong").stop().animate({padding:"20px"},350);
        }
        if ($(document).scrollTop() > gaodu1) {
            $(".ccw_ul").children("li").stop().animate({padding:"0px"},450);
        }else{
            $(".ccw_ul").children("li").stop().animate({padding:"30px 0px"},450);
        }
    }
//微信部分JS结束

});