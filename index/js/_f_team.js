$(function(){

    var json = [
        {name: "杨涛", position: "PHP工程师"},
        {name: "刘新", position: "PHP工程师"},
        {name: "周武杰", position: "PHP工程师"},
        {name: "闫卫娟", position: "PHP工程师"},
        {name: "尉岩龙", position: "PHP工程师"},
        {name: "邵俊博", position: "PHP工程师"},
        {name: "郑志鹏", position: "前端工程师"},
        {name: "苏男男", position: "前端工程师"},

        {name: "贾红", position: "前端工程师"},
        {name: "刘庆威", position: "PHP工程师"},
        {name: "陈志磊", position: "PHP工程师"},
        {name: "高亚飞", position: "PHP项目经理"},
        {name: "刘兵兵", position: "技术总监"},
        {name: "张鹏", position: "PHP项目经理"},
        {name: "雷少杰", position: "PHP项目经理"},
        {name: "喻彬彬", position: "前端工程师"},

        {name: "陈二伟", position: "Flash设计师"},
        {name: "高美美", position: "设计师"},
        {name: "赵柏卉", position: "设计师"},
        {name: "李明", position: "设计总监"},
        {name: "张永生", position: "总经理"},
        {name: "胡争辉", position: "产品总监"},
        {name: "李辉辉", position: "前端工程师"},
    ]

    //获取需要操作的相关元素：
    var team = document.getElementById("team-content");
    var ularr = team.getElementsByTagName("ul");
    var h2 = team.getElementsByTagName("h2")[0];
    var iarr = team.getElementsByTagName("i");

    //循环遍历iarr数组，将json中的内容加入span中；
    for (var i = 0; i < iarr.length; i++) {
        //i标签中的第一个span；
        iarr[i].children[0].innerHTML = json[i].name;
        //i标签中的第二个span；
        iarr[i].children[1].innerHTML = json[i].position;
    }


    //窗口滑动事件，通过scrolltop的值判断ul何时开始进入：
    function teamscroll() {
        //当scroll().top >= team.offsetTop - document.documentElement.clientHeight / 2时
        if (scroll().top >= team.offsetTop - document.documentElement.clientHeight / 2) {
            //图片team的宽度变成114px:
            animate(h2, {width: 114});
            //每一个UL的left渐渐变成0；进入视线
            for (var p = 0; p < ularr.length; p++) {
                animate(ularr[p], {left: 0}, function () {
                    //当animate执行结束之后，开始执行change函数：
                    change();
                });
            }
        }
        //通过scrolltop的值判断ul何时开始退出：
        if (scroll().top < team.offsetTop - document.documentElement.clientHeight / 2) {
            //图片team的宽度变成0:
            animate(h2, {width: 0});
            for (var i = 0; i < ularr.length; i++) {
                //判断奇、偶行的ul退出的位置
                if (i % 2 == 0) {
                    animate(ularr[i], {left: 1300});
                } else {
                    animate(ularr[i], {left: -1300});
                }
            }
        }
    }


    window.addEventListener("scroll",teamscroll);

    //li中的两个小三角形在鼠标移入的时候出现，移开的时候退出：
    $('li').mouseenter(function () {
        $(this).children('i').stop(true,true).slideDown();
        $(this).children('s').stop(true,true).slideDown();
    }).mouseleave(function () {
        $(this).children('i').stop(true,true).slideUp();
        $(this).children('s').stop(true,true).slideUp();
    })


});


function change() {

    //获取相关元素：
    var team = document.getElementById("team-content");
    var liarr = team.getElementsByTagName("li");
    var imgarr = team.getElementsByTagName("img");

    //定义两个数组分别存放每个li距离上边和距离左边的距离；
    var toparr = [];
    var leftarr = [];

    //通过循环遍历所有的li，获取每个li距离上边和距离左边的距离,并添加到相应的数组中：
    for (var i = 0; i < liarr.length; i++) {
        toparr.push(liarr[i].parentNode.offsetTop);
        leftarr.push(liarr[i].offsetLeft);
    }
    team.onmouseleave=function(){
        for(var i = 0; i < imgarr.length-1; i++) {
            imgarr[i].src = "index/img/team-images/" + (i + 1) + ".9.jpg";
        }
    }
    //开始改变头像
    for (var i = 0; i < liarr.length-1; i++) {
        liarr[i].onmouseover = function () {
            for (var j = 0; j < liarr.length - 1; j++) {
                //页面加载出来的时候，每一张图片的是正面的；
                imgarr[j].src = "index/img/team-images/" + (j + 1) + ".9.jpg";
                //上面的往下看：
                if ((toparr[j] < this.parentNode.offsetTop) && (leftarr[j] == this.offsetLeft)) {
                    imgarr[j].src = "index/img/team-images/" + (j + 1) + ".2.jpg";
                }
                //下面的往上看；
                else if (toparr[j] > this.parentNode.offsetTop && leftarr[j] == this.offsetLeft) {
                    imgarr[j].src = "index/img/team-images/" + (j + 1) + ".1.jpg";
                }
                //左边的往右看
                else if (toparr[j] == this.parentNode.offsetTop && leftarr[j] < this.offsetLeft) {
                    imgarr[j].src = "index/img/team-images/" + (j + 1) + ".4.jpg";
                }
                //    //右边的往左看
                else if (toparr[j] == this.parentNode.offsetTop && leftarr[j] > this.offsetLeft) {
                    imgarr[j].src = "index/img/team-images/" + (j + 1) + ".3.jpg";
                }
                //    //往左下角看
                else if (toparr[j] < this.parentNode.offsetTop && leftarr[j] < this.offsetLeft) {
                    imgarr[j].src = "index/img/team-images/" + (j + 1) + ".6.jpg";
                }
                //    //往右下角看
                else if (toparr[j] < this.parentNode.offsetTop && leftarr[j] > this.offsetLeft) {
                    imgarr[j].src = "index/img/team-images/" + (j + 1) + ".7.jpg";
                }
                //    //往左上角看
                else if (toparr[j] > this.parentNode.offsetTop && leftarr[j] < this.offsetLeft) {
                    imgarr[j].src = "index/img/team-images/" + (j + 1) + ".5.jpg";
                }
                //    //往右上角看
                else if (toparr[j] > this.parentNode.offsetTop && leftarr[j] > this.offsetLeft) {
                    imgarr[j].src = "index/img/team-images/" + (j + 1) + ".8.jpg";
                }
            }
        }
    }
}


//封装缓动动画：
function animate(ele, json, fn) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "z") {
                ele.style.zIndex = json[k];
            } else if (k === "opacity") {
                if (parseInt(getStyle(ele, k) * 100) === 0) {
                    var leader = 0;
                } else {
                    var leader = parseInt(getStyle(ele, k) * 100) || 100;
                }
                var step = parseInt(json[k] * 100 - leader) / 2;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader += step;
                ele.style.opacity = leader / 100;
                ele.style.filter = "alpha(opacity=" + leader + ")"
                if (parseInt(json[k] * 100) !== leader) {
                    flag = false;
                }
            } else {//普通属性
                var leader = parseInt(getStyle(ele, k)) || 0;
                var step = (json[k] - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader += step;
                ele.style[k] = leader + "px";
                if (json[k] !== leader) {
                    flag = false;
                }
            }
        }
        if (flag) {
            clearInterval(ele.timer);
            if (fn) {
                fn();
            }
        }
    }, 30)
}


function getStyle(ele, attr) {
    if (window.getComputedStyle !== undefined) {
        return window.getComputedStyle(ele, null)[attr];
    } else {
        return ele.currentStyle[attr];
    }
}


function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
    }
}