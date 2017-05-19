$(function () {
    var joinBig = $(".joinBig");
    var join_top = $(".join_top");
    var join_top_slogan = $(".join_top_slogan");
    var join_top_line = $(".join_top_line");
    var joinSpan = $(".join_top_line span");
    var join_top_img = $(".joinBig_bigpic");
    var myw = document.getElementById("myw");
    var mywLiArr = myw.getElementsByTagName("li");
    var aArr = myw.getElementsByTagName("a");
    var join_mid_ul = $(".join_mid .myw ul");
    var myw_li_span = $(".join_mid>.myw>ul>span");

    function joinScroll() {
        var joinTargetHeight = $(".warp").height() + $(".log").height() + $(".main").height() + $("#conBig").height() + $("#show").height() + $("#links").height() + $("#l-scroll").height();
        if ($(document).scrollTop() > joinTargetHeight) {
            join_top_slogan.stop().animate({left: "42%", opacity: 1}, 400);
            joinSpan.stop().animate({right: 0, opacity: 1}, 400);
        }
        if ($(document).scrollTop() < joinTargetHeight || $(document).scrollTop() > joinTargetHeight + $("#team").height() * 1 / 2) {
            join_top_slogan.stop().animate({left: 0, opacity: 0}, 400);
            joinSpan.stop().animate({right: 0, opacity: 0}, 400);
        }
        if ($(document).scrollTop() > 3628) {
            join_top_img.stop().animate({top: "30%", opacity: 1}, 400);
            join_mid_ul.stop().animate({top: "-10%", opacity: 1}, 400);
        } else {
            join_top_img.stop().animate({top: "60%", opacity: 0}, 400);
            join_mid_ul.stop().animate({top: 0, opacity: 0}, 400);
        }
    }


    window.addEventListener("scroll", joinScroll);

    var a = $(".myw>ul>li");

    for ( var j = 0; j < aArr.length; j++ ) {
        aArr[j].index = j;
        aArr[j].onmouseover = function () {
            this.style.background = 'url("index/img/yb_job' + (this.index + 1) + 'a.png")';
            if (this.index < 2) {
                myw_li_span.eq(this.index).removeClass("zoomOutX");
                myw_li_span.eq(this.index).addClass("zoomIn");
            } else {
                myw_li_span.eq(this.index).removeClass("zoomOutX");
                myw_li_span.eq(this.index).addClass("zoomIn");
            }
        }
        aArr[j].onmouseout = function () {
            this.style.background = "";
            myw_li_span.eq(this.index).removeClass("zoomIn");
            myw_li_span.eq(this.index).addClass("zoomOutX");

        }
    }





    var textArr = [
        '东', '南', '西', '北', '中', '发', '白','?','!','@'
    ]
    var finalArr = [
        '想', '加', '入','我','们','？'
    ]

    var isMove = false;
    $('#chaffle').mouseenter(function () {
        if (isMove == true) return;
        isMove = true;
        $(this).text('');
        for (var i = 0; i < finalArr.length; i++) {
            $('<span class="random">' + textArr[i] + '<span>').appendTo('#chaffle');
        }
        var time = 0;
        var inter = setInterval(function () {
            $('span.random').each(function (index, dom) {
                $(dom).text(textArr[parseInt(Math.random() * 5)]);
            })
            time++;
            if (Math.floor(time / 10) == 1) {
                time = 0;
                var currentIndex = $('span.random').eq(0).removeClass('random').index();
                $('#chaffle>span').eq(currentIndex).text(finalArr[currentIndex]);
                if ($('span.random').length == 0) {
                    clearInterval(inter);
                    $('#chaffle >span').remove();
                    $("#chaffle").text('想加入我们？');
                    isMove = false;
                }
            }


        }, 20)
    })
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop,
            left: window.pageXOffset || document.documentElement.scrollLeft
        }
    }
});