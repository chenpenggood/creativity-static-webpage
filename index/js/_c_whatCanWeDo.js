$(function(){

//gf版
    var gfWCWDrhomb = $(".conBig .content .w div");
    var gfWCWDrect  = $(".conBig .content .w span");

    gfWCWDrhomb.mouseenter(function(){
        gfWCWDrect.removeClass("zoomIn").addClass("zoomOutX");
        gfWCWDrect.eq($(this).index()).removeClass("zoomOutX").addClass("zoomIn");
        gfWCWDrhomb.removeClass("zoomIn").addClass("zoomOutX");
        $(this).removeClass("zoomOutX").addClass("zoomIn");

    }).mouseout(function(){
        gfWCWDrect.removeClass("zoomIn").addClass("zoomOutX");
        gfWCWDrhomb.removeClass("zoomOutX").addClass("zoomIn");
    });

    $(document).scroll(function(){
        if($(document).scrollTop()<600){
            gfWCWDrhomb.removeClass("zoomIn").addClass("zoomOutX");
            $(this).removeClass("zoomOutX").addClass("zoomIn");
        } else{
            gfWCWDrhomb.removeClass("zoomOutX").addClass("zoomIn");
        }
    });

//cd版
    var con_foot =$(".con_foot");
    var con_foot_left_cd=$("#con_foot_left_cd");
    var con_foot_center_cd=$("#con_foot_center_cd");
    var con_foot_right_cd =$("#con_foot_right_cd");
    $(window).scroll(function(){
        //console.log($(document).scrollTop());
        if($(document).scrollTop()>1100){
            con_foot_left_cd.stop().animate({left:"65px"},300);
            con_foot_center_cd.stop().animate({top:"-415px"},300);
            con_foot_right_cd.stop().animate({right:"55px"},300);
        }
        if($(document).scrollTop()>2029){
            con_foot_left_cd.stop().animate({left:"-80px"},300);
            con_foot_center_cd.stop().animate({top:"-285px"},300);
            con_foot_right_cd.stop().animate({right:"-80px"},300);
        }
    })
});