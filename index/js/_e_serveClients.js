function flexMove(obj,att,target,velocity) {
    clearInterval(obj.timeId);
    var speed = 0;
    obj.timeId = setInterval(function(){
        speed += (target - parseInt(gfGetStyle(obj,att)))/8;
        //摩擦系数一般选0.7或0.5
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

//侧边楼梯条；
window.onload = function () {
    var cb_ul = document.getElementById("cb_ul");
    var cb_ulLiArr = cb_ul.children;

    var toUp = document.getElementById("toUp");
    var conBigTop = document.getElementById("conBig").offsetTop;
    var showTop = document.getElementById("show").offsetTop;
    var linksTop = document.getElementById("links").offsetTop;
    var teamTop = document.getElementById("team").offsetTop;
    var joinBigTop = document.getElementById("joinBig").offsetTop;
    var lScroll = document.getElementById("l-scroll");
    //var dates= [conBigTop,showTop,linksTop,teamTop,joinBigTop]


    lScroll.onmouseenter= function () {
        JSanimate(lScroll, {left: 0});
    }

    //lScroll.onmouseleave = function () {
    //    JSanimate(lScroll, {left: "-100px"});
    //}
    window.addEventListener("scroll", myJScroll);
    //var leader = 0;
    var timer = null;

    function myJScroll() {
        var top = window.pageYOffset || document.documentElement.scrollTop;
        if (top >= conBigTop) {
            lScroll.style.display = "block";
        } else {
            lScroll.style.display = "none";
        }
        var leader1 =top;
        toUp.onclick = function(){
            target = 0;//要用this.index；
            clearInterval(timer);
            timer = setInterval(function () {
                var step = (target - leader1) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader1 += step;
                window.scrollTo(0, leader1);//新技术
                if (Math.abs(target - leader1) <= Math.abs(step)) {
                    window.scrollTo(0, target);
                    clearInterval(timer);
                }

            }, 30);
        }
    }


    var leader = conBigTop;
    var timer = null;
    var dates= [conBigTop,showTop,linksTop,teamTop,joinBigTop]

    for(var i= 0;i<cb_ulLiArr.length-1;i++){
        cb_ulLiArr[i].index = i;
        cb_ulLiArr[i].onclick = function(){
            target = dates[this.index];//要用this.index；
            clearInterval(timer);
            timer = setInterval(function () {
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader += step;
                window.scrollTo(0, leader);//新技术
                if (Math.abs(target - leader) <= Math.abs(step)) {
                    window.scrollTo(0, target);
                    clearInterval(timer);
                }

            }, 30);
        }
    }





    function JSanimate(ele,json,fn){
        clearInterval(ele.timer);
        ele.timer = setInterval(function(){
            var flag = true;
            for(var key in json){
                if(key === "z-index"){
                    ele.style[key] = json[key];
                }else if(key === "opacity"){
                    if(parseInt(JSgetStyle(ele,key))*100 === 0){
                        var leader = 0;
                    }else{
                        var leader = parseInt(JSgetStyle(ele,key))*100 || 100;
                    }
                    var step = (parseInt(json[key]*100) - leader) /10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader += step;
                    ele.style.opacity = leader / 100;
                    ele.style.filter = "alpha(opacity=" + leader + ")";
                    if(parseInt(json[key]*100) !== leader){
                        flag = false;
                    }
                }
                else {
                    var leader = parseFloat(JSgetStyle(ele,key)) || 0;
                    var step = (json[key] - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.ceil(step);
                    leader += step;
                    ele.style[key] = leader + 'px';
                    if(json[key] !== leader){
                        flag = false
                    }
                }
            }
            if(flag){
                clearInterval(ele.timer);
                if(fn){
                    fn();
                }
            }
        },15)
    }

    /**
     * 封装了一个获取最高权限属性值得函数
     * @param ele
     * @param attr
     * @returns {*}
     */
    function JSgetStyle(ele,attr) {
        if (window.getComputedStyle !== undefined) {
            return window.getComputedStyle(ele, null)[attr];
        }
        else {
            return ele.currentStyle[attr];
        }
    }

//轮播
    var ul_list = document.getElementById("ul_list");
    var content_list = document.getElementById("content_list");
    var arrow_right = document.getElementById("arrow_right");
    var arrow_left = document.getElementById("arrow_left");
    var links_con =document.getElementById("links_con");
    var liArr = ul_list.children;
    var imgWidth = content_list.offsetWidth;
    var newLi = liArr[0].cloneNode(true);
    ul_list.appendChild(newLi);
    var newLi1 = liArr[1].cloneNode(true);
    ul_list.appendChild(newLi1);
    var newLi2 = liArr[2].cloneNode(true);
    ul_list.appendChild(newLi2);
    var newLi3 = liArr[3].cloneNode(true);
    ul_list.appendChild(newLi3);

    var timer = null;
    var key = 0;
    arrow_right.onclick = autoPlay;
    arrow_left.onclick = function(){
        key--;
        if(key==-1){
            key =2;
            ul_list.style.left = -(key+1)*imgWidth +'px';
        }
        //animate(ul_list, -key * imgWidth);
        flexMoveToLeft(ul_list,-key*imgWidth)
    };

    function autoPlay(){
        key++;
        if(key==4){
            key =0;
            ul_list.style.left =0;
        }
        //animate(ul_list, -key * imgWidth);
        flexMoveToLeft(ul_list,-key*imgWidth)
    }

    timer = setInterval(autoPlay,3000);
    arrow_left.addEventListener('mouseenter',function(){
        this.className='arrow-left1';
    })

    arrow_left.addEventListener('mouseleave',function(){
        this.className='arrow-left';
    })

    arrow_right.addEventListener('mouseenter',function(){
        this.className='arrow-right1';
    })

    arrow_right.addEventListener('mouseleave',function(){
        this.className='arrow-right';

    })


    links_con.addEventListener('mouseenter',function(){
        clearInterval(timer);
    });
    links_con.addEventListener('mouseleave',function(){
        timer = setInterval(autoPlay,3000);
    });


    //匀速动画封装
    function animate(ele, target) {
        //bug1:要用定时器，先清定时器。
        clearInterval(ele.timer);//一个盒子，一个定时器。想回不会产生影响
        //bug2:把定时器绑定到盒子上。(一个盒子，一个定时器。)
        ele.timer = setInterval(function () {
            //bug3:步长的处理：步长不能永远都是10；
            var step = target > ele.offsetLeft ? 50 : -50;
            ele.style.left = ele.offsetLeft + step + "px";
            //bug4:停下来：目标位置和当前位置只差不足一个步长的时候
            //bug5:抖动问题；   <后面加=
            if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        }, 12);
    }


}


//
$(function(){

    var $showTop = $(".show").offset();
    var $showHeight= $(".show").height();

    $(document).scroll(function(){
        var winHeight = $(document).scrollTop();

        if((winHeight>$showTop.top+$showHeight/2)){
            $(".links-head").fadeIn(500);
            $(".links-con").fadeIn(1000);
        }else{
            $(".links-head").fadeOut(1000);
            $(".links-con").fadeOut(500);
        }
    })


    $(".l-scroll").mouseleave(function(){
        $(this).animate({left:"-100px"},400,"swing");
    });


})

//showcase的js；

//$(function(){
//
//
//
//
//    var index = 0;
//    var imgWidth = $(".content-list").width();
//    var timer = null;
//
//    //点击左键箭头
//    $(".links .arrow .arrow-left").click(function () {
//        changDir(true);
//    })
//    //点击右键箭头
//    $(".links .arrow .arrow-right").click(function () {
//
//        changDir(false);
//    });
//    hover(true);
//    hover(false);
//
//    autoPlay();
//
//
//    $(".links-con").hover(function () {
//
//        clearInterval(timer);
//
//    }, function () {
//        autoPlay();
//    });
//
//
//    function autoPlay() {
//        timer = setInterval(function () {
//            changDir(true);
//        }, 2000);
//
//    }
//
//    function changDir(bolean) {
//        if (bolean) {
//            index--;
//            if (index == -1) {
//                index = 2;
//            }
//            $(".links .content-wrap .ul-list").stop().animate({left: "-" + index * imgWidth + "px"});
//        } else {
//            index++;
//            if (index == 3) {
//                index = 0;
//            }
//            $(".links .content-wrap .ul-list").stop().animate({left: "-" + index * imgWidth + "px"});
//
//        }
//
//    }
//
//    //封装鼠标移上去箭头颜色变色；
//    function hover(boolean) {
//        if (boolean) {
//            $(".arrow .arrow-left").hover(function () {
//                $(this).addClass("arrow-left1").removeClass("arrow-left");
//            }, function () {
//                $(this).removeClass("arrow-left1").addClass("arrow-left");
//            });
//        } else {
//            $(".arrow .arrow-right").hover(function () {
//                $(this).addClass("arrow-right1").removeClass("arrow-right");
//            }, function () {
//                $(this).removeClass("arrow-right1").addClass("arrow-right");
//            });
//        }
//    }
//
//
//    var $showTop = $(".show").offset();
//    var $showHeight= $(".show").height();
//
//    $(document).scroll(function(){
//        var winHeight = $(document).scrollTop();
//        //console.log(winHeight);
//
//        if((winHeight>$showTop.top+$showHeight/2)){
//            $(".links-head").fadeIn(500);
//            $(".links-con").fadeIn(1000);
//        }else{
//            $(".links-head").fadeOut(1000);
//            $(".links-con").fadeOut(500);
//        }
//    })
//
//
//    $(".l-scroll").mouseleave(function(){
//        $(this).animate({left:"-100px"},400,"swing");
//    });
//
//})