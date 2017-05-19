$(function(){

    function showCaseSroll () {
        if ($(document).scrollTop() > 1450) {
            $(".show").children(".showcase").stop().slideDown("400");
        } else {
            $(".show").children(".showcase").stop().slideUp("400");
        }
        if ($(document).scrollTop() > 1600) {
            $(".show").children(".btn").stop().slideDown("400");
        } else {
            $(".show").children(".btn").stop().slideUp("400");
        }
        if ($(document).scrollTop() > 1700) {
            $(".show").children(".picshow").stop().slideDown("400");
        } else {
            $(".show").children(".picshow").stop().slideUp("400");
        }
        if ($(document).scrollTop() > 2000) {
            $(".show").children(".picnum").stop().slideDown("400");
        } else {
            $(".show").children(".picnum").stop().slideUp("400");
        }
    }
    window.addEventListener('scroll',showCaseSroll);

    var btn = document.getElementById("mxbbtn");
    var liss = btn.getElementsByTagName("li");
    var num=0;
    for (i = 0; i < liss.length; i++) {
        num++;
        $(liss[i]).click(function () {
            for (j = 0; j < liss.length; j++) {
                $(liss[j]).removeClass("ready");
            }
            $(this).addClass("ready");
            $(".picshow1").children("ul").eq($(this).index()).show().siblings("ul").hide();
            num=$(this).index()
        })
    }
    var circle = 0;//数轴
    var key = 0;//图片
    var pic1 = document.getElementById("mxbpic1");
    var div = pic1.getElementsByTagName("div")[0];
    var ul = div.getElementsByTagName("ul")
    var lisArr=[];

    var num1 = document.getElementById("mxbnum1");
    var dt = num1.firstElementChild.firstElementChild;
    var dd = num1.firstElementChild.lastElementChild;
    var lisArr2 = dd.children[0].getElementsByTagName("li");
    var dtWidth = dt.offsetWidth;
    //var imgWidth = $(".show .picshow .picshow1 ul li img").eq(0).width();
    var fourWidth=window.screen.width/4;
    $(".show").css({width:window.screen.width})
    $(".show .picshow .picshow1 ul").css({width:fourWidth*12});
    $(".show .picshow .picshow1 ul li").css({width:fourWidth});
    $(".show .picshow .picshow1 ul li img").css({width:fourWidth});
    var imgWidth = $(".show .picshow .picshow1 ul li img").width();
    $(".show .picshow .picshow1 ul li p").css({width:fourWidth});

    //console.log(imgWidth);

    for (var i = 0; i < lisArr2.length; i++) {
        circle++;
        key++;
        lisArr2[i].onmouseenter = function () {
            for (var j = 0; j < lisArr2.length; j++) {
                dt.className = "";
            }
            if (this.innerHTML - 1 < lisArr2.length - 4) {
                $(".picshow1").children("ul").stop().animate({left: -(this.innerHTML - 1) * imgWidth}, 200);
            }
            if (this.innerHTML - 1 >= lisArr2.length - 4) {
                $(".picshow1").children("ul").stop().animate({left: -(lisArr2.length - 4) * imgWidth}, 200);
            }
            key = circle = this.innerHTML - 1;
            dt.className = "run";
            $("dl").children("dt").stop(true).animate({left: key * dtWidth}, 200);
            //$('.picshow1').find("p").addClass("mask zoomTop zoomIn");
            lisArr[0][circle].children[1].className = "mask zoomTop zoomIn";
            lisArr[1][circle].children[1].className = "mask zoomTop zoomIn";
            lisArr[2][circle].children[1].className = "mask zoomTop zoomIn";
        }
        lisArr2[i].onmouseleave = function () {
            //$('.picshow1').find("p").addClass("mask zoomTop zoomOutY");
            lisArr[0][circle].children[1].className = "mask zoomTop zoomOutY";
            lisArr[1][circle].children[1].className = "mask zoomTop zoomOutY";
            lisArr[2][circle].children[1].className = "mask zoomTop zoomOutY";
        }
        //console.log($('.picshow1').find("p"));
    }

    for (var k = 0; k < ul.length; k++) {
        var arr = ul[k].getElementsByTagName("li");
        lisArr.push(arr);
        lisArr.index=k;
        for (var j = 0; j < lisArr[k].length; j++) {
            lisArr[k][j].index = j;
            $('img').siblings('p').addClass("mask zoomTop zoomOutY");
            lisArr[k][j].onmouseenter = function () {
                $(this).children("img").stop().animate({height: "271px", width: "373px"}, 500)
                key = circle = this.innerHTML - 1;
                this.children[1].className = "mask zoomTop zoomIn";
                $("dl").children("dt").stop().animate({left: this.index * dtWidth}, 200)
            }
            lisArr[k][j].onmouseleave = function () {
                $(this).children("img").stop().animate({height: "247px", width: "339px"}, 400)
                this.children[1].className = "mask zoomTop zoomOutY";
            }
        }
    }
});