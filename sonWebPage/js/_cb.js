/**
 * Created by JasonChan on 2017/3/16.
 */
function flexMove(obj,att,target,velocity) {
    clearInterval(obj.timeId);
    var speed = 0;
    obj.timeId = setInterval(function(){
        speed += (target - parseInt(gfGetStyle(obj,att)))/8;
        //摩锟斤拷系锟斤拷一锟斤拷选0.7锟斤拷0.5
        speed *= 0.7;
        if(Math.abs(speed) < 1 && Math.abs(target - parseInt(gfGetStyle(obj,att))) < 1) {
            clearInterval(obj.timeId);
            obj.style[att] = target + 'px';
        }else{
            obj.style[att] = parseInt(gfGetStyle(obj,att)) + speed + 'px';
        }
    },velocity);
}

function flexMoveToLeft(ele,arg,time){
    arg = arg || 0;
    time = time || 20;
    flexMove(ele,'left',arg,time);
}
function flexMoveToRight(ele,arg,time){
    arg = arg || 0;
    time = time || 20;
    flexMove(ele,'right',arg,time);
}
function flexMoveToTop(ele,arg,time){
    arg = arg || 0;
    time = time || 20;
    flexMove(ele,'top',arg,time);
}
function flexMoveToBottom(ele,arg,time){
    arg = arg || 0;
    time = time || 20;
    flexMove(ele,'bottom',arg,time);
}

function gfGetStyle(obj,att) {
    if(obj.currentStyle){
        return obj.currentStyle[att];
    } else {
        return getComputedStyle(obj)[att];
    }
}
window.onload =function(){
    var picture = document.getElementById("picture");
    console.log(picture);
    var ulArr = picture.children;
    var ulWidth =ulArr[0].offsetWidth;
    var circle = document.getElementById("circle");
    var ulLliArr = circle.children;
    var btn_right = document.getElementById("btn_right");
    var btn_left = document.getElementById("btn_left");
    var newUl = ulArr[0].cloneNode(true);//锟斤拷愀持碉拷锟揭伙拷锟絣i
    picture.appendChild(newUl);//锟斤拷li锟斤拷拥锟絬l锟斤拷锟斤拷末尾
    newUl.removeAttribute("id","case_list");

    var index = 0;
    var key = 0;//li锟斤拷式锟斤拷
    btn_right.onclick = function () {
        index++;
        if (index == 6) {
            index = 1;
            picture.style.left = 0;
        }

        key++;
        if (key == 5) {
            key = 0;
        }
        for (var i = 0; i < ulLliArr.length; i++) {
            ulLliArr[i].className = '';
        }
        ulLliArr[key].className = 'hover';

        flexMoveToLeft(picture,-index*1024);

    }
    btn_left.onclick = function () {
        index--;
        key--;
        if (index == -1) {
            index = 4;
            picture.style.left = -(index + 1) * ulWidth + 'px';
        }
        if (key == -1) {
            key = 4;
        }
        flexMoveToLeft(picture,-1024*index);

        for (var i = 0; i < ulLliArr.length; i++) {
            ulLliArr[i].className = '';
        }
        ulLliArr[key].className = 'hover';
    }

    for (var i = 0; i < ulLliArr.length; i++) {
        ulLliArr[i].index = i;
        ulLliArr[i].onclick = function () {
            for (var j = 0; j < ulLliArr.length; j++) {
                ulLliArr[j].className = '';
            }
            this.className = "hover";

            flexMoveToLeft(picture,-this.index*1024);

        }
    }


    //    锟斤拷锟劫讹拷锟斤拷锟斤拷装
    function animate(ele, target) {
//bug1:
        clearInterval(ele.timer);
//bug2:
        ele.timer = setInterval(function () {
//bug3:
            var step = target > ele.offsetLeft ? 50 : -50;
            ele.style.left = ele.offsetLeft + step + "px";
//bug4:
//bug5:
            if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        }, 12);
    }

}
$(function(){

    var $pictureTop = $(".picture").offset().top;
    var $Height =$(".experience").height();
    $(document).scroll(function(){
        var top =$(document).scrollTop();
        if(top>($pictureTop-$Height/2)){
            $(".content_banner").slideDown(1000);
        }else if(top<($pictureTop-$Height/2)){
            $(".content_banner").slideUp(1000);
        }
    })

    $("li .up_con").hover(function () {
        $(this).find(".code").stop(true).animate({height: "492px"}, 100);
    }, function () {
        $(this).find(".code").stop(true).animate({height: 0}, 100);
    });


})


//$(function(){
//    $("li .up_con").hover(function () {
//        $(this).find(".code").stop(true).animate({height: "492px"}, 500);
//    }, function () {
//        $(this).find(".code").stop(true).animate({height: 0}, 500);
//    });
//
//    var imgWidth = $(".main_content").width();
//    $("ul.circle li").click(function () {
//        var index = $(this).index();
//
//        $(this).addClass("hover").siblings("li").removeClass("hover");
//        $(".picture").animate({left: "-" + index * imgWidth + "px"}, 500)
//
//    });
//
//
////    var $ulClone = $(".case_list").eq(0).clone(true);
////    $ulClone.appendTo(".picture");
//    var index = 0;
//    $(".btn_right").click(function () {
//        index++;
//        if (index > 4) {
//            index = 0;
//        }
//
//        $("ul.circle li").eq(index).addClass("hover").siblings("li").removeClass("hover");
//        $(".picture").stop().animate({left: "-" + index * imgWidth + "px"}, 500,function(){
//            $(this).animate({left:"-" + (index * imgWidth-20) + "px"},200,function(){
//                $(".picture").animate({left:"-" + index * imgWidth + "px"},200);
//            })
//        })
//    })
//
//    $(".btn_left").click(function () {index--;
//        if (index < 0) {
//            index = 4;
//        }
//        $("ul.circle li").eq(index).addClass("hover").siblings("li").removeClass("hover");
//        $(".picture").stop().animate({left: "-" + index * imgWidth + "px"}, 1000,function(){
//            $(this).animate({left:"-" + (index * imgWidth+20) + "px"},200,function(){
//                $(".picture").animate({left:"-" + index * imgWidth + "px"},200);
//            })
//        })
//    })
//
//    var $pictureTop = $(".picture").offset().top;
//    var $Height =$(".experience").height();
//    $(document).scroll(function(){
//        var top =$(document).scrollTop();
//        if(top>($pictureTop-$Height/2)){
//            $(".content_banner").slideDown(1000);
//        }else if(top<($pictureTop-$Height/2)){
//            $(".content_banner").slideUp(1000);
//        }
//    })
//});