$(function(){
    //注意事项同之前一样
    var bannerMove = false;
    if (bannerMove == false) {
        $(window).scroll(function () {
            bannerMove = true;
            $("#xuph1").animate({
                bottom: -107
            }, 1100);
            $("#xuph2").animate({
                bottom: -107
            }, 2000);
            $(".xutext").animate({
                left: 516
            }, 2700);
        })
    }
});