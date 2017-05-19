$(function(){

    window.addEventListener('scroll',contactScroll);
    var contactFlag = true;//假设还没出来
    function contactScroll() {
        //console.log($(document).scrollTop());
        if ($(document).scrollTop() > 4400) {
            //用JS实现
            //JSanimate(concatMask, {right: 0});
            //var flag = true;//假设还没出来,放这里的话 动画怪异
            if(contactFlag){
                contactFlag = false;
                $('.concatMask').stop().animate({
                    right: 0
                },500);
            }
        }
        else {
            //JSanimate(concatMask, {right: -900});
            if(!contactFlag){
                contactFlag = true;
                $('.concatMask').stop().animate({
                    right: -100 + '%'
                },500);
            }
        }
    }

});