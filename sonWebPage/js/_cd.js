$(function(){

    //注意事项同之前一样
    var $targetHeight =$(".header").height()+$(".log").height()+$(".banner").height()* 1/2;

    $(window).on('scroll',function(){
        //console.log($targetHeight);
        var $scrollTop =$(document).scrollTop();
        //console.log($scrollTop+"sssssss");
        if($scrollTop>$targetHeight){
            $(".content_circle").stop().animate({bottom:0},700);
        }
        if($scrollTop<$targetHeight || $scrollTop>$targetHeight+$(".content").height()){
            $(".content_circle").stop().animate({bottom:"-120px"},700);
        }
    })

});