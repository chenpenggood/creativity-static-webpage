
$(function(){

    /**
     * 封装了一个JS的缓动动画
     * @param ele
     * @param json
     * @param fn
     * @constructor
     */
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

    /**
     * 封装了一个匀速运动
     * @param ele
     * @param target
     */
    function JSgetMove(ele,target){
        //进去定时器之前清除一次定时器
        clearInterval(ele.timer);
        ele.timer = setInterval(function() {
            //先让盒子向左移动10px
            //当在400位置的时候  可以一直-10 回到200的位置！！！
            var step = target > ele.offsetLeft ? 10 : -10;  //此时的ele.offsetLeft为200
            ele.style.left = ele.offsetLeft + step + 'px';  //此时的ele.offsetLeft为190
            //这里就让盒子向右边移动10px;  因为代码执行得很快，所以向左走10px再向右走10px肉眼是看不见了
            if(Math.abs(target - ele.offsetLeft) <= Math.abs(step)){
                ele.style.left = target + 'px';   //这里是将 一开始传进来的值  赋回去给这个元素
                clearInterval(ele.timer);
            }
        },30);
    }

    /**
     * 封装了一个获取左侧和头部被滚动挡住的长度
     * @returns {{top: (Number|number), left: (Number|number)}}
     */
    function JSgetScroll() {
        return {
            "top": window.pageYOffset || document.documentElement.scrollTop,
            "left": window.pageXOffset || document.documentElement.scrollLeft
        }
    }

    /**
     * 获取浏览器可视区域的宽度
     * @returns {*}
     */
    function JSclientWidth() {
        if(window.innerWidth){
            return window.innerWidth;
        }
        //一下都是为了兼容IE678，但是也要分有无dtd两种情况
        else if(document.compatMode === "CSS1Comat"){
            return document.documentElement.clientWidth;
        }else {
            return document.body.clientWidth;
        }
    }

    /**
     * 获取浏览器可视区域的高度
     * @returns {*}
     */
    function JSclientHeight() {
        if(window.innerHeight){
            return window.innerHeight;
        }
        //一下都是为了兼容IE678，但是也要分有无dtd两种情况
        else if(document.compatMode === "CSS1Comat"){
            return document.documentElement.innerHeight;
        }else {
            return document.body.innerHeight;
        }
    }

    /**
     * 事件绑定与解除的对象，里面两个方法，  //exp：Event.addEvent
     * @type {{addEvent: Function, removeEvent: Function}}
     */
    var JSEvent = {
        JSaddEvent: function (ele,eve,fn){
            if(ele.addEventListener){
                ele.addEventListener(eve,fn);
            }else if(ele.attachEvent){
                ele.attachEvent("on"+eve,fn);
            }else {
                ele["on"+eve] = fn;
            }
        },
        JSremoveEvent: function (ele,eve,fn){
            if(ele.removeEventListener){
                ele.removeEventListener(eve,fn);
            }else if(ele.detachEvent){
                ele.detachEvent("on"+eve,fn);
            }else {
                ele["on"+eve] = null;
            }
        }
    }

    /**
     * 显示你所传递过来的盒子
     * @param ele
     */
    function JSshow(ele){
        ele.style.display = "block";
        JSanimate(ele,{opacity:1});
    }

    /**
     * 隐藏你所传递过来的盒子
     * @param ele
     */
    function JShide(ele){
        JSanimate(ele,{opacity:0}, function () {
            ele.style.display = "none"
        });
    }

});

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